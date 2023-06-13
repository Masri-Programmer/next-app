import React from "react";
import "./cart-list.css";
import CartCard from "../../../ui/cartCards/CartCard";

const CartList = () => {
  return (
    <div className="cart-list-container">
      <CartCard check_id={"item-check-1"} />
      <CartCard check_id={"item-check-2"} />
    </div>
  );
};

export default CartList;
