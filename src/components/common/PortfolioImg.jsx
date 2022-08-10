const PortfolioImg = ({img}) => {
  return (
    <div className="main-portfolio-wrapper-imgs-bg">
        <img src={img} alt="/" />
        <div className="main-portfolio-wrapper-imgs-bg-text">
          <p className="op-700">The Name Of Portfolio</p>
        </div>
      </div>
  )
}

export default PortfolioImg