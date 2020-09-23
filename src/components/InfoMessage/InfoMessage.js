import React from "react";
import "./InfoMessage.css";

const InfoMessage = ({ handleShowMessaheClick }) => {
  return (
    <div className="black-back">
      <div className="message-container">
        <h2>Important information about My website</h2>
        <p>
          This website is under construction right now. Everyday I'm making some
          new changes, making more functionality, fixing some bugs, and adding
          style. It will take some time to finish it
        </p>
        <div className="top-menu-link" onClick={handleShowMessaheClick}>
          Close
        </div>
      </div>
    </div>
  );
};

export default InfoMessage;
