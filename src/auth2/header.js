import React from "react";
import { Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import ProtectedRoutes from "./protected";
import Auth from "./auth";

function Header() {
useNavigate()
  
  const login = () => {
    Auth.signin();
    console.log(Auth.getAuth()) 
  };

  const logout = () => {
    Auth.signout();
  };

  return (
    <div>
      <Link to="/home">HOME</Link>
      <br />
      <Link to="/about">ABOUT</Link>
      <br />
      <br />
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <ProtectedRoutes path="/about">
        <About />
      </ProtectedRoutes>
    </div>
  );
}

export default Header;
