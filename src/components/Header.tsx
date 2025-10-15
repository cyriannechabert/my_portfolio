import React from 'react';
import './Header.css'; // We will create this CSS file next
import TypingTitle from './TypingTitle';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <TypingTitle text="Cyrianne Chabert" />
        <p>Mechanical Engineering Student at Columbia | Applied Mathematics & Data Science at Mines Paris - PSL</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          {/* Make sure to add your resume PDF to the 'public' folder */}
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/cyriannechabert/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/cyriannechabert" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;