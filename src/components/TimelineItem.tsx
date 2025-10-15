import React from 'react';
import { ExperienceItem } from '../experienceData';

const TimelineItem: React.FC<{ data: ExperienceItem }> = ({ data }) => {
  // Helper to create a URL-friendly string from the company name
  const urlSlug = data.company.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="timeline-item">
      {/* The main card is now the browser window */}
      <div className="timeline-item-content">
        
        {/* --- NEW: Browser Header --- */}
        <div className="browser-header">
          <div className="buttons">
            <span className="dot" style={{ background: '#ff5f56' }}></span>
            <span className="dot" style={{ background: '#ffbd2e' }}></span>
            <span className="dot" style={{ background: '#27c93f' }}></span>
          </div>
          <div className="url-bar">
            cyrianne-chabert.com/experience/{urlSlug}
          </div>
        </div>

        {/* --- NEW: Browser Body (wraps the old content) --- */}
        <div className="browser-body">
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
    </div>
  );
};

export default TimelineItem;