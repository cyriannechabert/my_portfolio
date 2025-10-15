import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import './Expertise.scss'; // We'll create this style file next

// --- SKILL LABELS ---
const labelsFirst = [
    "Biomechanical Analysis", "Robotics", "Mechanical Design", "3D Printing", 
    "CAD", "SolidWorks", "MATLAB",
];

const labelsSecond = [
    "Python", "Machine Learning", "Supervised Learning", "Unsupervised Learning", 
    "Deep Learning", "Hyperparameter Tuning", "Model Evaluation Metrics", "NumPy", 
    "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", 
    "Jupyter Notebooks", "Data Visualization",
];

const labelsThird = [
    "Git", "JavaScript", "TypeScript", "React", "Node.js Fundamentals", "HTML", "CSS",
];

// --- COMPONENT ---
function Expertise() {
    return (
        <section className="expertise-section" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Robotics and Mechanics</h3>
                        <p>Combining robotics and human-centered design to create intelligent systems that interact with their environment. Experience includes hands-on robotic projects and a professional internship in biomechanics in a hospital for VR rehabilitation of patients.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Data Science and Machine Learning</h3>
                        <p>Applying computational methods to biological and mechanical data. Research experiences include building predictive models, analyzing complex datasets, and exploring graph neural networks.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Web & Software Development</h3>
                        <p>Passionate about web development and software, currently building foundational skills and exploring modern frameworks with hands-on practice projects.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Expertise;