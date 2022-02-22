import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

//const url = "http://localhost:5000/api/posts";

function SignIn() {
  const [form] = Form.useForm();
  const [data, setData] = useState({ username: "", password: "" });
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.username && data.password) {
      setShow(false);
    } else setShow(true);
  }, [data]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  //console.log(data);

  const SignIn = async () => {
    if (data.username && data.password) {
      try {
        await axios({
          method: "post",
          url: "http://localhost:5000/api/posts/check",
          data: data,
        });
        localStorage.setItem("login", "true");
        navigate("/home");
        console.log("login Successful");
      } catch (error) {
        console.log("await error");
      }
    }
  };

  // const SignIn =  () => {
  //   if (data.username && data.password) {
  //     axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/posts/check",
  //       data: data,
  //     })
  //       .then((result) => {
  //         localStorage.setItem("login", "true");
  //         navigate("/home");
  //         console.log("login Successful");
  //       })
  //       .catch((err) => alert("Username or Password Incorrect"));
  //   }
  // };

  return (
    <Form form={form} layout="horizontal">
      <Form.Item
        label="Username"
        name="username"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        rules={[{ required: true, message: "Please input your username!" }]}
        onChange={(e) => onChangeHandler(e)}
      >
        <Input
          name="username"
          placeholder="Enter Username"
          type="text"
          prefix={<UserOutlined />}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        rules={[{ required: true, message: "Please input your Password!" }]}
        onChange={(e) => onChangeHandler(e)}
      >
        <Input.Password
          name="password"
          placeholder="Enter Password"
          type="password"
          prefix={<LockOutlined />}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          disabled={show}
          onClick={() => SignIn()}
        >
          SignIn
        </Button>
      </Form.Item>

      {/* <Form.Item shouldUpdate>
      {()=>(
        <Button type="primary" shape="round" htmlType="submit" disabled={
          !form.isFieldsTouched(true) ||
          !!form.getFieldsError().filter(({ errors }) => errors.length).length
        } onClick={() => SignIn()}> SignIn </Button>
      )}
      </Form.Item> */}
    </Form>
  );
}

export default SignIn;
