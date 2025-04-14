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
  unmentiondSkills: string[];
  availableForHire: boolean;
  resumeUrl: string;
}

// All your personal information can be customized here
const resumeData: ResumeData = {
  personalInfo: {
    name: "Mohamed Yousry",
    title: "AI Engineer",
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
    { name: "Honest" }
  ],
  skills: [
    {
      category: "Programming & AI Development",
      items: ["Python", "C#", "JavaScript", "C++", "C", "FastAPI", "Flask", "Django", "PyTorch", "TensorFlow", "ONNX", "Llama.cpp", "LangChain"]
    },
    {
      category: "Backend & Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "JSON", "API Development", "Web Services", "ORM Libraries", "Cryptography"]
    },
    {
      category: "DevOps & Infrastructure",
      items: ["CI/CD", "Git", "Docker", "Nginx", "Server Hosting", "System Architecture"]
    },
    {
      category: "Data Science",
      items: ["Apache Spark", "Data Processing", "ETL Pipelines", "Machine Learning Integration"]
    },
    {
      category: "Automation & Embedded Systems",
      items: ["Discord Bots", "Telegram Bots", "Facebook Bots", "Arduino", "IoT Development"]
    },
    {
      category: "Web & Mobile",
      items: ["Flutter", "JavaScript", "HTML", "CSS"]
    }
  ],
  education: [
    {
      degree: "Bachelor's in AI Engineering",
      institution: "New Mansoura University",
      location: "Egypt",
      year: "2026",
      description: "Studying AI Engineering with a focus on machine learning, deep learning, and software development."
    }
  ],
  experiences: [
    {
      title: "Co-founder & AI Engineer",
      company: "TotallyNot",
      location: "",
      period: "",
      description: [
        "Led the development of AI-driven features for the Local on-device AI",
        "Designed and deployed scalable backend architectures using FastAPI, PostgreSQL, and Docker",
        "Implemented CI/CD pipelines for seamless deployment and improved system stability"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Backend & Automation",
      location: "",
      period: "",
      description: [
        "Built high-performance APIs with optimized queries for fast response times",
        "Designed custom automation solutions for various clients",
        "Developed multiple Discord bots for automation, AI integration, and queue management"
      ]
    }
  ],
  projects: [
    "Won multiple AI & technology innovation competitions, including those powered by Arizona State University",
    "Developed AI chatbots and automation tools serving thousands of active users",
    "Built Discord & Telegram bots handling real-time data processing & automation",
    "Created full-stack web applications with user authentication, data processing, and AI integration",
    "Developed IoT-based projects using Arduino and sensor automation",
    "Implemented Nginx & Docker-based deployments for scalable systems"
  ],
  hobbies: [
    { name: "Reading", icon: "book" },
    { name: "Photography", icon: "camera" },
    { name: "Programming", icon: "code" },
    { name: "Hiking", icon: "hiking" },
  ],
  unmentiondSkills: [
    "UI/UX Design basics",
    "Technical Writing",
    "Project Management",
    "Agile Methodologies",
    "Public Speaking"
  ],
  availableForHire: true,
  resumeUrl: "https://drive.google.com/file/d/18TygdnntT9pW-BPGOwFcGFLawCUC-76v/view"
};

export default resumeData;