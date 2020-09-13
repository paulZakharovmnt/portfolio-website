import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import SideMenu from "./SideMenu";
import Toggler from "./Toggler";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [listOfLinks, setListOfLinks] = useState([
    "home",
    "about",
    "skills",
    "education",
    "works",
    "contact",
  ]);

  const toggleShowSideMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <section className="header">
      <div className="nav bd-grid">
        <div className="nav_toggle">
          <Toggler
            toggleShowSideMenuClick={toggleShowSideMenuClick}
            showSideMenu={showSideMenu}
          />
          {/* <FontAwesomeIcon icon={faBars} onClick={toggleShowSideMenuClick} /> */}
        </div>
        <div className="">
          <a href="#" className="nav_logo">
            Paul
          </a>
        </div>
        {showSideMenu && (
          <SideMenu
            listOfLinks={listOfLinks}
            toggleShowSideMenuClick={toggleShowSideMenuClick}
          />
        )}
      </div>
    </section>
  );
};

export default Header;
