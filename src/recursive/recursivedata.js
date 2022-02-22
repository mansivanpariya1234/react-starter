import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import Person from "./person";

function RecursiveData(){
  
    return(
        <div>
            <Routes>
                <Route path ="/:id/*" element={<Person/>}/>
                <Route path="/" element={<Navigate to ="/0"/>}/>
            </Routes>
        </div>
    )
}
export default RecursiveData;