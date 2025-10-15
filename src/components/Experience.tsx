import React from 'react';
import { experiences } from '../experienceData';
import TimelineItem from './TimelineItem';
import './Experience.css'; // We will create this CSS file next

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>My Experience</h2>
      <div className="timeline-container">
        {experiences.map(exp => (
          <TimelineItem key={exp.id} data={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;