import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import "@fontsource/open-sans";import { useState } from "react";

const Header = () => {
  const [color, setColor] = useState(false);

  const chnageColor = () =>
    window.scrollY >= 880 ? setColor(true) : setColor(false);
  window.addEventListener("scroll", chnageColor);

  return (
    <header>
      <div className={color ? "header-wrapper header-bg" : "header-wrapper"}>
        <div className="header-wrapper-container">
          <div className="header-wrapper-container-logo">
            <img src={logo} alt="/" />
          </div>
          <div className="header-wrapper-container-nav">
            <a href="/">Services</a>
            <a href="/">Expertice</a>
            <a href="/">Portfolio</a>
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
