import React from "react";
import CardsContainer from "../../../ui/cardsSwiperContainer/CardsContainer";

const NewArrival = (props) => {
  return (
    <CardsContainer
      data={props.data}
      container_title={"New Arrivals"}
      tag_bg_color={"#00d900"}
      tag_title={"New Arrival"}
    />
  );
};

export default NewArrival;
