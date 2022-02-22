import React from "react";
import { useParams } from "react-router-dom";

function ServicesId() {
  const { id } = useParams();
  return (
    <div>
      <h4>
        {id} - Thank you for visit
      </h4>
    </div>
  );
}
export default ServicesId;
