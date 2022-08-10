import "./MainContactUs.scss";
import ContactBoard from "../../../assets/images/contact-us-board.svg";
import ContactPicture from "../../../assets/images/contact-us-stars.png";
import ContactForm from "./contactForm/ContactForm";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ContactContext = createContext();

const MainContactUs = () => {
  const defaultReq = {
    firstName: "",
    phone: "",
    email: "",
    textArea: "",
  };
  const [reqData, setReqData] = useState(defaultReq);
  const [val, setVal] = useState(["", ""]);

  const changeData = (val, name) => {
    setReqData((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  useEffect(() => {
    const [firstVal, secondVal] = val;
    if (secondVal) {
      changeData(firstVal, secondVal);
    }
  }, [val]);

  const sendReq = () => {
    const checkData = Object.entries(reqData).every((item) => item[1].trim());
    if (!checkData) return;
    else {
      axios.post("https://jsonplaceholder.typicode.com/posts", reqData);
      setReqData(defaultReq);
    }
  };

  return (
    <ContactContext.Provider value={{ setVal, reqData, sendReq }}>
      <div className="main-contact-us">
        <div className="main-contact-us-container main-container">
          <div className="main-contact-us-container-board">
            <img src={ContactBoard} alt="/" />
          </div>
          <div className="main-contact-us-container-picture">
            <img src={ContactPicture} alt="stars" />
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactContext.Provider>
  );
};

export default MainContactUs;
