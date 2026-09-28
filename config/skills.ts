import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

// Ordered by relevance to full-stack work; the first six are shown on the home page.
export const skills: skillsInterface[] = [
  {
    name: "React",
    description:
      "Frontend for TaskFlow and FraudGuard, plus the review interface in the fraud detection project.",
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript behind the TaskFlow backend and its REST API.",
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "REST API layer for TaskFlow: user registration, login and task management.",
    icon: Icons.express,
  },
  {
    name: "JavaScript",
    description:
      "Interactive UIs and backend logic across TaskFlow, HiveBuzz and FraudGuard.",
    icon: Icons.javascript,
  },
  {
    name: "MySQL & SQL",
    description:
      "Relational schema design and SQL queries for TaskFlow, managed with MySQL Workbench.",
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description: "NoSQL data layer behind the HiveBuzz social platform.",
    icon: Icons.mongodb,
  },
  {
    name: "Python",
    description:
      "Machine learning work in the Hybrid Credit Card Fraud Detection project; 100% on the TCS iON NQT Python hands-on.",
    icon: Icons.python,
  },
  {
    name: "Java",
    description:
      "Object-oriented programming and data structures from my B.Tech coursework.",
    icon: Icons.java,
  },
  {
    name: "C / C++",
    description:
      "Coursework and data structures & algorithms practice.",
    icon: Icons.cpp,
  },
  {
    name: "HTML 5",
    description: "Semantic, responsive markup for every web project I've built.",
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description: "Responsive layouts and clean, consistent UI styling.",
    icon: Icons.css3,
  },
  {
    name: "Git & GitHub",
    description:
      "Version control and collaboration in 4-member team projects.",
    icon: Icons.git,
  },
  {
    name: "Machine Learning",
    description:
      "Combined rule-based logic with ML methods to flag unusual credit card transactions.",
    icon: Icons.brain,
  },
  {
    name: "Data Structures & Algorithms",
    description: "200+ problems solved on LeetCode.",
    icon: Icons.leetcode,
  },
];

export const featuredSkills = skills.slice(0, 6);
