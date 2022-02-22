import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteInfo, setEditInfo, setUpdateInfo } from "../redux/useraction";

function Component2() {
  const [user,setUser] = useState("")
  const [temp, setTemp] = useState({})

  const show = useSelector((state) => state.user.userData);
  const edit = useSelector((state)=> state.user.editData);

  const dispatch = useDispatch();
  //console.log("show:", show);
  console.log("edit", edit)

  useEffect(()=>{
    fetch();
  },[edit])

  const fetch = () => {
    if(edit !== null){
      setTemp({
        id: edit.id,  
        username: edit.username
      })
    }
  }
  console.log("temp",temp)

  const onDelete = (id) => {  
    dispatch(setDeleteInfo(id));
  };
  
  // const _show = [...show]
  // let arr = null;
  // let index=0;
  // for(let i=0; i<_show.length; i++){
  //   let a = _show[i];
  //   if(a.id === id){
  //     index = i
  //     arr = a;
  //   }
  //   setUser(index)
  // }
  // setTemp(arr)

  const onEdit = (id,index) => {
    setUser(index)
    dispatch(setEditInfo(id))
  };

  const onUpdate = () =>{
    setUser()
    dispatch(setUpdateInfo(temp))
  }

  return (
    <div> 
       {/* user index: {user} */}
        {show.map((a, index) => (
          <div className="app" key={index}>

           {user === index ? <input type="text" value={temp.username} onChange={(e) =>setTemp({ ...temp, username: e.target.value})}/> : <>{a.username}</>} &nbsp;

            <button onClick={() => onDelete(a.id)}>Delete</button>&nbsp;

           {user === index ? <button onClick={() => onUpdate()}>Update</button> : <button onClick={() => onEdit(a.id,index)}>Edit</button>} 
          </div>
        ))}
    </div>
  );
}
export default Component2;
