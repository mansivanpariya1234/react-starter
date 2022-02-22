import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoutes = ({children, ...rest }) => {
    console.log(children)
    console.log(rest)
    console.log(Auth.getAuth())
  return (
    <Routes>
      <Route
        {...rest}
        element={
          Auth.getAuth() ? children : <Navigate to={{ pathname: "/home" }} />
        }
       
      />
    </Routes>
  );
};
export default ProtectedRoutes;
