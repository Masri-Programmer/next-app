import React from "react";
import CardsContainer from "../../../ui/cardsSwiperContainer/CardsContainer";
import { useMediaQuery } from "react-responsive";

const Recommended = (props) => {
  const gridTitleStyle = {
    padding: "25px 50px",
  };
  const isWeb = useMediaQuery({ query: "(min-width:670px)" });

  return (
    <CardsContainer
      data={props.data}
      card_container_bg_color={"#eeecec"}
      container_title={"Recommended Products"}
      tag_bg_color={"red"}
      tag_title={"Recommended Product"}
      title_style={gridTitleStyle}
      card_container_width={isWeb ? "" : "90% !important"}
    />
  );
};

export default Recommended;
