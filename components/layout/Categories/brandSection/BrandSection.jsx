import React from "react";
import "./brand-section.css";
import { Link } from "react-router-dom";

const BrandSection = () => {
  return (
    <div className="cat-brand-section-container">
      <Link to={"/category-details"} className="cat-brand-section-content">
        <img src="./imgs/swiperImg.png" alt="" />
        <span className="cat-brand-title">Nike</span>
      </Link>
      <div className="cat-brand-section-content">
        <img src="./imgs/swiperImg.png" alt="" />
        <span className="cat-brand-title">addidas</span>
      </div>
    </div>
  );
};

export default BrandSection;
