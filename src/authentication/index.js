import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Protected from "./protected";

function Index() {

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Protected path="/about" auth={true}>
        <About />
      </Protected>
      
    </div>
  );
}

export default Index;
