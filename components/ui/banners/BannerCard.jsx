import React from "react";
import "./banner-card.css";

const BannerCard = (props) => {
  return (
    <div className="banner-card-container">
      <img src={props.Banner_Card_Img} alt="banner-card" />
    </div>
  );
};

export default BannerCard;
