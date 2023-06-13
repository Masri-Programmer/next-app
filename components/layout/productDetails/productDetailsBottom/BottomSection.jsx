import React from "react";
import "./bottom-section.css";
import { Link } from "react-router-dom";

const BottomSection = () => {
  return (
    <div className="details-botttom-container">
      <button className="details-bottom-btn fill-bg-orange">Add to Cart</button>
      <Link to={"/checkout"} className="details-bottom-btn">
        <span>Buy Now</span>
      </Link>
    </div>
  );
};

export default BottomSection;
