import React from "react"
import { useNavigate } from "react-router-dom"

 function Protected({log}){
     const navigate = useNavigate()
     const logout=()=>{
        log()
        navigate("/public")
     }

     return(
         <div>
             <h3>Protected Page...</h3>
             <h4>you are login...</h4>
             <button onClick={logout}>logout</button>
         </div>
     )
 }
 export default Protected