import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { projects } from '../projectData';
import './ProjectDetailPage.css';
import Decrypting from './Decrypting';

const ProjectDetailPage: React.FC = () => {
  const [isDecrypting, setIsDecrypting] = useState(true);

  const { projectId } = useParams();
  const project = projects.find(p => p.id === Number(projectId));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDecrypting(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []); 

  if (isDecrypting) {
    return <Decrypting />;
  }

  if (!project) {
    return <div className="project-not-found"><h2>Project Not Found</h2></div>;
  }

  return (
    <div className="project-detail-terminal">

      <div className="project-detail-container">
        <h1>{project.title}</h1>
        <img src={project.imageUrl} alt={project.title} className="project-detail-image terminal-image" />
        <div className="project-detail-content">
          {project.details.map((section, index) => (
            <div key={index} className="project-detail-section">
              <h3> {section.heading}</h3>
              {section.content.length > 1 ? (
                <ul>{section.content.map((point, pointIndex) => (<li key={pointIndex}>{point}</li>))}</ul>
              ) : (<p>{section.content[0]}</p>)}
            </div>
          ))}
          <h3> KEYWORDS</h3>
          <div className="project-skills">
            {project.skills.map(skill => (<span key={skill} className="skill-tag">{skill}</span>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;