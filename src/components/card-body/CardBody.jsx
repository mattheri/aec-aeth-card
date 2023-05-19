import React from "react";
import "./CardBody.css";

const CardBody = (props) => {
  return (
    <div className="card-body">
      <p>{props.body}</p>
    </div>
  );
};

export default CardBody;
