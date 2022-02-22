import { Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setFindInfo } from "../redux/useraction";

function Modals() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  const { id } = useParams();
  console.log(id);

  const data = useSelector((state) => state.user.findData);
  console.log("data: ", data);

  useEffect(() => {
    isData();
  });

  const isData = () => {
    dispatch(setFindInfo(id));
  };

  return (
    <div>
      <Modal
        title="User Information"
        visible
        onOk={() => navigate("/home")}
        onCancel={() => navigate("/home")}
      >
        <h4>User Information</h4>
        <h4>ID: {data.id}</h4>
        <h4>Username: {data.username}</h4>
        <h4>Password: {data.password}</h4>
      </Modal>
    </div>
  );
}
export default Modals;
