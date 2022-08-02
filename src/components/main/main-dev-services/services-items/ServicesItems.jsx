import BaseItem from "../../../common/baseItem/BaseItem";

const ServicesItems = ({ data }) => {
    console.log(data);
    return (
        <div className="main-dev-services-items">
            {
                data.map(item => {
                    return  <BaseItem key={ item.id } image={ item.image } text={ item.text } />
                })
            }
        </div>
    )
}

export default ServicesItems;