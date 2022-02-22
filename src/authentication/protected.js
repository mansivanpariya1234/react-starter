import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Protected = ({ auth, children, ...rest }) => {
  console.log(rest);
  console.log(auth);
  console.log(children);

  return (
    <Routes>
      <Route
        {...rest}
        element= {auth ? children : <Navigate to = {{pathname: "/"}}/>}
      />
    </Routes>
  );
};

export default Protected;
