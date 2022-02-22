import React from "react";
import {  useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    
    const Logout = () =>{
        localStorage.removeItem('login')
        navigate("/register")
    }
    return(
        <div>
             <h2>Welcome To HomePage You Are Login...</h2>
             <button onClick={Logout}>Logout</button>
        </div>
    )
}
export default Home;