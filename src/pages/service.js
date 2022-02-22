import React from "react";
import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom";
import ServicesId from "./serviceid";

function Services() {
  const match = useMatch({ path: "/services/*" });
  const navigate = useNavigate();

    console.log(match);
    console.log("path: ", match.pattern.path);
    console.log("pathnamebase: ", match.pathnameBase);
    console.log("pathname: ", match.pathname);

  const clickhandler = () => {
    navigate(`${match.pathnameBase}/services1`);
  };

  return (
    <div>
      <h4>All services</h4>

      <button onClick={clickhandler}>service 1</button>&nbsp;

      <Link to={`${match.pathnameBase}/services2`}>services2</Link>

      <Routes>
        <Route path="/:id" element={<ServicesId />} />
      </Routes>
    </div>
  );
}
export default Services;
