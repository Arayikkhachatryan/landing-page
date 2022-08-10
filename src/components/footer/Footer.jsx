import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import upVector from "../../assets/images/footer-Vector.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-wrapper-main">
          <div className="footer-wrapper-main-logo">
            <img src={logo} alt="" />
            <p>
              Outsource Your Development at Affordable Prices to Senior
              Engineers in Armenia
            </p>
          </div>
          <div className="footer-wrapper-main-nav">
            <a href="/" className="nav-a">
              Services
            </a>
            <a href="/" className="nav-a">
              Expertice
            </a>
            <a href="/" className="nav-a">
              Portfolio
            </a>
          </div>
          <div className="footer-wrapper-main-scroll-btn">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Scroll to top <img src={upVector} alt="/" />
            </button>
          </div>
        </div>
        <div className="footer-wrapper-bottom">
          <p>© 2022 Company Name . All rights reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
