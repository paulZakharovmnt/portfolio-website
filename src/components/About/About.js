import React from "react";
import me2 from "../../img/me2.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section-subtitle">My intro</span>
      <h2 className="section-title">About Me</h2>

      <div className="about_container bd-grid">
        <div className="about_data">
          <p className="about_description">
            Hi! My name is Paul and I'm Frontend Developer. I have 2 years of
            experience in web development. In all my projects I was using the
            most popular framework - React.js. Now I'm looking for a job in
            Montreal{" "}
          </p>
          <img src={me2} alt="" className="about_img" />
        </div>

        <div>
          <div className="about_information">
            <h3 className="about_information-title">Information</h3>

            <div className="about_information-data">
              <i className="fas fa-user about_information-icon"></i>
              <span>Paul Zakharov</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-map-marker-alt about_information-icon"></i>
              <span>Montréal, Québec</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-phone-square-alt about_information-icon"></i>
              <span>438-530-1015</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-envelope about_information-icon "></i>
              <span>paulZakharov.mnt@gmail.com</span>
            </div>
          </div>

          <div className="about_information">
            <h3 className="about_information-title">Experience</h3>

            <div className="about_information-data">
              <i className="fas fa-info-circle about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">2 Years Job </span>
                <span className="about_information-subtitle-small">
                  Experience
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-briefcase about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  React.js and Hooks
                </span>
                <span className="about_information-subtitle-small">
                  The most modern and popular JS framework
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-lightbulb about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  Fast-Learner{" "}
                </span>
                <span className="about_information-subtitle-small">
                  Super-fast-learner. I'm learning new things faster than you
                  can imagine
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-language about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  My Languages{" "}
                </span>
                <span className="about_information-subtitle-small">
                  Russian - native. English - fluent, French - writing and
                  reading.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
