import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        {/* The src path now points directly to the public folder */}
        <img src="/profile.jpg" alt="Cyrianne Chabert" className="profile-picture" />
        <div className="about-text">
          <p>
            Hello! I'm Cyrianne, a passionate and driven Mechanical Engineering student at Columbia University. My primary interests lie in robotics, sustainable energy, and product design. I enjoy tackling complex problems and turning theoretical concepts into tangible, real-world solutions.
          </p>
          <p>
            Through my coursework and personal projects, I've gained hands-on experience with SolidWorks, Python for data analysis, ANSYS, and 3D printing. I am always eager to learn new technologies and methodologies to improve my engineering toolkit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;