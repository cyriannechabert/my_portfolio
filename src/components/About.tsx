import React from 'react';
import './About.css';
import TypingTitle from './TypingTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <TypingTitle text="About Me" />
      <div className="about-content">
        {/* The src path now points directly to the public folder */}
        <img src="/profile.jpg" alt="Cyrianne Chabert" className="profile-picture" />
        <div className="about-text">
            <p>
                Hello! I'm Cyrianne, a Mechanical Engineering student at Columbia University with a background in Applied Mathematics and Physics from Mines ParisTech. My interests lie at the intersection of robotics, data-driven modeling, and system optimization.
            </p>
            <p>
                I enjoy bridging analytical thinking and hands-on engineering — from building robotic systems to developing computational tools for understanding complex dynamics. I’m currently seeking research or internship opportunities for Summer 2026 in robotics, data science, or applied research.
            </p>

        </div>
      </div>
    </section>
  );
};

export default About;