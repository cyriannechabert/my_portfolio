import React from 'react';
import { Project } from '../projectData';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Import a file icon

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a href={`/project/${project.id}`} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card dossier">
        <div className="dossier-header">
          <FontAwesomeIcon icon={faFileAlt} />
          <span>FILE: PROJECT_00{project.id}</span>
        </div>
        <div className="dossier-body">
          <h3 className="subject-line"><span>SUBJECT:</span> {project.title}</h3>
          <p className="abstract-line"><span>ABSTRACT:</span> {project.description}</p>
        </div>
        <div className="dossier-footer">
          <span>// Click to decrypt</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;