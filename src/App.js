import React from "react";
import Header from "./components/header";
import Terms from "./components/terms";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entries from "./components/entries";

const App = () => {
  const getScreenInfo = () => {
    const { innerWidth: width, innerHeight: height } = window;
    document.body.style.setProperty("--width", `${width}px`);
    document.body.style.setProperty("--height", `${height}px`);
    window.scrollTo(0, 0);
  };
  window.addEventListener("resize", getScreenInfo);
  window.addEventListener("orientationchange", getScreenInfo);
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Terms} />
          <Route exact path="/entries" Component={Entries} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
