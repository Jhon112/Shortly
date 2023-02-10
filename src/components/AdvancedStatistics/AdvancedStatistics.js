import React from "react";
import LandingCard from "../LandingCard/LandingCard";
import "./advancedStatistics.css";


const ShortenerContainer = () => {
  return (
    <div className="advanced-statistics-container">
      <h2 className="advanced-statistics-title neutral-very-dark-violet">
        Advanced Statistics
      </h2>
      <p className="advanced-statistics-description">
        Track how your links are performing across the web with <br />
        our advanced statistics dashboard.
      </p>

      <div className="container landing-cards-container">
        <hr />
        <LandingCard marginTop={"0"} type="brand-recognition" />
        <LandingCard marginTop={"45px"} type="detailed-records" />
        <LandingCard marginTop={"90px"} type="fully-customizable" />
      </div>
    </div>
  );
};

export default ShortenerContainer;
