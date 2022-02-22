import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Protected = ({children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          localStorage.getItem('login') ? (
            children
          ) : (
            <Navigate to={{ pathname: "/signin" }} />
          )
        }
      />
    </Routes>
  );
};
export default Protected;
