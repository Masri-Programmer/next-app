import React from "react";
import "./cart-bottom.css";
import { Link } from "react-router-dom";

const CartBottom = () => {
  return (
    <div className="cart-bottom-container">
      <div className="check-all">
        <input type="checkbox" className="circle-checkbox" id="item-check" />
        <label htmlFor="item-check" className="check-label"></label>
        <span>All</span>
      </div>
      <div className="bottom-total-price-content">
        <span className="total-price-span-text">Total Price</span>
        <span className="total-price-amount">$99.99</span>
      </div>
      <Link to={"/order-summary"} className="checkout-btn">
        <span>Checkout</span>
      </Link>
    </div>
  );
};

export default CartBottom;
