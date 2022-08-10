import React from "react";
import "./MainPortfolio.scss";
import MainPortfolioImgContainer from "./main-portfolio-img-container/MainPortfolioImgContainer";

const MainPortfolio = () => {
  return (
    <div className="main-portfolio-wrapper">
      <div className="main-portfolio-wrapper-container main-container">
        <div className="main-portfolio-wrapper-container-text">
          <h1 className="default-h1">Our Portfolio</h1>
          <p className="op-400">
            By partnering with Datalite you will receive professional services
            in the following technologies.
          </p>
        </div>
        <MainPortfolioImgContainer />
      </div>
    </div>
  );
};

export default MainPortfolio;
