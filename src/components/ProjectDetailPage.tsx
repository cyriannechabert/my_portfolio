import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom';
import { projects } from '../projectData';
import './ProjectDetailPage.css';
import { TypeAnimation } from 'react-type-animation';
import Decrypting from './Decrypting'; // Import the new component

const ProjectDetailPage: React.FC = () => {
  // --- 1. Add state to track the decrypting process ---
  const [isDecrypting, setIsDecrypting] = useState(true);

  const { projectId } = useParams();
  const project = projects.find(p => p.id === Number(projectId));

  // --- 2. Use useEffect to run a timer when the component loads ---
  useEffect(() => {
    // Set a timer for 1.5 seconds (1500 milliseconds)
    const timer = setTimeout(() => {
      setIsDecrypting(false); // After the timer, set isDecrypting to false
    }, 1500);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once

  // --- 3. Conditionally render the Decrypting component ---
  if (isDecrypting) {
    return <Decrypting />;
  }
  
  // The rest of your component remains the same...
  if (!project) {
    return <div className="project-not-found"><h2>Project Not Found</h2></div>;
  }

  return (
    <div className="project-detail-terminal">

      <div className="project-detail-container">
        {/* ... all your existing project detail JSX ... */}
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