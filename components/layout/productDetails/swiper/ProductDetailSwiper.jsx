import React from "react";
import "./product-details-swiper.css";
import Slider from "react-slick";

const ProductDetailSwiper = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-details-swiper-container">
      <Slider {...settings}>
        <div className="product-swiper-item-container">
          <img src="./imgs/product-details.svg" />
        </div>
        <div className="product-swiper-item-container">
          <img src="./imgs/productImg.png" />
        </div>
        <div className="product-swiper-item-container">
          <img src="./imgs/product-details.svg" />
        </div>
        <div className="product-swiper-item-container">
          <img src="./imgs/productImg.png" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductDetailSwiper;
