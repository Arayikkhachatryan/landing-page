import React, { useState } from "react";
import "./MainExpertise.scss";
import "@fontsource/archivo-black";
import "@fontsource/open-sans";
import MainExpertiseItems from "./main-expertise-items/MainExpertiseItems";
import { mainExpertiseData } from "./main-expertise-data/mainExpertiseData";

const MainExpertise = () => {
  const [experticeItems, setExpertiseItems] = useState(mainExpertiseData);
  return (
    <div className="main-expertice-wrapper">
      <div className="main-expertice-wrapper-title">
        <h1>Our Expertice</h1>
        <p>
          By partnering with Datalite you will receive professional services in
          the following technologies.
        </p>
        <div className="main-expertice-wrapper-title-button">
          <button>Free Estimation</button>
        </div>
      </div>
      <div className="main-expertice-wrapper-container">
        <MainExpertiseItems data={experticeItems}/>
      </div>
    </div>
  );
};

export default MainExpertise;
