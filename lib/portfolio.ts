export const navItems = ["About", "Experience", "Research", "Projects", "Patent", "Certificates", "Contact"] as const;

export const profile = {
  name: "Aditi Shailesh Joshi",
  shortName: "Aditi Joshi",
  subtitle: "Computer Science Engineering Student | AI & Data Science Enthusiast | Building AI-Powered Systems",
  description:
    "B.Tech Computer Science Engineering student at Manipal Institute of Technology with experience in AI, Data Science, Backend Development, Retrieval Systems, and LLM-powered applications. Passionate about building scalable software systems, intelligent search solutions, and real-world AI products.",
  email: "aditisj1207@gmail.com",
  phone: "+91 80565 61284",
  location: "Bengaluru, India",
  github: "https://github.com/Aditij1207",
  linkedin: "https://www.linkedin.com/in/aditi-joshi-0732162b4/",
};

export const education = {
  school: "Manipal Institute of Technology",
  date: "2023 – 2027",
  degree: "B.Tech Computer Science Engineering",
  stats: [{ label: "CGPA", value: "8.51", suffix: "/10" }],
};

export const skillGroups = [
  { title: "Programming", skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript"] },
  { title: "Databases", skills: ["SQL", "Oracle", "MySQL", "ClickHouse"] },
  { title: "Backend & APIs", skills: ["FastAPI", "REST APIs", "JDBC"] },
  { title: "AI & ML", skills: ["LangChain", "Langflow", "Sentence Transformers", "Gemini AI", "Retrieval Systems", "Vector Search", "BM25"] },
  { title: "Tools", skills: ["Git", "Maven", "Apache Superset", "Qdrant"] },
  { title: "Other", skills: ["Data Structures & Algorithms", "OOP", "Cryptography", "Computer Networks"] },
];

export const experiences = [
  {
    role: "AI Intern",
    company: "Tasklance Analytics",
    location: "Remote",
    date: "June 2025 – Aug 2025",
    stack: ["Python", "FastAPI", "LangChain", "Langflow", "SQL"],
    bullets: [
      "Developed backend services using Python and FastAPI for AI-driven product search.",
      "Integrated LLMs using LangChain and Langflow with SQL databases and external APIs.",
      "Built modular backend pipelines and automated workflows using Python and SQL.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Ather Energy",
    location: "Bengaluru",
    date: "June 2025 – July 2025",
    stack: ["SQL", "PySpark", "ClickHouse", "Apache Superset", "Go"],
    bullets: [
      "Developed a production-grade monitoring system improving availability and reliability.",
      "Built real-time dashboards and alerting pipelines.",
      "Optimized SQL and PySpark workloads.",
      "Contributed to backend prototyping in Go for computer-vision-based detection systems.",
    ],
  },
  {
    role: "AI Intern",
    company: "Sacha Engineering",
    location: "Bengaluru",
    date: "June 2026 – July 2026",
    stack: ["Multimodal AI", "Transformer Embeddings", "Qdrant Cloud", "BM25"],
    bullets: [
      "Built AI video-generation workflows using multimodal models and avatar synthesis platforms.",
      "Designed vector search architecture using transformer embeddings and Qdrant Cloud.",
      "Benchmarked semantic retrieval against BM25-based search systems.",
    ],
  },
];

export const research = {
  title: "Autonomous Identity Disclosure via Contextual Agents in Multi-Platform Systems",
  authors: "Aditi Shailesh Joshi",
  affiliation: "Manipal Institute of Technology",
  status: "Submitted to Prism '26",
  description:
    "Developed a privacy-preserving identity framework using contextual agents, selective disclosure credentials, and zero-knowledge proofs. Evaluated the system on 7,500 simulated interactions.",
  stats: [
    { label: "Disclosure minimization", value: "68%", detail: "reduction" },
    { label: "Re-identification risk", value: "61%", detail: "lower" },
    { label: "Classification accuracy", value: "91%", detail: "achieved" },
  ],
  tags: ["Contextual Agents", "Selective Disclosure", "Zero-Knowledge Proofs", "Privacy", "Identity Systems"],
};

export const projects = [
  {
    title: "FriendZone",
    stack: "Next.js, TypeScript, Supabase, Tailwind CSS",
    description: "Social networking platform focused on profile discovery, community interaction, connections, and user engagement.",
    status: "Ongoing",
    featured: true,
  },
  {
    title: "Retrieval Benchmarking System",
    stack: "Python, Qdrant, Sentence Transformers, BM25",
    description:
      "Built a retrieval benchmarking framework comparing traditional keyword search with semantic vector search. Generated embeddings, implemented retrieval pipelines, and evaluated search quality across benchmark datasets.",
    href: "https://github.com/Aditij1207/retrieval-benchmark",
  },
  {
    title: "AI Product Search System",
    stack: "Python, FastAPI, LangChain, Langflow, SQL",
    description: "Developed AI-powered search infrastructure integrating LLMs, vector retrieval, and backend APIs.",
  },
  {
    title: "Shopping Cart Management System",
    stack: "Java, JavaFX, JDBC, Oracle SQL, PL/SQL",
    description: "Full-stack shopping cart platform supporting user/admin roles, order management, and database-driven workflows.",
    href: "https://github.com/Aditij1207/Shopping-cart-management",
  },
  {
    title: "Grape Disease Detection",
    stack: "CNN, FastAPI, Python",
    description: "Deep-learning-powered grape disease classification and prediction system with API support.",
  },
  {
    title: "Website for People with Hearing Impairments",
    stack: "HTML, CSS, JavaScript, Speech-to-Text API, Text-to-Speech API",
    description: "Accessibility-focused communication platform with multilingual speech capabilities.",
  },
];

export const patent = {
  title: "Real-Time Emergency and Traffic Control System",
  status: "Patent Filed",
  description:
    "Designed a smart traffic management solution integrating emergency vehicle prioritization, live traffic monitoring, and dynamic signal control.",
};

export const certificates = [
  "AWS Cloud Practitioner Essentials",
  "Deloitte Data Analytics Virtual Experience",
  "Google AI Fundamentals",
  "Generative AI for Everyone",
  "Digital Marketing: Customer Engagement Strategy",
  "Digital Marketing: Platforms, Data and Technologies",
  "Marketing in a Digital World",
];
