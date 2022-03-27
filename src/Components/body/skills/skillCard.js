import React from 'react';
import "./skillCard.css";

const SkillCard = ({skill}) => {
  return (
    <div className='skill_card'>
          <div className='skill_icon'>{skill.icon}</div>
          <label className='skill_name'>{skill.name}</label>
    </div>
  )
}

export default SkillCard
