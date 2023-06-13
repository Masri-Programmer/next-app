import React from "react";
import "./cart-card.css";
import { useState } from "react";

const CartCard = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="cart-card-container">
      <div
        className="check-item"
        style={props.cartCheck && { display: props.cartCheck }}
      >
        <input
          type="checkbox"
          className="circle-checkbox"
          id={props.check_id}
        />
        <label htmlFor={props.check_id} className="check-label"></label>
      </div>
      <div className="cart-item-content-container">
        <img src="./imgs/productImg.png" alt="" className="product-image" />
        <div className="item-content">
          <div
            className="delete-icon"
            style={props.cartDelete && { display: props.cartDelete }}
          >
            <img src="./imgs/trash-icon.svg" alt="" />
          </div>
          <div className="item-text-container">
            <div className="item-title">Nike Shoes</div>
            <div className="item-variation">Color | Size:42</div>
            <div className="item-total">
              <div className="total-text">Total: 59.99</div>
              <div className="counter">
                <button className="counter-btn minus" onClick={decrement}>
                  -
                </button>
                {/* <div className="value-container">
                  <span className="value" id="counter-value">
                    {count}
                  </span>
                  <span className="next-value" id="next-counter-value">
                    {count + 1}
                  </span>
                </div> */}
                <span className="value">{count}</span>
                <button className="counter-btn plus" onClick={increment}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
