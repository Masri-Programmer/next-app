import React from "react";
import CardGridContainer from "../../../ui/cardGridContainer/CardGridContainer";
import { useMediaQuery } from "react-responsive";

const TopSeller = (props) => {
  const titleStyle = {
    border: "1px solid #EB6309",
    borderRadius: "10px",
    padding: " 5px 25px",
    marginLeft: "10px",
    marginBottom: "10px",
    fontSize: "12px",
  };
  const titleWebStyle = {
    border: "1px solid #EB6309",
    borderRadius: "10px",
    padding: " 5px 25px",
    marginLeft: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    marginLeft: "50px",
  };
  const gridContainerStyle = {
    marginTop: "20px",
  };
  const add_to_cart_style = {
    display: "none",
  };
  const isWeb = useMediaQuery({ query: "(min-width:670px)" });

  return (
    <CardGridContainer
      data={props.data}
      card_grid_container_title={"Top Seller"}
      title_style={isWeb ? titleWebStyle : titleStyle}
      grid_card_container_style={gridContainerStyle}
      add_to_cart_style={add_to_cart_style}
      grid_container_margin={props.grid_container_margin}
      card_container_width={isWeb ? "fit-content" : "100%"}
    />
  );
};

export default TopSeller;
