import React from "react";
import Slider from "react-slick";
import "./intro-slider.css";

const IntroSlider = (props) => {
  const data = props.data;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Optional: Control how many slides to scroll at a time
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="intro-slider">
      <Slider {...settings}>
        {data.map((dataItem, dataIndex) => {
          return (
            <div className="slide" key={dataIndex}>
              <img
                src={dataItem.image.mobile.url}
                alt={dataItem.slug}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
        {/* <div className="slide">
          <img
            src="./imgs/swiperImg.png"
            alt="swiper-img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="slide">
          <img
            src="./imgs/swiperImg.png"
            alt="swiper-img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="slide">
          <img
            src="./imgs/swiperImg.png"
            alt="swiper-img"
            style={{ width: "100%" }}
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default IntroSlider;
