import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer_container bd-grid">
        <h1> Paul Zakharov </h1>
        <p>I am Paul and this is my personal website. Have fun!</p>
        <div className="footer-icons">
          <a
            className="footer-link"
            href="https://www.facebook.com/people/Paul-Zakharov/100004351425520"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/supersexykoala/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-copy"> All right Recieved - 2020 </p>
      </div>
    </section>
  );
};

export default Footer;
