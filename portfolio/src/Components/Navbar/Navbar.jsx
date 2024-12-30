import React from 'react'
import './Navbar.css'
import logoedit2 from '/src/assets/Images/logoedit2.svg'
import logoedit from '/src/assets/Images/logoedit.png'
im

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logoedit} alt="" className="logo" />
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

            <button className="contact-btn" onClick={()=>{}}>
              Hire Me
            </button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar