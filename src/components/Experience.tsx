import React from 'react';
import { experiences } from '../experienceData';
import TimelineItem from './TimelineItem';
import './Experience.scss'; // We will create this CSS file next
import TypingTitle from './TypingTitle';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <TypingTitle text="Experience" />
      <div className="timeline-container">
        {experiences.map(exp => (
          <TimelineItem key={exp.id} data={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;