import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <span className="section-subtitle">Contact Me</span>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact_container bd-grid">
        <form className="form">
          <div className="inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea name="" id="" cols="0" rows="10" placeholder="Message" />
          <div className="submit-btn">
            <a className="button contact_button"> Send a Message </a>
          </div>
        </form>
        <div>
          <div className="contact_info">
            <h3 className="contact_subtitle">Call Me</h3>
            <span className="contact_text">438-530-1015 </span>
          </div>
          <div className="contact_info">
            <h3 className="contact_subtitle">Email Me</h3>
            <span className="contact_text">paulZakharov.mnt@gmail.com</span>
          </div>
          <div className="contact_info">
            <h3 className="contact_subtitle">Location</h3>
            <span className="contact_text">Monteral, Quebec, Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
