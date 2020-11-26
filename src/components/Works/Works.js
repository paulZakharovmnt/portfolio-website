import React from "react";
import work1 from "../../img/WeatherApp.jpg";
import work2 from "../../img/Portfolio.jpg";
import work3 from "../../img/JobApplications.jpg";
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
              <a
                href="https://paulzakharovmnt.github.io/portfolio-website/"
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
                <h3>Personal Job Application Database</h3>
                <span>
                  You don't like MS Excel? This website is made to make your job
                  searching easier. The idea is to create a databse where you
                  can store all job applications you have applied. Easy search,
                  comfortable filters, easy UX/UI to update information about
                  your job application.
                </span>
                <hr />
                <span>The project is at 85% finished</span>
              </div>
              <a
                href="https://paulzakharovmnt.github.io/job-search-list/"
                className="works_link"
              >
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
      </div>
    </section>
  );
};

export default Works;
