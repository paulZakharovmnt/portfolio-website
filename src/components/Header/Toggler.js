import React from "react";
import "./Toggler.css";

const Toggler = ({ toggleShowSideMenuClick, showSideMenu }) => {
  let classHalfStart = ["bar half start"];
  let classToggler = ["menu-toggler"];
  let classHalfEnd = ["bar half end"];

  if (showSideMenu) {
    classHalfStart.push("open");
    classHalfEnd.push("open");
    classToggler.push("open");
  }
  return (
    <div className={classToggler.join(" ")} onClick={toggleShowSideMenuClick}>
      <div className={classHalfStart.join(" ")}></div>
      <div className="bar"></div>
      <div className={classHalfEnd.join(" ")}></div>
    </div>
  );
};

export default Toggler;
