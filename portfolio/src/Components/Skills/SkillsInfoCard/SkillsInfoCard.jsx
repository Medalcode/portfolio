import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <h3 className='skill-name'>{item.skill}</h3>
            <div className="skills-info">
              <img src={item.icon} alt={`${item.skill} icon`} className="icon" />
              
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;