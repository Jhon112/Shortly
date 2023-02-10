import React from "react";
import headerImg from "../../assets/images/illustration-working.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="neutral-very-dark-violet">
          More than just <br />
          shorter links
        </h1>
        <p>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <a href="#" className="btn">
          Get Started
        </a>
      </div>
      <div className="header-right">
        <img src={headerImg} alt="Header Image" />
      </div>
    </header>
  );
};

export default Header;
