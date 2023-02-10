import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../assets/images/icon-pinterest.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer">
        <div className="footer-logo">
          <a href="/">
            <Logo fill="white" />
          </a>
        </div>
        <div className="footer-content">
          <div className="list-container">
            <h4>Features</h4>
            <ul>
              <li>
                <a>Link Shortening</a>
              </li>
              <li>
                <a>Branded Links</a>
              </li>
              <li>
                <a>Analytics</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h4>Resources</h4>
            <ul>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Developers</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h4>Company</h4>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Our Team</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-network-icons">
            <a href="#">
              <img src={FacebookIcon} />
            </a>
            <a href="#">
              <img src={TwitterIcon} />
            </a>
            <a href="#">
              <img src={PinterestIcon} />
            </a>
            <a href="#">
              <img src={InstagramIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
