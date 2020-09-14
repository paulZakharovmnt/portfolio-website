import React from "react";
import "./TopMenu.css";

const TopMenu = ({ listOfLinks }) => {
  return (
    <div className="top-menu">
      <ul>
        {listOfLinks.map((link) => {
          return (
            <li className="top-menu-item" key={link}>
              <a className="top-menu-link">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopMenu;
