import { Table, Space, Button, notification } from "antd";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/transfer/search";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setDeleteInfo,
  setEditInfo,
  setFilterInfo,
  setSaveInfo,
  setSearchInfo,
  setSignInUser,
  setUpdateInfo,
} from "../redux/useraction";

function Home() {
  const data = "http://localhost:5000/api/posts";
  //------new user-------
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  //------edit data-------
  const [temp, setTemp] = useState({});
  //------search data-----
  const [search, setSearch] = useState("");
  //------toggle update add------
  const [show, setShow] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showList = useSelector((state) => state.user.userData);
  const edit = useSelector((state) => state.user.editData);
  const searchData = useSelector((state) => state.user.searchData);
  const allData = useSelector((state) => state.user.filterData);

  console.log("redux:", showList);

  const newArr = allData.map((arr) => {
    return { key: arr.id, ...arr };
  });

  const newArr1 = newArr.map((arr1) => {
    return { ...arr1, name: arr1.username + arr1.password };
  });
  console.log("newArr1:", newArr1);

  useEffect(() => {
    fetchPerson();
  }, []);

  const fetchPerson = async () => {
    //debugger;
    try {
      const fetchData = await axios.get("http://localhost:5000/api/posts");
      dispatch(setSignInUser(fetchData.data));
    } catch (error) {
      console.log("fetchData error", error);
    }
  };

  useEffect(() => {
    fetchEditUSer();
  }, [edit]);

  const fetchEditUSer = () => {
    if (edit !== null) {
      setTemp({
        id: edit.id,
        username: edit.username,
        password: edit.password,
      });
    }
  };

  const Logout = () => {
    navigate("/");
    localStorage.removeItem("login");
  };

  //----------add user--------
  const onAdd = async (e, newUser) => {
    e.preventDefault();
    const person = {
      id: new Date().getTime(),
      username: newUser.username,
      password: newUser.password,
    };
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/posts/save",
        data: person,
      });
      dispatch(setSaveInfo(person));
      notification.open({ message: "Add New Data Successfully" });
    } catch (error) {
      console.log("add new data error");
    }
  };

  //----------delete user----------
  const onDelete = async (id) => {
    //debugger;
    try {
      let deleteData = await axios.delete(
        "http://localhost:5000/api/posts/delete/" + id
      );

      dispatch(setDeleteInfo(id));
      notification.open({ message: "Delete Data Successfully" });
      console.log(deleteData);
    } catch (error) {
      console.log("delete Data error");
    }
  };

  //--------fetch update data------
  const onEdit = (id) => {
    setShow(false);
    dispatch(setEditInfo(id));
  };

  //-----save update data--------
  const onUpdate = async (e, id) => {
    //debugger;
    e.preventDefault();
    setShow(true);
    try {
      await axios({
        method: "put",
        url: "http://localhost:5000/api/posts/update/" + id,
        data: temp,
      });
      dispatch(setUpdateInfo(temp));
      notification.open({ message: "Update Data Successfully" });
    } catch (error) {
      console.log("update data error");
    }
    setTemp({ username: "", password: "" });
  };

  //------search data----------
  const handleSearchChange = (e) => {
    dispatch(setSearchInfo(e.target.value));
  };

  useEffect(() => {
    setSearch(searchData);
  }, [searchData]);

  useEffect(() => {
    dispatch(setFilterInfo(search));
  }, [search]);

  const showModal = (record) => {
    //navigate(`/home/${record.id}`, { state: record});
    navigate(`/home/${record.id}`);
  };

  return (
    <div className="table">
      <br />
      <Button type="primary" onClick={Logout}>
        Logout
      </Button>
      <br />
      <br />
      <h4>Welcome To Home Page...</h4>
      <br />

      {/* -----add new----- */}
      {show ? (
        <div>
          <form>
            <input
              type="text"
              placeholder="enter username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
            &nbsp;
            <input
              type="text"
              placeholder="enter password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            &nbsp;
            <button
              id={`add${newUser.id}`}
              className="adduser"
              onClick={(e) => onAdd(e, newUser)}
            >
              Add
            </button>
          </form>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="text"
              placeholder="update username"
              value={temp.username}
              onChange={(e) => setTemp({ ...temp, username: e.target.value })}
            />
            &nbsp;
            <input
              type="text"
              placeholder="update password"
              value={temp.password}
              onChange={(e) => setTemp({ ...temp, password: e.target.value })}
            />
            &nbsp;
            <button
              id={`update ${temp.id}`}
              className="save"
              onClick={(e) => onUpdate(e, temp.id)}
            >
              Update
            </button>
          </form>
        </div>
      )}

      {/* -----search input-------- */}
      <br />
      <div>
        <Space>
          <Search
            placeholder="Search Data"
            onChange={handleSearchChange}
            value={search}
          />
        </Space>
        <br />
        <br />

        <div>Total {allData.length} Data Filter</div>

        {/* ------------table------------ */}
        <Table
          dataSource={newArr1}
          bordered
          size="small"
          onRow={(record) => ({
            onClick: () => showModal(record),
          })}
        >
          <Column title="Id" dataIndex="id" />
          <Column title="Username" dataIndex="username" />
          <Column
            title="Password"
            dataIndex="password"
            onCell={(record) => {
              return {
                style: { background: record.password === "1234" && "red" },
              };
            }}
          />
          <Column title="Name" dataIndex="name" />
          <Column
            title="Action"
            render={(showList) => (
              <Space size="middle">
                <Button
                  size="small"
                  type="submit"
                  danger
                  onClick={() => onDelete(showList.id)}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  style={{ borderColor: "blue", color: "blue" }}
                  onClick={() => onEdit(showList.id)}
                >
                  Edit
                </Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}
export default Home;

// {/* <div>
//   <table>
//     <thead>
//       <th>id</th>&nbsp;
//       <th>Name</th>&nbsp;
//       <th>Password</th>&nbsp;
//       <th>Action</th>
//     </thead>

//     <tbody>
//       {allData.map((x, index) => (
//         <tr key={index}>
//           <td>{x.id}</td>&nbsp;
//           <td>{x.username}</td>&nbsp;
//           <td>{x.password}</td>&nbsp;
//           <td>
//             <button id={`delete ${x.id}`} onClick={() => onDelete(x.id)}>
//               delete
//             </button>
//           </td>
//           <td>
//             <button id={`edit ${x.id}`} onClick={() => onEdit(x.id)}>
//               edit
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>; */}
