import React from 'react';
import './Header.css'; // We will create this CSS file next

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Cyrianne Chabert</h1>
        <p>Mechanical Engineering Student | CAD Designer | Innovator</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
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