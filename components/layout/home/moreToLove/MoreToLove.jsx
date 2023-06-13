import React from "react";
import "./more-to-love.css";
import CardGridContainer from "../../../ui/cardGridContainer/CardGridContainer";
import { useMediaQuery } from "react-responsive";

const MoreToLove = (props) => {
  const isWeb = useMediaQuery({ query: "(min-width:670px)" });

  return (
    <CardGridContainer
      data={props.data}
      card_grid_container_title={"More to Love"}
      add_to_cart_style={props.add_to_cart_style}
      card_container_width={isWeb ? "50%" : "100%"}
    />
  );
};

export default MoreToLove;
