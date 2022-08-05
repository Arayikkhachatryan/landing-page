import React from "react";
import "./MainPortfolioImgContainer.scss";
import portfolioOne from "../../../../assets/portfolio-pictures/1 of 6.png";
import portfolioTwo from "../../../../assets/portfolio-pictures/2 of 6.png";
import portfolioThree from "../../../../assets/portfolio-pictures/3 of 6.png";
import portfolioFour from "../../../../assets/portfolio-pictures/4 of 6.png";
import portfolioFive from "../../../../assets/portfolio-pictures/5 of 6.png";
import portfolioSix from "../../../../assets/portfolio-pictures/6 of 6.png";

const MainPortfolioImgContainer = () => {
  return (
    <div className="main-portfolio-wrapper-imgs">
      <img src={portfolioOne} alt="/" />
      <img src={portfolioTwo} alt="/" />
      <img src={portfolioThree} alt="/" />
      <img src={portfolioFour} alt="/" />
      <img src={portfolioFive} alt="/" />
      <img src={portfolioSix} alt="/" />
    </div>
  );
};

export default MainPortfolioImgContainer;
