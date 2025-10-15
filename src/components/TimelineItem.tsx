import React from 'react';
import { ExperienceItem } from '../experienceData';

const TimelineItem: React.FC<{ data: ExperienceItem }> = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="date">{data.date}</span>
        <h3>{data.title}</h3>
        <h4>{data.company}</h4>
        <ul>
          {data.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;