import React from 'react'
import './MainFrameBtn.scss'
import playImg from '../../../../assets/main-frame-image/Vector.png'

const MainFrameBtn = () => {
  return (
    <div className="main-frame-btns-wrapper">
        <button>Free Estimation</button>
        <div className="main-frame-btns-wrapper-play">
            <img src={playImg} alt="/" />
            <p>Play Video</p>
        </div>
    </div>
  )
}

export default MainFrameBtn