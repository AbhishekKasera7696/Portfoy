import React from 'react';
import { ProjectData } from '../../data/project.js';
import Separator from '../common/separator/index.js';
import "./project.css"
import ProjectCard from './project_card.js';

const Projects = () => {
   
    const data = ProjectData;

  return (
    <div className='projects'>
        <Separator />
      <label className='section_title'>Projects</label>
      <div>
          {data.map((project) => {
               return<ProjectCard project={project}/>
          })}
      </div>
    </div>
  )
}

export default Projects;
