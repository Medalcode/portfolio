import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="assets/Images/logoedit.png" alt=""/>
          <ul>
            <li>
              <a href="" className="menu-item">Home</a>
            </li>
            <li>
              <a href="" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="" className="menu-item">Work Experience</a>
            </li>
            <li>
              <a href="" className="menu-item">Contact Me</a>
            </li>
            <a href="assets/Images/CV.pdf" className="contact-btn" download>
                My CV
              </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{fontSize:"1.8rem"}}> 
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;