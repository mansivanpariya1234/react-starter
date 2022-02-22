import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setClearInfo, setUserInfo } from "../redux/useraction";
import Component2 from "./component2";

function Component1() {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const Submit = (e) => {
    setData("");
    const person = {
      id: new Date().getTime(),
      username: data,
    };
    dispatch(setUserInfo(person));
  };

  const Clear = () => {
    dispatch(setClearInfo(data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={Submit}>Submit</button>
      <button onClick={Clear}>Clear</button>
      <br />
      <br />
      <Component2 />
    </div>
  );
}
export default Component1;
