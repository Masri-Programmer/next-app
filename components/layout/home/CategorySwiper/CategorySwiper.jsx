'use-client'
import React, { useState } from "react";
import Slider from "react-slick";
import "./category-swiper.css";
import axios from "axios";
import { EndPoints } from "@data/Fetching/EndPoits";
import { api_url } from "@data/Fetching/url";

const CategorySwiper = (props) => {
  const data = props.data;
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: props.Swiper_infinite || false,
    arrows: true,
    centerPadding: "60px",
    slidesToShow: props.Slide_to_Show || 3,
    speed: 500,
    rows: props.Swiper_Rows || 1,
    // slidesPerRow: 1,
    swipeToSlide: true,
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const formData = new FormData();
  //       formData.append("limit", 10);
  //       formData.append("offset", 0);
  //       const response = await axios.post(
  //         api_url + EndPoints.category,
  //         formData
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="intro-category-swiper" style={props.style}>
      <Slider {...settings}>
        {data?.map((categoryItem, categoryIndex) => {
          return (
            <div className="category-slider-item" key={categoryIndex}>
              <img
                src={categoryItem.image.mobile.url}
                alt="swiper-img"
                style={{
                  width: props.img_width,
                  height: props.img_height,
                }}
              />
              <div className="category-swiper-item-text-container">
                <span
                  className="category-swiper-item-text"
                  style={{ fontSize: props.title_font_size }}
                >
                  {categoryItem.title}
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{
              width: props.img_width,
              height: props.img_height,
            }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{
              width: props.img_width,
              height: props.img_height,
            }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          {" "}
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          {" "}
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          {" "}
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          {" "}
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div>
        <div className="category-slider-item">
          <img
            src="./imgs/productImg.png"
            alt="swiper-img"
            style={{ width: props.img_width, height: props.img_height }}
          />
          <span
            className="category-swiper-item-text"
            style={{ fontSize: props.title_font_size }}
          >
            category
          </span>
        </div> */}
      </Slider>
    </div>
  );
};

export default CategorySwiper;
