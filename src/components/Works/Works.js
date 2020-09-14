import React from "react";
import work1 from "../../img/WeatherApp.jpg";
import "./Works.css";

const Works = () => {
  return (
    <section className="works section" id="works">
      <span className="section-subtitle">My Portfolio</span>
      <h2 className="section-title">Recent Works</h2>

      <div className="works_container bd-grid">
        <div className="works_img">
          <img src={work1} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Simple Weather Application</h3>
                <span> Description</span>
              </div>
              <a href="#" className="works_link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
