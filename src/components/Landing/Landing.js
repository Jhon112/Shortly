import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ShortenerContainer from "../Shortener/ShortenerContainer";
import AdvancedStatistics from "../AdvancedStatistics/AdvancedStatistics";
import Footer from "../Footer/Footer";

import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <Navbar />
        <Header />
        <ShortenerContainer />
        <AdvancedStatistics />
      </div>
      <div className="boost-banner">
        <h2>Boost your links today</h2>
        <a className="btn" href="#">
          Get Started
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
