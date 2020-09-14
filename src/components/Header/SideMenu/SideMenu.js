import React from "react";

const SideMenu = ({ listOfLinks, toggleShowSideMenuClick }) => {
  return (
    <div className="drop-menu">
      <div className="nav_menu">
        <ul className="nav_list">
          {listOfLinks.map((link) => {
            let hrefLink = `#${link}`;
            return (
              <li
                className="nav_item"
                key={link}
                onClick={toggleShowSideMenuClick}
              >
                <a className="nav_link" href={hrefLink}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
