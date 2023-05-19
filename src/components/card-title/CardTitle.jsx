import React from "react";
import "./CardTitle.css";

const CardTitle = (props) => {
  return <h3 className="card-title">{props.title}</h3>;
};

export default CardTitle;
