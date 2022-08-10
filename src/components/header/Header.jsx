import "./Header.scss";
import logo from "../../assets/images/logo.png";

import { useState } from "react";

const Header = () => {
  const [hide, sethide] = useState(false);

  const chnageColor = () =>
    window.scrollY >= 550 ? sethide(true) : sethide(false);
  window.addEventListener("scroll", chnageColor);

  return (
    <header>
      <div
        className={hide ? "header-wrapper header-wrapper-bg" : "header-wrapper"}
      >
        <div className="header-wrapper-container main-container">
          <div className="header-wrapper-container-logo">
            <img src={logo} alt="/" />
          </div>
          <div className="header-wrapper-container-nav">
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
          <div className="header-wrapper-container-freeestimation">
            <button>Free Estimation</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
