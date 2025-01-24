import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Projects.css';

const PROJECTS = [
  {
    title: "Project 1",
    description: "Description of Project 1"
  },
  {
    title: "Project 2",
    description: "Description of Project 2"
  },
  {
    title: "Project 3",
    description: "Description of Project 3"
  },
  {
    title: "Project 4",
    description: "Description of Project 4"
  }
];

const Projects = () => {
  const slideRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };

  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section className="projects-container">
      <h5>My Projects</h5>

      <div className="projects-content">
        <div className="arrow-right" onClick={slideRight}> 
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={slideRef} {...settings}>
          {PROJECTS.map((item) => (
            <div key={item.title} className="project-card">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;