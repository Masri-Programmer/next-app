import React from "react";
import CardsContainer from "../../../ui/cardsSwiperContainer/CardsContainer";

const Featured = (props) => {
  return (
    <CardsContainer
      data={props.data}
      container_title={"Featured Products"}
      tag_bg_color={"rgb(204 151 34)"}
      tag_title={"Featured Product"}
    />
  );
};

export default Featured;
