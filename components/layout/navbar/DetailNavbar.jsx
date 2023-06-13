import React from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSideNav, setSearchBox } from "../../../store/AppState";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DetailNavbar = (props) => {
  const dispatch = useDispatch();
  const showSearchBoxState = useSelector(
    (state) => state.appState.showSearchBoxState
  );
  const navigate = useNavigate();

  /**methods */
  const handleBack = () => {
    navigate(-1); // Navigates back to the previous route
  };
  const handleSearchBox = (state) => {
    dispatch(setSearchBox(state));
  };

  return (
    <div className="nav-main-container" style={{ padding: "0 25px 0 20px" }}>
      {showSearchBoxState ? (
        <div className="search-box-container">
          <div className="nav-back-btn" onClick={() => handleSearchBox(false)}>
            {/* <ArrowBackIosNewIcon /> */}
            <img src="./imgs/back-btn.svg" alt="back" />
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
          <div className="nav-left-side">
            {props.back_btn ? (
              <div className="nav-back-btn" onClick={() => handleBack()}>
                <img src="./imgs/back-btn.svg" alt="back" />
              </div>
            ) : (
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
            )}

            <span className="nav-title">{props.pageTitle}</span>
          </div>
          <div className="nav-end-items">
            {props.trash && (
              <img
                src="./imgs/trash-icon.svg"
                alt="trash"
                className="nav-trash-icon"
              />
            )}
            {props.notification && (
              <img src="./imgs/notification-icon.svg" alt="notification-icon" />
            )}
            {props.search && (
              <img
                src="./imgs/search-icon.svg"
                alt="search-icon"
                onClick={() => handleSearchBox(true)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailNavbar;
