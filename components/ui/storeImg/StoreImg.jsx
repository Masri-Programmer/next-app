import React from "react";
import "./store-img.css";
import { Link } from "react-router-dom";

const StoreImg = (props) => {
  return (
    <Link to={props.link || "/"} className="store-item-container">
      <div className="gradient-overlay"></div>
      <img src={props.store_Img} alt="store" className="black-blend-mode" />
      <span className="store-name">{props.store_title}</span>
    </Link>
  );
};

export default StoreImg;
