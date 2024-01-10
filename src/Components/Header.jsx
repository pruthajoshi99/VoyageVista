import { useState } from "react";

import "../assets/css/Header.css"
import SwitchTheme from "./SwitchTheme";
import Skiplink from "./SkipLink";


function Header({ onNav, theme, toggleTheme }) {

  const [openHamburger, setOpenHamburger] = useState(false);

  const togglehamburger = () => {
    setOpenHamburger(!openHamburger);
  };


  return (
    <>
     <div className="skipLink">
       <Skiplink onNav={onNav}/>
    </div>

    <header className="header">
      <div className="img-title-container">
        <img src="/Images/logo2.png"
          onClick={onNav} data-page="ToursPackage" href="#ToursPackage"
          className="logo"
          alt="logo"
        />
        <h1 className="header-title"> VoyageVista </h1>
      </div>

      <nav className="header-nav">
      <div className="hamburger">
        <ul className={`${openHamburger ? 'header-list' : 'Nav-hidden'}`}>

          <li className="header-item" >
            <a className="header-link" onClick={onNav} data-page="ToursPackage" href="#ToursPackage">Packages</a></li>

          <li className="header-item">
            <a className="header-link" onClick={onNav} data-page="Reviews" href="#Reviews">Reviews</a></li>

          <li className="header-item">
            <a className="header-link" onClick={onNav} data-page="Enquiry" href="#Enquiry">Enquiry</a></li>

          <li className="header-item">
            <SwitchTheme className="theme-switcher" theme={theme} toggleTheme={toggleTheme} />
          </li> 

        </ul>

          <button className="hamburger-button" onClick={togglehamburger} >

            {/* "below CSS adapted from https://css.gg under the MIT License" */}
            <i className="gg-menu"></i>
          </button>
        </div>
      </nav>
      

    </header>
    </>
  );
}

export default Header;


