import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="" className="logo" />
        </div>


      </nav>
    </>
    
  )
}

export default Navbar