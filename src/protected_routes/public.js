import React from "react"
import { useNavigate } from "react-router-dom"

 function Public({auth}){
     const navigate = useNavigate()
     const login = () =>{
        auth()
        navigate("/protected")
     }
     return(
         <div>
             <h3>Public Page...</h3>  
             <h4>you are not login!! first login then redirect protected page</h4>  
             <button onClick={login}>login</button>
         </div>
     )
 }
 export default Public