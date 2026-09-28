export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Govt. Model Engineering College, Kochi (KTU)",
    period: "Graduated in 2026",
    score: "CGPA 7.7",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "S N Vidya Bhavan",
    period: "2021",
    score: "86%",
  },
  {
    degree: "Class X (CBSE)",
    institution: "S N Vidya Bhavan",
    period: "2019",
    score: "86%",
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  detail: string;
  link: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "TCS iON NQT - IT Scorecard",
    issuer: "TCS iON, Aug 2026",
    detail:
      "91.25% overall (Foundation, Advanced Reasoning & Programming); 100% in the Python Hands-On Assessment.",
    link: "https://drive.google.com/file/d/1hE2B9Cks6927y6XkccUFfYq9VO1aGMEs/view",
  },
  {
    title: "Certificate in Ethical Hacking",
    issuer: "NPTEL, in association with IIT Delhi",
    detail: "Covers networking fundamentals and security concepts.",
    link: "https://drive.google.com/file/d/1dpdXA9LO9u7Nowh_px5H_vQAAp9CrmUV/view?usp=sharing",
  },
];

export const achievements: string[] = [
  "Member, Ibeto Team - Excel 2023, MEC: helped plan, coordinate and manage the Ibeto technical competition.",
];
