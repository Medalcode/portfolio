import React from 'react';
import './Hero.css';


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
                      <img src="assets/Images/html5.svg" alt="HTML5" className="" />
                  </div>
                  <img src="assets/Images/profile.png" alt="Profile" className="" />
              </div>
              <div>
                  <div className="tech-icon">
                      <img src="assets/Images/css3.svg" alt="CSS3" className="" />
                  </div>
                  <div className="tech-icon">
                      <img src="assets/Images/jscript.svg" alt="JavaScript" className="" />
                  </div>
                  <div className="tech-icon">
                      <img src="assets/Images/python.svg" alt="Python" className="" />
                  </div>
                  <div className="tech-icon">
                      <img src="assets/Images/mysql.svg" alt="MySQL" className="" />
                  </div>
              </div>
          </div>
      </section>
    );
  };
  
  export default Hero;