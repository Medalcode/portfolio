import React from 'react'
import './Hero.css'
import profile from '../../assets/Images/profile.png'

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
                    <img src={profile} alt="" className="" />
                </div>
                <img src={profile} alt="" className="" />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={profile} alt="" className="" />
                </div>
                <div className="tech-icon">
                    <img src={profile} alt="" className="" />
                </div>
                <div className="tech-icon">
                    <img src={profile} alt="" className="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero