import React, { useState } from "react";
import "./Header.css";
import SideMenu from "./SideMenu/SideMenu";
import Toggler from "./Toggler";
import TopMenu from "./TopMenu/TopMenu";

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
        <TopMenu listOfLinks={listOfLinks} />
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