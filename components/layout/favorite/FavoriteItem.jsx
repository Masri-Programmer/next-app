import React from "react";
import "./favorite-item.css";

const FavoriteItem = () => {
  return (
    <div className="favorite-items-container">
      <div className="favorite-content-container">
        <div className="fav-item-left-side">
          <img src="./imgs/productImg.png" alt="product" />
          <div className="fav-text-content">
            <span className="fav-item-title">Nike Shoes</span>
            <span className="fav-item-price">Total: $59.99</span>
          </div>
        </div>
        <img src="./imgs/fav-full-icon.svg" alt="heart" className="fav-icon" />
      </div>
      <div className="favorite-content-container">
        <div className="fav-item-left-side">
          <img src="./imgs/productImg.png" alt="product" />
          <div className="fav-text-content">
            <span className="fav-item-title">Addidas Shoes</span>
            <span className="fav-item-price">Total: $99.99</span>
          </div>
        </div>
        <img src="./imgs/fav-full-icon.svg" alt="heart" className="fav-icon" />
      </div>
    </div>
  );
};

export default FavoriteItem;
