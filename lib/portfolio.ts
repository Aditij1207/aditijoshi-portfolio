export const navItems = ["About", "Experience", "Research", "Projects", "Certificates", "Contact"] as const;

export const profile = {
  name: "Aditi Shailesh Joshi",
  shortName: "Aditi Joshi",
  subtitle: "Computer Science · MIT Manipal",
  description:
    "I build backends, ship data systems, and research how identity should behave online. Currently studying CS at Manipal and writing software at the intersection of AI, data, and the web.",
  email: "aditisj1207@gmail.com",
  phone: "+91 80565 61284",
  location: "Bengaluru, India",
  github: "https://github.com/aditijoshi",
  linkedin: "https://www.linkedin.com/in/aditi-shailesh-joshi/",
};

export const education = {
  school: "Manipal Institute of Technology",
  date: "Aug 2023 — May 2027",
  degree: "B.Tech, Computer Science Engineering",
  stats: [
    { label: "CGPA", value: "8.51", suffix: "/ 10" },
    { label: "12th", value: "95.4%" },
    { label: "10th", value: "97.3%" },
  ],
};

export const skillGroups = [
  { title: "Languages", skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript"] },
  { title: "Core Concepts", skills: ["DSA", "OOP", "Problem Solving", "Debugging"] },
  { title: "Databases", skills: ["SQL", "Oracle", "MySQL"] },
  { title: "Backend & APIs", skills: ["FastAPI", "REST APIs", "JDBC"] },
  { title: "Tools & Platforms", skills: ["Git", "Maven", "Apache Superset", "LangChain", "Langflow"] },
  { title: "Coursework", skills: ["Cryptography", "Computer Networks"] },
  { title: "Embedded", skills: ["LPC1768 (ARM Cortex-M3)"] },
];

export const experiences = [
  {
    role: "AI Intern",
    company: "Tasklance Analytics",
    location: "Remote",
    date: "Jun 2025 – Aug 2025",
    stack: ["Python", "FastAPI", "SQL", "REST APIs"],
    bullets: [
      "Developed backend services using Python and FastAPI for AI-driven product search.",
      "Integrated LLMs with LangChain and Langflow, connecting SQL databases and external APIs for scalable retrieval.",
      "Built modular backend pipelines and automated workflows in Python and SQL.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Ather",
    location: "Bengaluru",
    date: "Jun 2025 – Jul 2025",
    stack: ["PySpark", "SQL", "ClickHouse", "Apache Superset", "Go"],
    bullets: [
      "Built a production-grade monitoring system to improve availability and reliability.",
      "Created real-time dashboards and alerting pipelines for system observability.",
      "Optimized data processing and queries using SQL and PySpark.",
      "Prototyped backend in Go for computer-vision-based detection systems.",
    ],
  },
];

export const research = {
  title: "Autonomous Identity Disclosure via Contextual Agents in Multi-Platform Systems",
  authors: "Aditi Joshi, Anubhav Gupta",
  affiliation: "Manipal Institute of Technology",
  status: "In progress · Submitted to Prism '26",
  description:
    "Introduces the Contextual Identity Agent (CIA) — an autonomous agent that constructs and maintains context-calibrated identity profiles and executes disclosure decisions under user-defined policies and contextual integrity norms. Combines a hybrid symbolic-neural context classifier, pairwise pseudonymous identifiers, BBS+ selective disclosure credentials, and zero-knowledge attribute proofs. Evaluated through simulation over 7,500 interaction traces across five synthetic platform types.",
  stats: [
    { label: "Disclosure minimisation", value: "68%", detail: "vs unmediated" },
    { label: "Re-identification risk", value: "−61%", detail: "vs OAuth baseline" },
    { label: "Classification accuracy", value: "91%", detail: "benign scenarios" },
  ],
  tags: ["Contextual Integrity", "Privacy", "Multi-Agent Systems", "SSI", "ZK Proofs"],
};

export const projects = [
  {
    title: "Social Media App",
    stack: "React, Node.js, PostgreSQL, WebSockets, AWS",
    description: "Currently building a social media app.",
    status: "In Progress",
    featured: true,
  },
  {
    title: "Shopping Cart Management System",
    stack: "Java, JavaFX, Maven, JDBC, Oracle, PL/SQL",
    description:
      "Full-stack system supporting user/admin roles, cart operations, and order processing with JDBC + PL/SQL.",
    href: "https://github.com/aditijoshi",
  },
  {
    title: "Cattle Management System",
    stack: "Java, JavaFX, OOP, File Handling",
    description: "Desktop app for cattle registration and insurance tracking with structured file handling.",
    href: "https://github.com/aditijoshi",
  },
  {
    title: "Grape Disease Detection",
    stack: "CNN, Image Processing, FastAPI",
    description:
      "Backend service for disease detection in grape plants, exposed via FastAPI for real-time predictions.",
  },
  {
    title: "Real-Time Emergency & Traffic Control (Patent)",
    stack: "IoT, Real-Time Systems, Data Analytics",
    description:
      "Designed a system to optimize traffic flow and prioritize emergency vehicles with dynamic signal control.",
  },
  {
    title: "Accessibility Web App for the Hearing Impaired",
    stack: "HTML, CSS, JS, Speech-to-Text, Text-to-Speech",
    description: "Responsive web app integrating STT/TTS APIs for multilingual communication.",
  },
];

export const certificates = [
  "AWS Cloud Practitioner Essentials",
  "Deloitte Data Analytics Virtual Experience",
  "Digital Marketing: Customer Engagement Strategy",
  "Digital Marketing: Platforms, Data, and Technologies",
  "Generative AI for Everyone",
  "Google AI Fundamentals",
  "Marketing in a Digital World",
];
