import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "./useraction";

function SignButton() {
  const [data, setData] = useState([{}]);
  const userList = useSelector((state) => state.user.userData.info);
  const dispatch = useDispatch();

  console.log(userList)

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        dispatch(setUserInfo(result))
      })
      .catch((error) => alert(error));
  },[]);


  const Clicked = () => {
    console.log(data);
  };

  return (
    <div>
      <button onClick={Clicked}>Clicked</button>
      {
          userList && userList.map(i => <div>{i.username}</div>)
      }
    </div>
  );
}
export default SignButton;

//  <div>
//        {data.map((x)=>(
//            <>
//               <h4>{x.id}-{x.username}-{x.password}</h4>
//             </>
//         ))}
//  </div>
