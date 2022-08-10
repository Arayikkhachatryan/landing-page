import board1 from "../../../../assets/images/dev-services-board-1.png";
import board2 from "../../../../assets/images/dev-services-board-2.png";
import vector from "../../../../assets/images/dev-services-vector.png";

const ServicesBg = () => {
  return (
    <div className="main-dev-services-bg">
      <div className="main-dev-services-bg-content">
        <div className="main-dev-services-bg-board board-1">
          <img src={board1} alt="/"/>
        </div>
        <div className="main-dev-services-bg-vector">
          <img src={vector} alt="/"/>
        </div>
        <div className="main-dev-services-bg-board board-2">
          <img src={board2} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default ServicesBg;
