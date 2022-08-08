import "./BaseItem.scss";

const BaseItem = ({ image, text }) => {
  const { src, alt } = image;
    return (
        <div className="base-item">
            <img src={ src } alt={ alt } />
            <p>{ text }</p>
        </div>
    )
}

export default BaseItem;