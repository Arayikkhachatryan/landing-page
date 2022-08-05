import React from "react";
import "./MainPortfolioImgContainer.scss";
import "@fontsource/open-sans";
import PortfolioImg from "../../../common/PortfolioImg";
import portfolioOne from "../../../../assets/portfolio-pictures/1 of 6.png";
import portfolioTwo from "../../../../assets/portfolio-pictures/2 of 6.png";
import portfolioThree from "../../../../assets/portfolio-pictures/3 of 6.png";
import portfolioFour from "../../../../assets/portfolio-pictures/4 of 6.png";
import portfolioFive from "../../../../assets/portfolio-pictures/5 of 6.png";
import portfolioSix from "../../../../assets/portfolio-pictures/6 of 6.png";

const MainPortfolioImgContainer = () => {
  return (
    <div className="main-portfolio-wrapper-imgs">
      <PortfolioImg img={portfolioOne}/>
      <PortfolioImg img={portfolioTwo}/>
      <PortfolioImg img={portfolioThree}/>
      <PortfolioImg img={portfolioFour}/>
      <PortfolioImg img={portfolioFive}/>
      <PortfolioImg img={portfolioSix}/>
    </div>
  );
};

export default MainPortfolioImgContainer;
