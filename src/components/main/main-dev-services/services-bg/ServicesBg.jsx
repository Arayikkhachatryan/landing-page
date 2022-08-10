import Board1 from "../../../../assets/dev-services/board-1.png";
import Board2 from "../../../../assets/dev-services/board-2.png";
import Vector from "../../../../assets/dev-services/vector.png";

const ServicesBg = () => {
  return (
    <div className="main-dev-services-bg">
      <div className="main-dev-services-bg-content">
        <div className="main-dev-services-bg-board board-1">
          <img src={Board1} alt="/"/>
        </div>
        <div className="main-dev-services-bg-vector">
          <img src={Vector} alt="/"/>
        </div>
        <div className="main-dev-services-bg-board board-2">
          <img src={Board2} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default ServicesBg;
