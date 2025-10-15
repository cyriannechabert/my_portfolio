// Define the structure of a single experience item
export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string[];
}

// Experiences, from most recent to oldest
export const experiences: ExperienceItem[] = [
{
    id: 1,
    date: "Sep 2025 – May 2026",
    title: "MS in Mechanical Engineering",
    company: "Columbia University | New York, NY",
    description: [
      "Coursework: Robotics, Robotics Studio, Data Science for Mechanical Systems, Biostatistics."
    ]
  },
  {
    id: 2,
    date: "Sep 2025 – Present",
    title: "Biomedical Informatics Researcher",
    company: "New York Genome Center | New York, NY",
    description: [
      "Investigating federated learning on biomedical data to improve cross-institution model generalization.",
      "Analyzing interdependencies among 6+ hyperparameters to enhance predictive performance.",
      "Collaborating with computational biologists to ensure data privacy and reproducibility."
    ]
  },
  {
    id: 3,
    date: "Sep 2023 – Oct 2027",
    title: "MEng in Applied Mathematics and Physics",
    company: "Mines ParisTech - PSL University | Paris, FR",
    description: [
      "Coursework: Optimization, Data Science, Probability, Continuum Mechanics, Quantum Physics.",
      "Exchange Semester: Seoul National University (Spring 2025) — Machine Learning in Bioinformatics, Energy Systems."
    ]
  },
  {
    id: 4,
    date: "Mar 2025 – Jun 2025",
    title: "Bioinformatics Research Intern",
    company: "CBIO Lab, Mines ParisTech | Paris, FR",
    description: [
      "Rebuilt the RSApred pipeline and identified reproducibility gaps in RNA–ligand prediction models.",
      "Designed RNA–ligand swapping experiments to study model dependency on molecular features.",
      "Tested RNA redundancy using RNA-GLIB and improved dataset consistency."
    ]
  },
  {
    id: 5,
    date: "Dec 2024 – Feb 2025",
    title: "Biomechanics Intern",
    company: "Movement Analysis Laboratory, Hôpital des Massues | Lyon, FR",
    description: [
      "Processed 10+ gait datasets in Python to support rehabilitation research in Virtual Reality.",
      "Operated the Dive In Gait machine during clinical trials and patient rehabilitation sessions.",
      "Used Unity, Blender, and C# to design immersive biomechanical training environments."
    ]
  },
];
