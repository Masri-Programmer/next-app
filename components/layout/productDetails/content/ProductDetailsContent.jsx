import React from "react";
import "./product-details-content.css";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetailsContent = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [fav, setFav] = useState(false);

  /**methods */
  const handleFavBtn = () => {
    setFav(!fav);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-details-content-container">
      {/* title */}
      <div className="product-title-container">
        <div className="product-text-section">
          <span className="product-title">Nike shoes</span>
          <span className="product-price">$59,99</span>
        </div>
        <div className="product-fav-btn" onClick={handleFavBtn}>
          {fav ? (
            <img src="./imgs/fav-full-icon.svg" alt="" />
          ) : (
            <img src="./imgs/fav-icon.svg" alt="" />
          )}
        </div>
      </div>

      {/* variation */}

      {/* color */}
      <div className="product-details-color-container">
        <span className="product-color-title">Choose a Color</span>
        <div className="product-color-section">
          <div
            className={`color-box red ${
              selectedColor === "red" ? "color-checked" : ""
            }`}
            onClick={() => handleColorChange("red")}
            // style={{backgroundColor:""}}
          ></div>
          <div
            className={`color-box blue ${
              selectedColor === "blue" ? "color-checked" : ""
            }`}
            onClick={() => handleColorChange("blue")}
            // style={{backgroundColor:""}}
          ></div>
          <div
            className={`color-box grey ${
              selectedColor === "grey" ? "color-checked" : ""
            }`}
            onClick={() => handleColorChange("grey")}
            // style={{backgroundColor:""}}
          ></div>
          <div
            className={`color-box black ${
              selectedColor === "black" ? "color-checked" : ""
            }`}
            onClick={() => handleColorChange("black")}
            // style={{backgroundColor:""}}
          ></div>
          <div
            className={`color-box green ${
              selectedColor === "green" ? "color-checked" : ""
            }`}
            onClick={() => handleColorChange("green")}
            // style={{backgroundColor:""}}
          ></div>
        </div>
      </div>
      {/* size */}
      <div className="product-size-container">
        <span className="product-color-title">Size</span>
        <div className="product-size-section">
          <div
            className={`product-size-box ${
              selectedSize === "40" ? "size-checked" : ""
            }`}
            onClick={() => handleSizeChange("40")}
            // style={{backgroundColor:""}}
          >
            40
          </div>
          <div
            className={`product-size-box ${
              selectedSize === "41" ? "size-checked" : ""
            }`}
            onClick={() => handleSizeChange("41")}
            // style={{backgroundColor:""}}
          >
            41
          </div>
          <div
            className={`product-size-box ${
              selectedSize === "42" ? "size-checked" : ""
            }`}
            onClick={() => handleSizeChange("42")}
            // style={{backgroundColor:""}}
          >
            42
          </div>
          <div
            className={`product-size-box ${
              selectedSize === "43" ? "size-checked" : ""
            }`}
            onClick={() => handleSizeChange("43")}
            // style={{backgroundColor:""}}
          >
            43
          </div>
          <div
            className={`product-size-box ${
              selectedSize === "44" ? "size-checked" : ""
            }`}
            onClick={() => handleSizeChange("44")}
            // style={{backgroundColor:""}}
          >
            44
          </div>
        </div>
      </div>

      {/* decription */}
      <div className="product-description-container">
        <span className="decription-title">Description of the Product</span>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu
          id tincidunt tellus arcu rhoncus, turpis nisl sed. Neque viverra ipsum
          orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut
          curabitur platea sed blandit. Amet non at proin justo nulla et. A,
          blandit morbi suspendisse vel malesuada purus massa mi. Faucibus neque
          a mi hendrerit. Audio Technology Apple-designed dynamic driver Active
          Noise Cancellation Transparency mode Adaptive EQ Spatial audio with
          dynamic head tracking1 Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis
          nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus
          tempor semper purus. Ut curabitur platea sed blandit. Amet non at
          proin justo nulla et. A, blandit morbi suspendisse vel malesuada purus
          massa mi. Faucibus neque a mi hendrerit. Audio Technology
          Apple-designed dynamic driver Active Noise Cancellation Transparency
          mode Adaptive EQ Spatial audio with dynamic head tracking1
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
