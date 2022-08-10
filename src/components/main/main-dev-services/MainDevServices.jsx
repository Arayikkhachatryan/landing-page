import "./MainDevServices.scss";
import { useState } from "react";
import { servicesData } from "../../data/servicesData";
import ServicesItems from "./services-items/ServicesItems";
import BaseButton from "../../common/baseButton/BaseButton";


const MainDevServices = () => {
  const [servicesItems] = useState(servicesData);
  return (
    <div className="main-dev-services-wrapper">
      <div className="main-dev-services-wrapper-container main-container">
        <div className="main-dev-services-wrapper-container-text">
          <h1 className="default-h1">Software Development Services</h1>
          <p className="op-400">
            We are a Software Development Company with more than 10 years of
            experience. We offer full-cycle web development services for
            business.
          </p>
        </div>

        <ServicesItems data={servicesItems} />
        <BaseButton text="Free Estimation" />
      </div>
    </div>
  );
};

export default MainDevServices;
