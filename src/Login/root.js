import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/home";
import Private from "./Private";
import Register from "./register";

function RootRoute() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/register")}>Register</button> &nbsp;
      <Link to="/home">Home</Link>
      <br />
      <br />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Private path="/home">
        <Home />
      </Private>
    </div>
  );
}
export default RootRoute;
