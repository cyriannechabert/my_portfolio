import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../projectData'; // Your project data
import './ProjectDetailPage.css'; // New CSS file for styling

const ProjectDetailPage: React.FC = () => {
  // The useParams hook gets the 'projectId' from the URL (e.g., /project/1)
  const { projectId } = useParams();
  
  // Find the project with the matching ID. Note: URL params are strings.
  const project = projects.find(p => p.id === Number(projectId));

  // If no project is found for the ID, show a message
  if (!project) {
    return <div className="project-not-found"><h2>Project Not Found</h2></div>;
  }

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="project-detail-image" />
      <div className="project-detail-content">
        <h3>Description</h3>
        <p>{project.description}</p>
        
        {/* You can add more detailed sections here! */}
        <h3>Key Skills & Technologies</h3>
        <div className="project-skills">
          {project.skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        <h3>Challenges & Solutions</h3>
        <p>
            (Here you could write a more in-depth explanation of the project's challenges and how you solved them.)
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;