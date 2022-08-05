import React from "react";
import "./MainImgText.scss";
import "@fontsource/archivo-black"
import "@fontsource/open-sans"
import MainFrameBtn from "../main-frame-btn/MainFrameBtn";


const MainImgText = () => {
  return (
    <div className="main-img-text-wrapper">
      <h1>Outsource Your Development</h1>
      <p>
        Outsource Your Development at Affordable Prices to Senior Engineers in
        Armenia
      </p>
      <MainFrameBtn/>
    </div>

  );
};

export default MainImgText;
