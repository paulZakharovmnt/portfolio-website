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
            <a href="#" className="works_link">
              <i class="fas fa-external-link-alt"></i>
            </a>
            <span className="works_title"> Simple Weather Application</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
