import React from "react";
import "./brand-card.css";
import { Link } from "react-router-dom";

const BrandCard = (props) => {
  return (
    <Link to={props.link || null} className="brand-card-container">
      <img src={props.img} alt="brand" />
      <span>{props.brand_name}</span>
    </Link>
  );
};

export default BrandCard;
