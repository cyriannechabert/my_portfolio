import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetailPage from './components/ProjectDetailPage';
import Experience from './components/Experience'; 
import Expertise from './components/Expertise';

// It's good practice to create a "HomePage" component for your main layout
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Expertise />
        <Projects />
        <Experience /> 
      </main>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 1: The main page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route 2: The project detail page with a dynamic ID */}
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;