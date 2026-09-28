import { ValidCategory, ValidProjectType } from "./constants";

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  name: string;
  monogram: string; // letters shown on the project card banner
  type: ValidProjectType;
  role: string;
  duration: string;
  teamSize: number;
  category: ValidCategory[];
  shortDescription: string;
  techStack: string[];
  descriptionDetails: DescriptionDetailsInterface;
  // Add these when the repo / live demo exist and the buttons appear automatically.
  githubLink?: string;
  websiteLink?: string;
}

export const Projects: ProjectInterface[] = [
  {
    id: "taskflow",
    name: "TaskFlow",
    monogram: "TF",
    type: "Solo",
    role: "Full-Stack Developer",
    duration: "1 Month",
    teamSize: 1,
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A full-stack task management web app where users register, log in and manage tasks with priority levels and status tracking.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    descriptionDetails: {
      paragraphs: [
        "TaskFlow is a task management application I built end to end on my own: a React frontend, an Express.js REST API backend and a MySQL database.",
      ],
      bullets: [
        "Users can register, log in and manage their own tasks.",
        "Tasks carry priority levels and status tracking.",
        "REST API built with Node.js and Express.js, backed by a relational MySQL schema.",
      ],
    },
    
  },
  {
    id: "hivebuzz",
    name: "HiveBuzz",
    monogram: "HB",
    type: "Team",
    role: "Full-Stack Developer",
    duration: "2 Months",
    teamSize: 4,
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A social media website for posting short, tweet-like messages so users can communicate and engage with each other.",
    techStack: ["JavaScript", "MongoDB", "HTML", "CSS"],
    descriptionDetails: {
      paragraphs: [
        "HiveBuzz is a social platform built around short, tweet-like posts. I played a key role in building both its frontend and backend features as part of a 4-member team.",
      ],
      bullets: [
        "Core frontend and backend features integrated with a MongoDB database.",
        "Collaborated with a 4-member team using Git and GitHub for version control.",
      ],
    },
    websiteLink: "https://hivebuzz.vercel.app/",
  },
  {
    id: "hybrid-credit-card-fraud-detection",
    name: "Hybrid Credit Card Fraud Detection",
    monogram: "HFD",
    type: "Team",
    role: "Machine Learning Developer",
    duration: "6 Months",
    teamSize: 4,
    category: ["Machine Learning"],
    shortDescription:
      "A fraud detection model that combines rule-based logic with machine-learning methods to detect unusual transactions.",
    techStack: ["Python", "React", "JavaScript", "HTML", "CSS"],
    descriptionDetails: {
      paragraphs: [
        "A six-month team project on detecting unusual credit card transactions by pairing rule-based logic with machine-learning methods. I worked on it as the Machine Learning Developer in a 4-member team.",
      ],
      bullets: [
        "Hybrid approach: rule-based checks combined with machine-learning methods.",
        "Flags unusual transactions for review.",
        "React-based interface for reviewing flagged results.",
      ],
    },
    websiteLink: "http://ensemble-credit-card-fraud-detectio.vercel.app/",
  },
  {
    id: "fraudguard",
    name: "FraudGuard",
    monogram: "FG",
    type: "Team",
    role: "Frontend Developer",
    duration: "2 Months",
    teamSize: 4,
    category: ["Frontend", "Web Dev"],
    shortDescription:
      "A website that identifies fraudulent clicks in online advertisements through behavioural analysis and anomaly detection.",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    descriptionDetails: {
      paragraphs: [
        "FraudGuard is a platform that identifies fraudulent clicks in online advertisements using behavioural analysis and anomaly detection. I was the Frontend Developer in a 4-member team.",
      ],
      bullets: [
        "Responsive React interfaces for the platform.",
        "Consumes backend APIs to surface behavioural analysis and anomaly detection results.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
