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

function App() {
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  const handleShowMessaheClick = () => {
    setShowInfoMessage(!showInfoMessage);
  };
  return (
    <div className="App">
      {showInfoMessage && (
        <InfoMessage handleShowMessaheClick={handleShowMessaheClick} />
      )}
      <Header />
      <Main handleShowMessaheClick={handleShowMessaheClick} />
      <About />
      <Skills />
      <Education />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
