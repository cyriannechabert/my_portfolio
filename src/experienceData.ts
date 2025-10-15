// Define the structure of a single experience item
export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string[]; // Use an array for bullet points
}

// Your list of experiences, from most recent to oldest
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    date: "May 2025 - Aug 2025",
    title: "Mechanical Engineering Intern",
    company: "Tesla | Palo Alto, CA",
    description: [
      "Assisted in the design and prototyping of battery pack components using SolidWorks.",
      "Conducted FEA simulations to analyze thermal stress on new material composites.",
      "Collaborated with the manufacturing team to improve assembly line efficiency by 15%."
    ]
  },
  {
    id: 2,
    date: "Aug 2022 - May 2026",
    title: "Bachelor of Science in Mechanical Engineering",
    company: "Columbia University | New York, NY",
    description: [
      "Relevant Coursework: Thermodynamics, Fluid Mechanics, Control Systems, Machine Design.",
      "Senior Capstone Project: Autonomous Delivery Drone.",
      "GPA: 3.8/4.0"
    ]
  },
  {
    id: 3,
    date: "June 2024 - Aug 2024",
    title: "Research Assistant",
    company: "Columbia Robotics Lab",
    description: [
      "Developed Python scripts to process sensor data from a robotic arm.",
      "3D printed and tested custom end-effectors for various gripping tasks."
    ]
  }
];