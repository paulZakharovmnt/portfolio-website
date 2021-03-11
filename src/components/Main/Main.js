import React from "react";
import photo2 from "../../img/photo2.png";
import "./Main.css";

const Main = ({ handleShowMessaheClick }) => {
  return (
    <section className="main">
      <div className="home" id="home">
        <div className="home_container bd-grid">
          <div className="home_data">
            <div className="flashing-icon" onClick={handleShowMessaheClick}>
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="home_img">
              <img className="home_img" src={photo2} alt="" />
            </div>
            <h1 className="home_title">Paul Zakharov</h1>
            <span className="home_profession">FrontEnd Developer</span>
            <div className="home_social">
              <a
                href="https://www.linkedin.com/in/paulzakharov/"
                className="home_social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Paul-Zakharov/100004351425520"
                className="home_social-link"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://github.com/paulZakharovmnt"
                className="home_social-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <a
              download=""
              href="https://drive.google.com/u/0/uc?id=1GBwbyteRiLp9P8BDYj-Lia7IUJUExF8c&export=download"
              className="btn home_button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
