import React, { useState } from "react";
import "./Header.css";
import SideMenu from "./SideMenu/SideMenu";
import { CSSTransition } from "react-transition-group";
import Toggler from "./Toggler";
import TopMenu from "./TopMenu/TopMenu";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const listOfLinks = [
    "home",
    "about",
    "skills",
    "education",
    "works",
    "contact",
  ];

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
        </div>
        <TopMenu listOfLinks={listOfLinks} />
        <div className="">
          <a href="#" className="nav_logo">
            Paul
          </a>
        </div>
        <CSSTransition
          in={showSideMenu}
          timeout={650}
          mountOnEnter
          unmountOnExit
          classNames="side-menu"
        >
          <SideMenu
            listOfLinks={listOfLinks}
            toggleShowSideMenuClick={toggleShowSideMenuClick}
          />
        </CSSTransition>
      </div>
    </section>
  );
};

export default Header;
