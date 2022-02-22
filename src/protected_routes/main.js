import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Public from "./public";
import Protected from "./protected";
import { useState } from "react/cjs/react.development";

function Main() {
  const [user, setUser]=useState(false)
  console.log(user)
  
  return (
    <div>
      <Routes>
        <Route path="/public" element={<Public auth={()=>setUser(true)}/>} />
        {user && <Route path="/protected" element= {<Protected log={()=>setUser(false)}/>} />}
        <Route path="*" element={<Navigate to={user? "/protected" : "/public"}/>}/>

      </Routes>
    </div>
  );
}
export default Main;
  