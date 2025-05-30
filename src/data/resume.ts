export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  discord: string;
  phone: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalSkill {
  name: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack?: string[];
  link?: string;
}

export interface Hobby {
  name: string;
  icon?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  personalSkills: PersonalSkill[];
  skills: Skill[];
  education: Education[];
  experiences: Experience[];
  projects: string[];
  hobbies: Hobby[];
  unmentiondSkills: { skill: string; emoji: string; level: number }[];
  availableForHire: boolean;
  resumeUrl: string;
}

// All your personal information can be customized here
const resumeData: ResumeData = {
  personalInfo: {
    name: "Mohamed Yousry",
    title: "AI Engineer - Fullstack Developer",
    location: "Al Manşū̄rah, Dakahlia, Egypt",
    email: "mohamedyousry.work.dev@gmail.com",
    discord: "NotLordo",
    phone: "+201003204931",
  },
  personalSkills: [
    { name: "Problem-Solving" },
    { name: "Team Leadership" },
    { name: "Fast learning" },
    { name: "Always on-time" },
    { name: "Adaptability" },
    { name: "Honest" },
  ],
  skills: [
    {
      category: "Programming & AI Development",
      items: [
        "Python",
        "C#",
        "JavaScript",
        "C++",
        "C",
        "FastAPI",
        "express.js",
        "Flask",
        "Django",
        "PyTorch",
        "TensorFlow",
        "ONNX",
        "Llama.cpp",
        "LangChain",
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "JSON",
        "API Development",
        "Web Services",
        "ORM Libraries",
        "Cryptography",
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        "CI/CD",
        "Git",
        "Docker",
        "Nginx",
        "Server Hosting",
        "System Architecture",
      ],
    },
    {
      category: "Data Science",
      items: [
        "Apache Spark",
        "Data Processing",
        "ETL Pipelines",
        "Machine Learning Integration",
      ],
    },
    {
      category: "Automation & Embedded Systems",
      items: [
        "Discord Bots",
        "Telegram Bots",
        "Facebook Bots",
        "Arduino",
        "IoT Development",
        "n8n",
        "orange"
      ],
    },
    {
      category: "Web & Mobile",
      items: ["Flutter", "JavaScript", "HTML", "CSS", "next.js"],
    },
  ],
  education: [
    {
      degree: "Bachelor's in AI Engineering",
      institution: "New Mansoura University",
      location: "Egypt",
      year: "2026",
      description:
        "Studying AI Engineering with a focus on machine learning, deep learning, and software development.",
    },
    {
      degree: "IELTS Academic",
      institution: "British Council",
      location: "Egypt",
      year: "2022",
      description: "C1 Level",
    },
  ],
  experiences: [
    {
      title: "AI/ML Engineer",
      company: "MyAly.AI",
      location: "Remote",
      period: "April 2025 – Present",
      description: [
        "Engineered AI-powered marketing agents using OpenAI and workflow automation with n8n in addition to FastAPI.",
        "Built and maintained scalable backend services with FastAPI, Supabase, and secure API integrations",
        "Developed internal tools for user authentication, Design Engine and more.",
        "Implemented improvements to deployment, version control, and developer collaboration workflows",
        "Collaborated closely with the CEO and cross-functional teams to reinforce security and infrastructure resilience",
      ],
    },
    {
      title: "Co-founder & AI Engineer",
      company: "TotallyNot",
      location: "",
      period: "",
      description: [
        "Led the development of AI-driven features for the Local on-device AI",
        "Designed and deployed scalable backend architectures using FastAPI, PostgreSQL, and Docker",
        "Implemented CI/CD pipelines for seamless deployment and improved system stability",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Backend & Automation",
      location: "",
      period: "",
      description: [
        "Built high-performance APIs with optimized queries for fast response times",
        "Designed custom automation solutions for various clients",
        "Developed multiple Discord bots for automation, AI integration, and queue management",
      ],
    },
  ],
  projects: [
    "Won multiple AI & technology innovation competitions, including those powered by Arizona State University",
    "Developed AI chatbots and automation tools serving thousands of active users",
    "Built Discord & Telegram bots handling real-time data processing & automation",
    "Created full-stack web applications with user authentication, data processing, and AI integration",
    "Developed IoT-based projects using Arduino and sensor automation",
    "Implemented Nginx & Docker-based deployments for scalable systems",
  ],
  hobbies: [
    { name: "Music", icon: "music" },
    { name: "Editing", icon: "image" },
    { name: "Programming", icon: "code" },
    { name: "Tech", icon: "computer" },
  ],
  unmentiondSkills: [
    { skill: "UI/UX Design basics", emoji: "🎨", level: 3 },
    { skill: "Project Management", emoji: "📊", level: 4 },
    { skill: "Burn garlic at 2 seconds", emoji: "🧄", level: 5 },
    {
      skill: "Better at conducting videos than making videos",
      emoji: "🎬",
      level: 2,
    },
    { skill: "Finding bugs in production", emoji: "🐛", level: 4 },
  ],
  availableForHire: true,
  resumeUrl:
    "https://drive.google.com/file/d/18TygdnntT9pW-BPGOwFcGFLawCUC-76v/view",
};

export default resumeData;
