import React, { useState } from "react";
import "./MainExpertise.scss";

import MainExpertiseItems from "./main-expertise-items/MainExpertiseItems";
import { mainExpertiseData } from "./main-expertise-data/mainExpertiseData";

const MainExpertise = () => {
  const [experticeItems] = useState(mainExpertiseData);
  return (
    <div className="main-expertice-wrapper">
      <div className="main-expertice-wrapper-title main-container">
        <h1 className="default-h1">Our Expertice</h1>
        <p className="op-400">
          By partnering with Datalite you will receive professional services in
          the following technologies.
        </p>
        <div className="main-expertice-wrapper-title-button">
          <button>Free Estimation</button>
        </div>
      </div>
      <div className="main-expertice-wrapper-container main-container">
        <MainExpertiseItems data={experticeItems}/>
      </div>
    </div>
  );
};

export default MainExpertise;
