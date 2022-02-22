import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Private = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          localStorage.getItem("login") ? (
            children
          ) : (
            <Navigate to={{ pathname: "/register" }} />
          )
        }
      />
    </Routes>
  );
};
export default Private;
