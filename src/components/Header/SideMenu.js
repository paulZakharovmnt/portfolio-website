import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({ toggleShowSideMenuClick }) => {
  return (
    <div className="nav_menu">
      {/* <div className="nav_close">
        <FontAwesomeIcon icon={faTimes} onClick={toggleShowSideMenuClick} />
      </div> */}
      <ul className="nav_list">
        <li className="nav_item">
          <a href="#home" className="nav_link activate">
            Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" className="nav_link activate">
            About
          </a>
        </li>
        <li className="nav_item">
          <a href="#skills" className="nav_link activate">
            Skills
          </a>
        </li>
        <li className="nav_item">
          <a href="#services" className="nav_link activate">
            Services
          </a>
        </li>
        <li className="nav_item">
          <a href="#works" className="nav_link activate">
            Works
          </a>
        </li>
        <li className="nav_item">
          <a href="#contact" className="nav_link activate">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
