import "./BaseButton.scss";

const BaseButton = ({ text }) => {
    return <button className="base-button">{ text && text }</button>
}

export default BaseButton;