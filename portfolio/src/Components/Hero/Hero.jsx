import React from 'react';
import './Hero.css';


const Hero = () => {
    return (
      <section className="hero-container">
          <div className="hero-content">
              <h2>Building Digital Experiences That Inspire</h2>
              <p>Hi, I'm Jonatthan Medalla, a freelance web developer. I can 
                  provide clean, responsive and interactive websites.
              </p>
          </div>
          <div className="hero-img">
              <div>
                  <img src="assets/Images/big_profile.webp" alt="Profile" className="" />
              </div>
          </div>
      </section>
    );
  };
  
  export default Hero;