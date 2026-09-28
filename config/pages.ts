import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description:
        "Anjan P Manoj's portfolio - CS Graduate.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologies I work with and what I've used them for.",
    metadata: {
      title: "Skills",
      description: "Anjan P Manoj's technical skills.",
    },
  },
  projects: {
    title: "Projects",
    description: "Things I've built - from full-stack apps to ML models.",
    metadata: {
      title: "Projects",
      description:
        "Anjan P Manoj's projects: TaskFlow, HiveBuzz, FraudGuard and Hybrid Credit Card Fraud Detection.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect - I'm open to Software Engineering Roles.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Anjan P Manoj.",
    },
  },
  resume: {
    title: "Resume",
    description: "Anjan P Manoj's resume.",
    metadata: {
      title: "Resume",
      description: "Anjan P Manoj's resume.",
    },
  },
};
