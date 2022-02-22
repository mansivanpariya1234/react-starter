import { Button } from "antd";
import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./home";
import Modals from "./modal";
import Protected from "./protected";
import SignIn from "./sign";

function SignRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location)

  const Clicked = () => {
    navigate("/signin");
  };

  const isLogin = () => {
    return location.pathname === "/";
  };

  // const getData = async () => {
  //   var data = "Hello World";
  //   return data;
  // };
  // getData().then((data) => console.log(data));

  // const data = () =>{
  //  const temp = new Promise((resolve, reject) => {
  //     try {
  //       setTimeout(() => {
  //         resolve("run");
  //       }, 3000);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  //   return temp;
  // }
  
  // async function myData() {
  //   try {
  //     let y = await data();
  //     console.log(y);
  //   } catch (error) {
  //     console.log("reject :", error);
  //   } finally {
  //     console.log("run finally block");
  //   }
  // }
  // myData();

  return (
    <div>
      {isLogin() && (
        <Button type="primary" onClick={Clicked}>
          Login
        </Button>
      )}
      {/* <Link to="/home">Home</Link> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home/:id" element={<Modals />}/>
      </Routes>
      <Protected path="/home">
        <Home />
      </Protected>
    </div>
  );
}
export default SignRoute;
