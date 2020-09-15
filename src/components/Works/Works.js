import React from "react";
import work1 from "../../img/WeatherApp.jpg";
import work2 from "../../img/Portfolio.jpg";
import work3 from "../../img/work4.jpg";
import "./Works.css";

const Works = () => {
  return (
    <section className="works section" id="works">
      <span className="section-subtitle">My Portfolio</span>
      <h2 className="section-title">Recent Works</h2>

      <div className="works_container bd-grid">
        <div className="works_img">
          <img src={work2} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Portfolio Website</h3>
                <span> Current website that you are looking at right now</span>
              </div>
              <a href="#" className="works_link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="works_img">
          <img src={work1} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Simple Weather Application</h3>
                <span>
                  {" "}
                  Small application to search current weather in the city.
                  Taking you geoLocation and loading current weather.
                  Additionaly you can search more cities by name and switch
                  between them
                </span>
                <hr />
                <span>
                  Fully made with React Hooks and using different APIs
                </span>
              </div>
              <a
                href="https://paulzakharovmnt.github.io/weatherApp/"
                className="works_link"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="works_img">
          <img src={work3} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Todo Application</h3>
                <span>
                  {" "}
                  Small application to create todo-list (or what you should buy
                  in the store).
                </span>
                <hr />
                <span>
                  Now it is 50% finished. There is only basic functions with no
                  styles and interesting features. Will be finished soon
                </span>
              </div>
              <a
                href="https://paulzakharovmnt.github.io/todo-app/"
                className="works_link"
              >
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
