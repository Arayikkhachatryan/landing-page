import BaseItem from "../../../common/baseItem/BaseItem";

const ServicesItems = ({ data }) => {
    return (
        <div className="main-dev-services-wrapper-items">
            {
                data.map(item => {
                    return  <BaseItem key={ item.id } image={ item.image } text={ item.text } />
                })
            }
        </div>
    )
}

export default ServicesItems;