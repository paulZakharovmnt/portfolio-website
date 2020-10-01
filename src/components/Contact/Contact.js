import React, { useState } from "react";
import sendEmail from "../../API/sendEmail";
import MessageHasBeenSent from "../PopUp/MessageHasBeenSent";
import "./Contact.css";

const Contact = ({ handleSendMessageToPaulFromUser }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [showUserSentAMessageToPaul, setshowUserSentAMessageToPaul] = useState(
    false
  );
  const submitMessageFromUser = async (event) => {
    event.preventDefault();

    await sendEmail(userName, userEmail, userMessage).then(
      (result) => {
        console.log(result.text);
        handleSendMessageToPaulFromUser(userName);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setUserMessage("");
    setUserEmail("");
    setUserName("");
  };

  return (
    <section className="contact section" id="contact">
      <span className="section-subtitle">Contact Me</span>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact_container bd-grid">
        <form className="form" onSubmit={submitMessageFromUser}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </div>
          <textarea
            name=""
            id=""
            cols="0"
            rows="10"
            placeholder="Message"
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <div className="submit-btn">
            <a
              className="button contact_button"
              onClick={submitMessageFromUser}
            >
              {" "}
              Send a Message{" "}
            </a>
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
