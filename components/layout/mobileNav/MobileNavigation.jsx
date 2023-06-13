import React, { useState, useEffect } from "react";
import "./mobile-navigation.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavigateState } from "@store/AppState";

const MobileNavigation = (props) => {
  const navigateState = useSelector((state) => state.appState.navigateState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    if (item === navigateState) {
      return;
    }

    dispatch(setNavigateState(item));
    if (item === "home") {
      navigate("/");
    } else {
      navigate(`/${item}`);
    }
  };

  return (
    <div className={`mobile-nav-container ${props.className}`}>
      <div
        tabIndex="0"
        className={`mobile-nav-item ${navigateState === "home" ? "active" : ""
          }`}
        onClick={() => handleItemClick("home")}
        //
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleItemClick("home");
          }
        }}
      >
        {navigateState == "home" ? (
          <img
            src="./imgs/icons/home-selected.svg"
            alt="Home Icon"
            className="img-active"
          />
        ) : (
          <img src="./imgs/icons/home.svg" alt="Home Icon" />
        )}
        <span className={` ${navigateState === "home" ? "span-active" : ""}`}>
          Home
        </span>
      </div>

      <div
        tabIndex="0"
        className={`mobile-nav-item ${navigateState === "categories" ? "active" : ""
          }`}
        onClick={() => handleItemClick("categories")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleItemClick("categories");
          }
        }}
      >
        {navigateState == "categories" ? (
          <img
            src="./imgs/icons/categories-selected.svg"
            alt="Home Icon"
            className="img-active"
          />
        ) : (
          <img src="./imgs/icons/categories-icon.svg" alt="Home Icon" />
        )}
        <span
          className={` ${navigateState === "categories" ? "span-active" : ""}`}
        >
          Categories
        </span>
      </div>

      <div
        tabIndex="0"
        className={`mobile-nav-item ${navigateState === "favorites" ? "active" : ""
          }`}
        onClick={() => handleItemClick("favorites")}
        //
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleItemClick("favorites");
          }
        }}
      >
        {navigateState == "favorites" ? (
          <img
            src="./imgs/icons/heart-selected.svg"
            alt="Home Icon"
            className="img-active"
          />
        ) : (
          <img src="./imgs/icons/heart.svg" alt="Home Icon" />
        )}
        <span
          className={` ${navigateState === "favorites" ? "span-active" : ""}`}
        >
          Favorites
        </span>
      </div>

      <div
        tabIndex="0"
        className={`mobile-nav-item ${navigateState === "cart" ? "active" : ""
          }`}
        onClick={() => handleItemClick("cart")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleItemClick("cart");
          }
        }}
      >
        {navigateState == "cart" ? (
          <img
            src="./imgs/icons/cart-selected.svg"
            alt="Home Icon"
            className="img-active"
          />
        ) : (
          <img src="./imgs/icons/cart.svg" alt="Home Icon" />
        )}
        <span className={` ${navigateState === "cart" ? "span-active" : ""}`}>
          Cart
        </span>
      </div>
    </div>
  );
};

export default MobileNavigation;
