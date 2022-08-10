import './MainPortfolioImgContainer.scss'
import PortfolioImg from "../../../common/PortfolioImg";
import portfolioPic from "../../../../assets/images/portfolio.webp";

const MainPortfolioImgContainer = () => {
  return (
    <div className="main-portfolio-wrapper-imgs">
      <PortfolioImg img={portfolioPic}/>
      <PortfolioImg img={portfolioPic}/>
      <PortfolioImg img={portfolioPic}/>
      <PortfolioImg img={portfolioPic}/>
      <PortfolioImg img={portfolioPic}/>
      <PortfolioImg img={portfolioPic}/>
    </div>
  );
};

export default MainPortfolioImgContainer;
