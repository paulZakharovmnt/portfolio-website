import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education section" id="education">
      <span className="section-subtitle">Qualification</span>
      <h2 className="section-title">My Education</h2>
      <div className="education_container bd-grid">
        <div className="education_content">
          <div>
            <h3 className="education_year">2006 - 2011</h3>
            <span className="education_university">Ural State University</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">Master's degree</h3>
            <span className="education_specialty"></span>
          </div>
        </div>

        <div className="education_content">
          <div>
            <h3 className="education_year">2018</h3>
            <span className="education_university">CodeCademy</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">HTML/CSS/JS</h3>
            <span className="education_specialty">Frontend Developer</span>
          </div>
        </div>

        <div className="education_content">
          <div>
            <h3 className="education_year">2019</h3>
            <span className="education_university">Udemy</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </h3>
            <span className="education_specialty">React Developer</span>
          </div>
        </div>
        <div className="education_content">
          <div>
            <h3 className="education_year">2019</h3>
            <span className="education_university">Udemy</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">
              React JS & Firebase Complete Cours
            </h3>
            <span className="education_specialty">React Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
