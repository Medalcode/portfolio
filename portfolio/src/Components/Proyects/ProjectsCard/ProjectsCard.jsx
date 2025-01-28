import React from 'react'
import './ProjectsCard.css'

const ProjectsCard = ({details}) => {
  return (
    <div className="projects-card">
        <h1>{details.title}</h1>

        <p>{"Description : "+details.description}</p>

      
        <ul>
            {details.characteristics.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <div className="projects-duration">{"TECHNOLOGIES :"+details.technologies}</div>

    </div>
  );
};

export default ProjectsCard