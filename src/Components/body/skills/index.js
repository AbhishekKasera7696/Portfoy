import React from 'react';
import Separator from '../common/separator';
import "./skills.css";
import { SkillsData } from '../../data/skills';
import SkillCard from './skillCard';


const Skills = () => {
   const data =  SkillsData;

  return (
    <div className='skills'>
     <Separator />

     <label className="section_title">Skills</label>

     <div className='skills_container'></div>
       {data.map((item)=>{
           return(
               <div className='skills_section'>
                  <label className='skills_section_title'>{item.type}</label> 
                  <div className='skills_list'>
                      {item.List.map((skill)=>{
                          return (
                              <SkillCard skill={skill}/>
                          )
                      })}
                  </div>    
               </div>   
              )
          })}
    </div>
  )
}

export default Skills
