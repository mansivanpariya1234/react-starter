import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const login = () => {
    if (data.username && data.password) {
      console.log("data successfully");
      localStorage.setItem("login", "true");
      navigate("/home");
    } else alert("fill all the data");
  };
  // console.log(localStorage.getItem('login'));

  return (
    <div>
      <div>
        <label>UserName:</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Register;
