import React from 'react';
import { Project } from '../projectData';
import './ProjectCard.css';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    // Wrap the card with an <a> tag
    // target="_blank" opens the link in a new tab
    <a href={`/project/${project.id}`} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <img src={project.imageUrl} alt={`${project.title} preview`} className="card-image" />
        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="card-skills">
            {project.skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};


export default ProjectCard;