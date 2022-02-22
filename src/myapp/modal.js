import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";


function Modals() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { id } = useParams();
  console.log(id);

  const allData = useSelector((state) => state.user.userData);
  console.log(allData);

  const temp = allData;
  let element = null;
  for (let i = 0; i < temp.length; i++) {
    let a = temp[i];
    if (a.id === parseInt(id)) {
      element = a;
      break;
    }
  }

  return (
    <div>
      <Modal
        title="User Information"
        visible
        onOk={() => navigate("/home")}
        onCancel={() => navigate("/home")}
      >
        <h4>User Information</h4>
        <h4>ID: {element.id}</h4>
        <h4>Username: {element.username}</h4>
        <h4>Password: {element.password}</h4>
      </Modal>
    </div>
  );
}
export default Modals;
