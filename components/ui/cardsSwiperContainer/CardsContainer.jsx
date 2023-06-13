import React from "react";
import "./cards-container.css";
import Slider from "react-slick";
import Card from "../cards/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";
import CardGridContainer from "../cardGridContainer/CardGridContainer";
import { Link } from "react-router-dom";

const CardsContainer = (props) => {
  const data = props.data;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
  };
  const isWeb = useMediaQuery({ query: "(min-width:670px)" });

  return (
    <>
      {isWeb ? (
        <CardGridContainer
          card_grid_container_title={props.container_title}
          add_to_cart_style={props.add_to_cart_style}
          card_container_width="15%"
          data={props.data}
        />
      ) : (
        <div
          className="cards-container"
          style={{
            backgroundColor: props.card_container_bg_color || "transparent",
          }}
        >
          <div className="cards-title-container">
            <span className="cards-title-text">{props.container_title}</span>
            <button className="view-all-cards-btn">View all</button>
          </div>
          <div className="cards-swiper-container">
            {/* <Slider {...settings}>
              {data?.map((card, index) => (
                <div key={index}>
                  <Card
                    card_container_width={props.card_container_width}
                    product_image={card.image.mobile.url}
                    product_name={card.title}
                    product_price={card.price}
                    add_to_cart_style={props.add_to_cart_style}
                  />
                </div>
              ))}
            </Slider> */}
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {data?.map((card, index) => (
                <SwiperSlide key={index}>
                  <Link to={"/product-details"}>
                    <Card
                      card_container_width={props.card_container_width}
                      product_image={card.image.mobile.url}
                      product_name={card.title}
                      product_price={card.price}
                      add_to_cart_style={props.add_to_cart_style}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
    // <div
    //   className="cards-container"
    //   style={{ backgroundColor: props.card_container_bg_color }}
    // >
    //   <div className="cards-title-container">
    //     <span className="cards-title-text">{props.container_title}</span>
    //     <button className="view-all-cards-btn">View all</button>
    //   </div>
    //   <div className="cards-swiper-container">
    //     <Slider {...settings}>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //       <div>
    //         <Card
    //           product_image={"./imgs/productImg.png"}
    //           product_name={"Nike Shoes"}
    //           product_price={"$59.99"}
    //           tag_bg_color={props.tag_bg_color}
    //           tag_title={props.tag_title}
    //         />
    //       </div>
    //     </Slider>
    //   </div>
    // </div>
  );
};

export default CardsContainer;
