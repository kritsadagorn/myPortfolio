import {
    Code2,
    User,
    FolderOpen,
    BookOpen,
    Award
  } from "lucide-react"
  
  export const sections = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "learning", label: "Learning", icon: BookOpen }
  ]
  
  export const skills = {
    programming: [
      { name: "JavaScript", level: "Pro" },
      { name: "TypeScript", level: "Learning" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Learning" },
      { name: "Node.js", level: "Basic" },
      { name: "Python", level: "Basic" },
      { name: "C++", level: "Learning" },
      { name: "SQL", level: "Basic" },
      { name: "MongoDB", level: "Basic" },
    ],
    soft: [
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Time Management",
      "Emotional Intelligence",
      "Critical Thinking"
    ],
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Intermediate" },
    ]
  }
  
  export const projects = [
    {
      title: "Position Explorer Website",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      github: "www.github.com/kritsadagorn/FrontJob",
      demo: "positionexplorer.vercel.app",
      isDeployed: true,
      previewImage:
        "/placeholder.svg?height=300&width=500&text=E-Commerce+Platform+Preview"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
      github: "#",
      demo: "#",
      isDeployed: false,
      previewImage:
        "/placeholder.svg?height=300&width=500&text=Task+Management+App+Preview"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration and animations",
      tech: ["React", "OpenAI API", "GSAP", "Tailwind"],
      github: "#",
      demo: "#",
      isDeployed: false,
      previewImage:
        "/placeholder.svg?height=300&width=500&text=AI+Chat+Interface+Preview"
    }
  ]
  
  export const certificates = [
    {
      title: "Deploying Security Strategies for the Modern Network",
      description:
        "Learning cybersecurity on fortinet structure",
      image: "https://img5.pic.in.th/file/secure-sv1/FortinetandRMUTL.jpg",
      issuer: "Fortinet & RMUTL",
      date: "2025"
    },
    {
      title: "Full Stack Web Development",
      description:
        "Complete web development bootcamp covering frontend, backend, databases, and deployment",
      image: "/placeholder.svg?height=200&width=350",
      issuer: "Coursera",
      date: "2022"
    },
    {
      title: "UI/UX Design Fundamentals",
      description:
        "Principles of user interface design, user experience, and interactive prototyping",
      image: "/placeholder.svg?height=200&width=350",
      issuer: "Interaction Design Foundation",
      date: "2022"
    },
    {
      title: "TypeScript Masterclass",
      description:
        "Advanced TypeScript concepts, generics, utility types, and best practices",
      image: "/placeholder.svg?height=200&width=350",
      issuer: "Frontend Masters",
      date: "2023"
    }
  ]
  
  export const learningPath = [
    {
      period: "2024 Q1",
      title: "Advanced React Patterns",
      description:
        "Deep dive into React performance optimization and advanced patterns",
      status: "completed"
    },
    {
      period: "2024 Q2",
      title: "System Design & Architecture",
      description:
        "Learning scalable system design and microservices architecture",
      status: "in-progress"
    },
    {
      period: "2024 Q3",
      title: "Machine Learning Fundamentals",
      description: "Exploring ML algorithms and their practical applications",
      status: "planned"
    },
    {
      period: "2024 Q4",
      title: "DevOps & Cloud Computing",
      description: "AWS, Docker, Kubernetes, and CI/CD pipelines",
      status: "planned"
    }
  ]