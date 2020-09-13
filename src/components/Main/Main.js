import React from "react";
import photo2 from "../../img/photo2.png";
import "./Main.css";

const Main = () => {
  return (
    <section className="main">
      <div className="home" id="home">
        <div className="home_container bd-grid">
          <div className="home_data">
            <div className="home_img">
              <img src={photo2} alt="" />
            </div>
            <h1 className="home_title">Paul Zakharov</h1>
            <span className="home_profession">FrontEnd Developer</span>
            <div className="home_social">
              <a href="#" className="home_social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="home_social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="home_social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="home_social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <a
              download=""
              href="https://drive.google.com/u/0/uc?id=1CgyZPeIh6zoY19ATw2nMVW956s5tv_VR&export=download"
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
