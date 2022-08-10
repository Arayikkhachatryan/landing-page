import { useState } from "react";
import "./MainDevServices.scss";
// import ServicesBg from "./services-bg/ServicesBg";
import { servicesData } from "../../data/servicesData";
import ServicesItems from "./services-items/ServicesItems";
import BaseButton from "../../common/baseButton/BaseButton";

const MainDevServices = () => {
  const [servicesItems, setServicesData] = useState(servicesData);
    return (
      <div className="main-dev-services">
        <h1 className="main-dev-services-title">Software <br/>Development Services</h1>
        <h4 className="main-dev-services-subtitle">We are a Software Development Company with more than 10 years of<br/> experience. We offer full-cycle web development services for business.</h4>
        <ServicesItems data={ servicesItems } />
        <BaseButton text="Free Estimation" />
      </div>
    );
};

export default MainDevServices;