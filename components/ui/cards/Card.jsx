import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  /**variables */
  const [fav, setFav] = useState(false);

  /**methods */
  const handleFavBtn = () => {
    setFav(!fav);
  };

  return (
    <div
      className="card-container"
      style={{ width: props.card_container_width || "" }}
    >
      <div className="card-img-container">
        <img src={props.product_image} alt="product_img" />
        <div
          className="card-img-tag"
          style={{
            backgroundColor: props.tag_bg_color || "",
            display: props.tag_title ? "block" : "none",
          }}
        >
          {props.tag_title || ""}
        </div>
      </div>
      <div className="card-details-container">
        <div className="card-details-text-container">
          <div className="card-name">{props.product_name}</div>
          <div className="card-price">{props.product_price}</div>
        </div>
        <div className="card-fav-btn" onClick={handleFavBtn}>
          {fav ? (
            <img src="./imgs/fav-full-icon.svg" alt="" />
          ) : (
            <img src="./imgs/fav-icon.svg" alt="" />
          )}
        </div>
      </div>
      <button className="add-to-cart-btn" style={props.add_to_cart_style}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
