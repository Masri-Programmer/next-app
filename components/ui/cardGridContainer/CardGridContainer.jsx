import React from "react";
import "./card-grid-container.css";
import Card from "../cards/Card";

const CardGridContainer = (props) => {
  const data = props.data;
  return (
    <div
      className="grid-container"
      style={{ marginTop: props.grid_container_margin }}
    >
      <span className="card-grid-title" style={props.title_style || null}>
        {props.card_grid_container_title}
      </span>
      <div
        className="cards-grid-container"
        style={props.grid_card_container_style}
      >
        {data?.map((card, index) => (
          <div key={index} style={{ width: "45%" }}>
            <Card
              card_container_width={props.card_container_width}
              product_image={card.image.mobile.url}
              product_name={card.title}
              product_price={card.price}
              add_to_cart_style={props.add_to_cart_style}
            />
          </div>
        ))}
        {/* <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        />
        <Card
          card_container_width={props.card_container_width}
          product_image={"./imgs/productImg.png"}
          product_name={"Nike Shoes"}
          product_price={"$59.99"}
          add_to_cart_style={props.add_to_cart_style}
        /> */}
      </div>
    </div>
  );
};

export default CardGridContainer;
