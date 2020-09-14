import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer_container bd-grid">
        <h1> Paul Zakharov </h1>
        <p>I'm so cool</p>
        <div className="footer-icons">
          <a className="footer-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="footer-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-copy"> All right Recieved - 2020 </p>

        {/* <h1 className="fooer_title">Paul</h1>
        <p className="footer_description"> bla bla bla </p>
        <div className="footer_social">
          <a href="#" className="footer_link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="footer_link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer_copy">All right Recieved - 2020</p> */}
      </div>
    </section>
  );
};

export default Footer;
