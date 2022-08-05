import "./BaseButton.scss";
import { useContext } from "react"
import { ContactContext } from "../../main/main-contact-us/MainContactUs";

const BaseButton = ({ text, type, sendReq }) => {
    return <button onClick={ sendReq && sendReq } type={ type && type } className="base-button">{ text && text }</button>
}

export default BaseButton;