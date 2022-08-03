import React from "react";
import "./MainPortfolio.scss";
import porfImage1 from "../../../assets/portfolio-pictures/1 of 6.png";
import porfImage2 from "../../../assets/portfolio-pictures/2 of 6.png";
import porfImage3 from "../../../assets/portfolio-pictures/3 of 6.png";
import porfImage4 from "../../../assets/portfolio-pictures/4 of 6.png";
import porfImage5 from "../../../assets/portfolio-pictures/5 of 6.png";
import porfImage6 from "../../../assets/portfolio-pictures/6 of 6.png";

const MainPortfolio = () => {
  return (
    <div className="main-portfolio">
      <h1 className="main-portfolio-title">Our Portfolio</h1>
      <h4 className="main-portfolio-subtitle">By partnering with Datalite you will receive professional services in the<br/> following technologies.</h4>
      <div className="main-portfolio-images">
        <img src={ porfImage1 } alt="" className="main-portfolio-image" />
        <img src={ porfImage2 } alt="" className="main-portfolio-image" />
        <img src={ porfImage3 } alt="" className="main-portfolio-image" />
        <img src={ porfImage4 } alt="" className="main-portfolio-image" />
        <img src={ porfImage5 } alt="" className="main-portfolio-image" />
        <img src={ porfImage6 } alt="" className="main-portfolio-image" />
      </div>
    </div>
  );
};

export default MainPortfolio;
