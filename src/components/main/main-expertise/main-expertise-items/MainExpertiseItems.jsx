import BaseItemExp from "../../../common/BaseItemExp/BaseItemExp";
import './MainExpertiseItems.scss'

const MainExpertiseItems = ({ data }) => {
  return (
    <div className="main-expertice-wrapper-container-items">
      {data.map((item) => {
        return <BaseItemExp key={item.id} image={item.image} text={item.text} />;
      })}
    </div>
  );
};

export default MainExpertiseItems;
