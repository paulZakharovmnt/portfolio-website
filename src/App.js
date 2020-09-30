import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import InfoMessage from "./components/InfoMessage/InfoMessage";
import MessageHasBeenSent from "./components/PopUp/MessageHasBeenSent";

function App() {
  const [showInfoMessage, setShowInfoMessage] = useState(false);
  const [showUserSentAMessageToPaul, setshowUserSentAMessageToPaul] = useState(
    false
  );

  const handleShowMessaheClick = () => {
    setShowInfoMessage(!showInfoMessage);
  };

  const handleHideMessageThatWasSentToPaul = () => {
    setshowUserSentAMessageToPaul(false);
  };

  const handleSendMessageToPaulFromUser = (userName) => {
    setshowUserSentAMessageToPaul(true);
  };

  return (
    <div className="App">
      {showInfoMessage && (
        <InfoMessage handleShowMessaheClick={handleShowMessaheClick} />
      )}

      {showUserSentAMessageToPaul && (
        <MessageHasBeenSent
          handleHideMessageThatWasSentToPaul={
            handleHideMessageThatWasSentToPaul
          }
        />
      )}
      <Header />
      <Main handleShowMessaheClick={handleShowMessaheClick} />
      <About />
      <Skills />
      <Education />
      <Works />
      <Contact
        handleSendMessageToPaulFromUser={handleSendMessageToPaulFromUser}
      />
      <Footer />
    </div>
  );
}

export default App;
