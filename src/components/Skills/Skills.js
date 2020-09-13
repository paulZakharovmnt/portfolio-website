import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section-subtitle">Why Choose Me</span>
      <h2 className="section-title">My Experience Area</h2>

      <div className="skills_contatiner bd-grid">
        <div className="skills_content">
          <div className="skills_data">
            <span className="skills_name">React.js </span>
            <span className="skills_number">80% </span>
            <span className="skills_bar skills_react"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">React Hooks </span>
            <span className="skills_number">80% </span>
            <span className="skills_bar skills_react"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">JavaScript </span>
            <span className="skills_number">70% </span>
            <span className="skills_bar skills_js"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">Html/css </span>
            <span className="skills_number">70% </span>
            <span className="skills_bar skills_html"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">TypeScript </span>
            <span className="skills_number">50% </span>
            <span className="skills_bar skills_typeScript"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
