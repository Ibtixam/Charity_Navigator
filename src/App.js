import React from "react";
import Header from "./components/header";
import Terms from "./components/terms";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entries from "./components/entries";

const App = () => {
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
