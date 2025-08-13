import { Code2, User, FolderOpen, BookOpen, Award } from "lucide-react";

export const sections = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "learning", label: "Learning", icon: BookOpen },
];

export const skills = {
  programming: [
    { name: "HTML/CSS", level: "Intermediate" },
    { name: "Javascript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Next.js", level: "Basic" },
    { name: "Laravel", level: "Learning" },
    { name: "Node.js", level: "Basic" },
    { name: "Python", level: "Basic" },
    { name: "PHP", level: "Basic" },
    { name: "MySQL" },
    { name: "Prisma" },
    { name: "Git" },
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Emotional Intelligence",
    "Time Management",
    "Stress Management",
    "Creativity",
  ],
  languages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
};

export const projects = [
  {
    title: "Position Explorer Website",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/kritsadagorn/FrontJob",
    demo: "https://positionexplorer.vercel.app",
    isDeployed: true,
    previewImage: "https://img2.pic.in.th/pic/Screenshot-2025-08-11-171949.png",
  },
  {
    title: "Fruit shop product listing website",
    description:
      "E-commerce site for Somjai Fresh Fruit using Backblaze B2 for image storage, with an admin panel for managing categories and products.",
    tech: ["Create React App", "Node.js", "Express.js", "MongoDB"],

    github: "https://github.com/kritsadagorn/FruitStoreStructure",
    demo: "http://dev.somjaifreshfruit.com",
    isDeployed: true,
    previewImage:
      "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-08-11-172005.png",
  },
];

export const certificates = [
  {
    title:
      "[Network Security] Deploying Security Strategies for the Modern Network r02",
    description:
      "Certificate awarded for successfully completing the Fortinet Training Institute Fast Track course, focusing on advanced network security concepts and strategies for modern network environments.",
    image: "https://img5.pic.in.th/file/secure-sv1/FortinetandRMUTL.jpg",
    issuer: "Fortinet Training Institute",
    date: "2025",
  },
  {
    title: "Lan Na Sansoen Award – Student Achievement in Reputation Building",
    description:
      "Awarded by RMUTL to recognition of being selected as an exemplary student who demonstrates exceptional knowledge, capability, moral integrity, and ethical conduct, serving as a positive role model in society.",
    image: "https://img2.pic.in.th/pic/Scan_20250813-1.png",
    issuer: "Rajamangala University of Technology Lanna",
    date: "2024",
  },
];

export const learningPath = [
  {
    period: "2019 - 2022",
    title: "Vocational Certificate",
    description:
      "Pre-Engineering (Gifted Hands-on) Mechanically based GPA 3.37",
    status: "Graduated",
  },
  {
    period: "2022 - Present",
    title: "Bachelor of Computer Enginering",
    description:
      "Rajamangkala University Of Technology Lanna (UNDERGRAD) GPA 3.67",
    status: "in-progress",
  },
];
