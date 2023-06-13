import React from "react";
import "./top-stores.css";
import Slider from "react-slick";
import StoreImg from "../../../ui/storeImg/StoreImg";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const TopStores = () => {
  const isWeb = useMediaQuery({ query: "(min-width:670px)" });

  const settings = {
    className: "slider variable-width",

    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: isWeb ? 5 : 1,
    swipeToSlide: true,
    variableWidth: isWeb ? false : true,
  };

  return (
    <div className="top-store-container">
      <span className="top-store-header">Top Stores</span>
      <div className="stores-swiper-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {/* {data?.map((card, index) => (
            <SwiperSlide key={index}>
              <Link to={"/product-details"}>
                <div className="top-store-image-container">
                  <StoreImg
                    store_Img={"./imgs/store-2.svg"}
                    store_title={"Ultra Store"}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))} */}
          <SwiperSlide>
            <div className="top-store-image-container">
              <StoreImg
                store_Img={"./imgs/store-2.svg"}
                store_title={"Ultra Store"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              <StoreImg
                store_Img={"./imgs/store-3.svg"}
                store_title={"Ultra Live"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              {" "}
              <StoreImg
                store_Img={"./imgs/store-4.svg"}
                store_title={"Sydira"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              {" "}
              <StoreImg
                store_Img={"./imgs/store-5.svg"}
                store_title={"Eve Beauty Salon"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              {" "}
              <StoreImg
                store_Img={"./imgs/store-2.svg"}
                store_title={"Ultra Store"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              {" "}
              <StoreImg
                store_Img={"./imgs/store-3.svg"}
                store_title={"Ultra Store"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="top-store-image-container">
              {" "}
              <StoreImg
                store_Img={"./imgs/store-4.svg"}
                store_title={"Ultra Store"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <Slider {...settings}>
          
        
          
         
          
       
         
        </Slider> */}
      </div>
    </div>
  );
};

export default TopStores;
