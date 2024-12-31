import React from 'react'
import './Hero.css'
import profile from '../../assets/Images/profile.png'
import html5 from '../../assets/Images/html5.svg'
import css3 from '../../assets/Images/css3.svg'
import jscript from '../../assets/Images/jscript.svg'
import react from '../../assets/Images/react.svg'
import python from '../../assets/Images/python.svg'
import django from '../../assets/Images/django.svg'
import mysql from '../../assets/Images/mysql.svg'



const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Hi, I'm John Doe, a freelance web developer. I can 
                provide clean, responsive and interactive websites.
            </p>
        </div>
        <div className="hero-img">

            <div>
                
                <div className="tech-icon">
                    <img src={html5} alt="" className="" />
                </div>
                <img src={profile} alt="" className="" />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={css3} alt="" className="" />
                </div>
                <div className="tech-icon">
                    <img src={jscript} alt="" className="" />
                </div>
                <div className="tech-icon">
                    <img src={python} alt="" className="" />
                </div>
                <div className="tech-icon">
                    <img src={mysql} alt="" className="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero