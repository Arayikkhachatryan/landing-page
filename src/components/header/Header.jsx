import React from 'react'
import './Header.scss'
import logo from '../../assets/logo/logo.png'
import "@fontsource/open-sans";
const Header = () => {
  return (
    <header>
        <div className="header-wrapper">
                <div className="header-wrapper-container">
                    <div className="header-wrapper-container-logo">
                        <img src={logo} alt="/" />
                    </div>
                    <div className="header-wrapper-container-nav">
                        <a href="/">Services</a>
                        <a href="/">Expertice</a>
                        <a href="/">Portfolio</a>
                    </div>
                    <div className="header-wrapper-container-freeestimation">
                        <button>Free Estimation</button>
                    </div>
                </div>
        </div>
    </header>
  )
}

export default Header