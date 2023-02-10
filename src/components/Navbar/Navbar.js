import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="left-section">
        <a className="logo" href="/">
          <Logo fill="hsl(255, 11%, 22%)" />
        </a>
        <div className="nav-link">Features</div>
        <div className="nav-link">Pricing</div>
        <div className="nav-link">Resources</div>
      </div>
      <div className="right-section">
        <div className="nav-link">Login</div>
        <a className="sign-up-link">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
