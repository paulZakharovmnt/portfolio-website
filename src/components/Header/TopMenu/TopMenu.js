import React from "react";
import "./TopMenu.css";

const TopMenu = ({ listOfLinks }) => {
  return (
    <div className="top-menu">
      <ul>
        {listOfLinks.map((link) => {
          let hrefLink = `#${link}`;
          return (
            <li className="top-menu-item" key={link}>
              <a className="top-menu-link" href={hrefLink}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopMenu;
