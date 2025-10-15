// Define the structure of a single project
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Place images in the 'public/images' folder
  skills: string[];
}

// Your list of projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Robotic Arm",
    description: "Designed and built a 5-axis robotic arm using 3D printed parts that sorts objects by color.",
    imageUrl: "/images/robot-arm.jpg",
    skills: ["SolidWorks", "Arduino", "Python", "3D Printing"]
  },
  {
    id: 2,
    title: "FEA of a Bicycle Frame",
    description: "Conducted a static structural analysis in ANSYS to optimize a custom bicycle frame for strength.",
    imageUrl: "/images/bike-fea.png",
    skills: ["ANSYS", "FEA", "CAD"]
  }
];