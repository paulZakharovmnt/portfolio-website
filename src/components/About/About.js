import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section-subtitle">My intro</span>
      <h2 className="section-title">About Me</h2>

      <div className="about_container bd-grid">
        <div className="about_data">
          <p className="about_description">I'm ....blablabla</p>
          One More my Photo
          {/* <img src={aboutImg} alt="" className="about_img" /> */}
        </div>

        <div>
          <div className="about_information">
            <h3 className="about_information-title">Information</h3>

            <div className="about_information-data">
              <i className="fas fa-user about_information-icon"></i>
              <span>Paul Zakharov</span>
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
            <h3 className="about_information-title">Experience and support</h3>

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
                  Different Projects
                </span>
                <span className="about_information-subtitle-small">
                  Completed
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-question-circle about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">Support</span>
                <span className="about_information-subtitle-small">
                  Online 24/7
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
