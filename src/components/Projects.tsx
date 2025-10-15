import React from 'react';
import { projects } from '../projectData';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Import the CSS file we will create
import TypingTitle from './TypingTitle';

const Projects: React.FC = () => {
  return (
    // Add id for navigation and className for styling
    <section id="projects" className="projects-section">
        <TypingTitle text="Projects" />
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;