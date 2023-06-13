import React from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSideNav, setSearchBox } from "@store/AppState";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const showSearchBoxState = useSelector(
    (state) => state.appState.showSearchBoxState
  );

  /**methods */
  const handleSearchBox = (state) => {
    dispatch(setSearchBox(state));
  };

  return (
    <div className="nav-main-container">
      {showSearchBoxState ? (
        <div className="search-box-container">
          <div className="nav-back-btn" onClick={() => handleSearchBox(false)}>
            <ArrowBackIosNewIcon />
          </div>
          <InputGroup>
            <InputGroup.Text id="basic-addon1" style={{ background: "#fff" }}>
              <SearchIcon />
            </InputGroup.Text>

            <Form.Control
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      ) : (
        <div className="navbar-container">
          <div
            className="nav-button"
            onClick={() => {
              dispatch(setSideNav());
            }}
          >
            <span className="navabr-btn-item"></span>
            <span className="navabr-btn-item"></span>
            <span className="navabr-btn-item"></span>
          </div>

          <div
            className="nav-logo"
          // onClick={() => navigate("/")}
          >
            <img src="./imgs/logo.svg" alt="logo" />
          </div>

          <div className="nav-end-items">
            <img
              src="./imgs/search-icon.svg"
              alt="search-icon"
              onClick={() => handleSearchBox(true)}
            />
            <img
              src="./imgs/nav-icons/notification-icon.svg"
              alt="notification-icon"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
