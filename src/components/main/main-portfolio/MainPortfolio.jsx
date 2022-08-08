import React from "react";
import "./MainPortfolio.scss";
import "@fontsource/archivo-black";
import "@fontsource/open-sans"
import MainPortfolioImgContainer from "./main-portfolio-img-container/MainPortfolioImgContainer";

const MainPortfolio = () => {
  return (
    <div className="main-portfolio-wrapper">
      <div className="main-portfolio-wrapper-text">
        <h1>Our Portfolio</h1>
        <p>
          By partnering with Datalite you will receive professional services in
          the following technologies.
        </p>
      </div>
      <MainPortfolioImgContainer/>
    </div>
  );
};

export default MainPortfolio;
