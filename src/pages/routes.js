import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Services from "./service";

function RoutesPage() {
  const navigate = useNavigate();

  // const service = () => {
  //   navigate("/services");
  // };

  return (
    <div>
      <Link to="/">home</Link>&nbsp;
      <Link to="/about">about</Link>&nbsp;
      <button onClick={()=>navigate("/services")}>service</button>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/services/*" element={<Services />} />
      </Routes>
    </div>
  );
}

export default RoutesPage;
