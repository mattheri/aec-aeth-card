import React from "react";
import "./CardInfomation.css";

const CardInformation = (props) => {
  return (
    <div className="card-information">
      <span className="right">{props.eth}ETH</span>
      <time className="left">{props.numberOfDaysLeft} days left</time>
    </div>
  );
};

export default CardInformation;
