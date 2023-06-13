import React from "react";
import CardsContainer from "../../../ui/cardsSwiperContainer/CardsContainer";

const SportShirt = (props) => {
  return (
    <CardsContainer
      data={props.data}
      card_container_bg_color={"#eeecec"}
      container_title={"Sport Shirts"}
      tag_bg_color={"transparent"}
      tag_title={""}
    />
  );
};

export default SportShirt;
