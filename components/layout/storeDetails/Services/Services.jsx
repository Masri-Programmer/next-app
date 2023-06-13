import React from "react";
import "./services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import ServiceImg from "./ServiceImg";

const Services = () => {
  return (
    <div className="store-details-services-contianer">
      <Swiper
        slidesPerView={3}
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
          <ServiceImg />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImg />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImg />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImg />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImg />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
