import React from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";

const user = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] },
];

function Person() {
  const { id } = useParams();
  console.log(useParams());
  
  function temp(id) {
    return user.find((p) => p.id === id);
  }

  let data = temp(parseInt(id));
  console.log(data);

  return (
    <div>
      <h3>{data.name} friends</h3>

      {data.friends.map((id) => (
        <li key={id}>
          <Link to={`${id}`}>{temp(id).name}</Link>
        </li>
      ))}

      <Routes>
        <Route path={":id/*"} element={<Person />} />
      </Routes>
    </div>
  );
}
export default Person;
