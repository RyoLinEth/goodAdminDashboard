import React, { useContext, useState, useEffect } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

//images
import logo1 from './../../../images/logo/logo.png';
import logotext1 from './../../../images/logo/logo-text.png';
import logoColor from './../../../images/logo/logo-color.png';
import logoColorText from './../../../images/logo/logo-text-color.png';

import WalletConnector from '../../../mypages/WallectConnector'

export function NavMenuToggle() {
  setTimeout(() => {
    let mainwrapper = document.querySelector("#main-wrapper");
    if (mainwrapper.classList.contains('menu-toggle')) {
      mainwrapper.classList.remove("menu-toggle");
    } else {
      mainwrapper.classList.add("menu-toggle");
    }
  }, 200);
}

const handleDefaultAccountChange = (value) => {
  console.log(value)
}

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );

  //For fix header
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={`header ${headerFix ? "is-fixed" : ""}`}>
      <div className="nav-header">
        <Link to="/dashboard" className="brand-logo">
          <img src={logo1} className="logo-abbr" alt="" />
          <img src={logotext1} className="brand-title" alt="" />
          <img src={logoColor} className="logo-color" alt="" />
          <img src={logoColorText} className="brand-title color-title" alt="" />
        </Link>

        <div
          className="nav-control"
          onClick={() => {
            console.log("In nav Header")
            setToggle(!toggle);
            //openMenuToggle();
            NavMenuToggle();
          }}
        >
          <div className={`hamburger ${toggle ? "is-active" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A" />
              <rect x="11" width="4" height="4" rx="2" fill="#2A353A" />
              <rect x="22" width="4" height="4" rx="2" fill="#2A353A" />
              <rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A" />
              <rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A" />
              <rect width="4" height="4" rx="2" fill="#2A353A" />
              <rect y="11" width="4" height="4" rx="2" fill="#2A353A" />
              <rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A" />
              <rect y="22" width="4" height="4" rx="2" fill="#2A353A" />
            </svg>
          </div>
          {/* <div style={{ position: 'fixed', top:'20px', right:'20px' }}>
          <WalletConnector defaultAccountChange={handleDefaultAccountChange} />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavHader;
