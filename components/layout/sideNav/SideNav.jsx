"use-client"
import { useEffect, useState } from "react";
import "./side-nav.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSideNav } from "@store/AppState";
import NavDropdown from 'react-bootstrap/NavDropdown';

const SideNav = () => {
  const sideNavState = useSelector((state) => state.appState.sideNavState);
  const dispatch = useDispatch();
  const [openLanguages, setOpenLanguages] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      console.log("Clicked on a nav item:", event.target.innerText);
      // Perform your action here
      dispatch(setSideNav());
    };

    const navItemContents = document.querySelectorAll(".nav-item-content");
    navItemContents.forEach((navItemContent) => {
      navItemContent.addEventListener("click", handleClick);
    });

    // Clean up the event listeners on component unmount
    return () => {
      navItemContents.forEach((navItemContent) => {
        navItemContent.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div
      className="side-nav"
      style={
        sideNavState
          ? {
            transition: "transform 0.3s ease-in-out",
            transform: "translateX(0%)",
          }
          : {
            transition: "transform 0.3s ease-in-out",
            transform: "translateX(-100%)",
          }
      }
    >
      {/*  nav content here   */}
      <div className="user-info-container">
        <img src="./imgs/profile-pic.jpg" alt="" />
        <span className="user-name">John Smith</span>
      </div>
      <div className="nav-box-orders-container">
        <div className="nav-order-container">
          <img src="/imgs/nav-icons/order-truck.svg" alt="truck" />
          <span className="nav-order-title">My Orders</span>
        </div>
        <div className="nav-order-container">
          <img src="/imgs/nav-icons/nav-heart-icon.svg" alt="favorite" />
          <span className="nav-order-title">Favorits</span>
        </div>
      </div>
      <div className="nav-item-list">
        <Link to={"/account"} className="nav-item-content">
          <img
            src="./imgs/nav-icons/person-icon.svg"
            alt="person"
            style={{ paddingLeft: "5px" }}
          />
          <span className="nav-item-title">Account</span>
        </Link>
        <Link to={"/stores"} className="nav-item-content">
          <img src="./imgs/nav-icons/store-icon.svg" alt="store" />
          <span className="nav-item-title">Stores</span>
        </Link>
        <Link to={"/brands"} className="nav-item-content">
          <img src="./imgs/nav-icons/nav-brands-icon.svg" alt="" />
          <span className="nav-item-title">Brands</span>
        </Link>
        <div className="nav-item-content">
          <img src="./imgs/nav-icons/notification-icon.svg" alt="" />
          <span className="nav-item-title">Notifications</span>
        </div>
        <Link to={"/contact-us"} className="nav-item-content">
          <img src="./imgs/nav-icons/notification-icon.svg" alt="" />
          <span className="nav-item-title">Contact Us</span>
        </Link>
        <Link to={"/terms-and-conditions"} className="nav-item-content">
          <img src="./imgs/nav-icons/terms-icon.svg" alt="" />
          <span className="nav-item-title">Terms and Conditions</span>
        </Link>
        <Link to={"/reports"} className="nav-item-content">
          <img src="./imgs/nav-icons/report-bug-icon.svg" alt="" />
          <span className="nav-item-title">Reports</span>
        </Link>
        <div className="d-flex gap-2">
          <img src="./imgs/nav-icons/world-icon.svg" alt="" />
          <span className="nav-item-title">
            <NavDropdown className='text-capitalize '
              title={"English"}
              id="collasible-nav-dropdown"
              onMouseEnter={() => setOpenLanguages(true)}
              onMouseLeave={() => setOpenLanguages(false)}
              show={openLanguages}>
              <NavDropdown.Item
                className="nav-item-title"
                onClick={() => {
                  // window.location.reload();
                }}>
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-item-title"
                onClick={() => {
                  // window.location.reload();
                  console.log("clicked")
                }}>
                Spanish
              </NavDropdown.Item>
            </NavDropdown>


          </span>
        </div>
        <div className="nav-item-content ">
          <img src="./imgs/nav-icons/logout-icon.svg" alt="" />
          <span className="nav-item-title">Log Out</span>
        </div>
      </div>
      <div className="nav-powered-by mt-2">
        <img src="./imgs/nav-icons/powered-by.svg" alt="" />
        <span className="app-version">Vresion 1.0.0</span>
      </div>
    </div>
  );
};

export default SideNav;
