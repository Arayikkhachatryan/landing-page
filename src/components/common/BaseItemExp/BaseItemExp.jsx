import "./BaseItemExp.scss";

const BaseItemExp = ({ image, text }) => {
  const { src, alt } = image;
    return (
        <div className="base-item-exp">
            <img src={ src } alt={ alt } />
            <p className="op-400">{ text }</p>
        </div>
    )
}

export default BaseItemExp;