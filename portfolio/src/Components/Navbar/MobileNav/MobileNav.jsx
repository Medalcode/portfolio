import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <img src="/assets/Images/logoedit.png" alt="" className="logo" />
          <ul>
            <li>
              <a href="#hero" className="menu-item">Home</a>
            </li>
            <li>
              <a href="#skills" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item">Work Experience</a>
            </li>
            <li>
              <a href="#contact-me" className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;