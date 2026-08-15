// Single source of truth for the site.
// Voice: builder-casual, first person, no em dashes. Content from the current
// résumé + a deep read of github.com/1ordo. Locations corrected, links only to
// public repos.

export interface NavItem {
  id: string;
  index: string;
  label: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  points: string[];
  stack: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "Open source" | "In development" | "Private";
  stars?: number;
  href?: string;
  liveHref?: string;
  image?: string;
  imageAlt?: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

export interface BeyondItem {
  icon: string;
  text: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  detail: string;
}

export const personal = {
  name: "Mohamed Yousry",
  firstName: "Mohamed",
  lastName: "Yousry",
  handle: "lordo",
  role: "Lead Engineer",
  discipline: "Backend & AI",
  location: "Cairo, Egypt",
  locationShort: "Cairo, EG",
  currentNow: "Lead Engineer at Drive-Nova (UAE)",
  currentPrev: "Before that: Pillar (Fractional CTO), MyAly.AI, TotallyNot",
  resumeUrl: "/Mohamed_Yousry_Resume.pdf",
  github: "https://github.com/1ordo",
  githubHandle: "1ordo",
  linkedin: "https://www.linkedin.com/in/notlordo/",
  email: "mohamedyousry.work.dev@gmail.com",
  phone: "+201003204931",
};

export const nav: NavItem[] = [
  { id: "work", index: "01", label: "Work" },
  { id: "projects", index: "02", label: "Projects" },
  { id: "stack", index: "03", label: "Stack" },
  { id: "beyond", index: "04", label: "Beyond" },
  { id: "contact", index: "05", label: "Contact" },
];

export const roles: Role[] = [
  {
    company: "Drive-Nova",
    title: "Lead Engineer",
    location: "Hybrid, UAE",
    period: "Apr 2026 - Present",
    current: true,
    summary:
      "Drive-Nova is an engineering agency serving major players in the tyre trade across Europe and the UAE. I lead engineering across their platforms, end to end.",
    points: [
      "Act as lead engineer for a leading European tyre group's entire digital operation: their B2B commerce platform (Magento), public websites, internal platforms, and the email infrastructure underneath it all.",
      "Built the platform and the AI behind TyresOnline (UAE), and I keep both running in production.",
      "Architecting the AI side of the roadmap: agent-to-agent (A2A) architecture and multi-agent frameworks like AG2.",
    ],
    stack: ["Architecture", "A2A", "AG2", "Magento", "Integrations"],
  },
  {
    company: "Pillar Construction Group",
    title: "Fractional CTO & Lead AI / Backend Engineer",
    location: "Remote, USA",
    period: "May 2025 - Present",
    current: true,
    summary: "Built a full-stack AI procurement platform from the architecture up to production.",
    points: [
      "Designed and shipped an AI procurement platform that aggregates 50,000+ federal (SAM.gov) and SLED (HigherGov) opportunities, with multi-schema PostgreSQL, semantic search over embeddings, and an event-driven processing system.",
      "Built ELI, a conversational assistant with 24 procurement tools (opportunity search, document Q&A, board management) on GPT-5 / GPT-4o, plus a 4-tier matching pipeline and a PaddleOCR pass for scanned government forms.",
      "Architected the microservices: FastAPI, Celery with 6 specialized workers, Redis, and Supabase. Shipped the whole production stack on Docker, Coolify, Nginx, Cloudflare, GitHub Actions, and Sentry.",
    ],
    stack: ["FastAPI", "Celery", "Redis", "Supabase", "pgvector", "PaddleOCR", "Docker"],
  },
  {
    company: "MyAly.AI",
    title: "AI Engineer & Automation Developer",
    location: "Remote, USA",
    period: "Feb 2025 - Apr 2025",
    current: false,
    summary: "Owned payments and infrastructure for an AI marketing product.",
    points: [
      "Built and maintained the Stripe stack: subscriptions, webhooks, and secure checkout.",
      "Wired frontend flows into the backend APIs and tightened up performance along the way.",
      "Set up and ran the infrastructure: domains, DNS, Nginx, and Git workflows.",
    ],
    stack: ["Stripe", "FastAPI", "Nginx", "DNS", "Git"],
  },
  {
    company: "TotallyNot",
    title: "Co-founder & AI Engineer",
    location: "Remote, USA",
    period: "Sep 2024 - Mar 2025",
    current: false,
    summary: "Co-founded a company building local, on-device AI.",
    points: [
      "Led the AI features for a local, on-device AI product built with Flutter.",
      "Designed and deployed the scalable backend on FastAPI, PostgreSQL, and Docker.",
      "Set up the CI/CD pipelines that kept deploys boring (which is the goal).",
    ],
    stack: ["On-device AI", "Flutter", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    company: "Freelance",
    title: "Developer",
    location: "Remote",
    period: "Jan 2020 - Present",
    current: true,
    summary: "The long-running thread. Shipping production systems end to end since 2020.",
    points: [
      "Architected and deployed large systems end to end: AI pipelines, OCR systems, mobile apps, web platforms, and automation bots.",
      "Built OCR and document-processing systems that handle preprocessing, extraction, validation, and clean structured output.",
      "Ran the full infrastructure lifecycle: cloud setup, provisioning, Dockerized deploys, CI/CD, DNS, and production monitoring.",
    ],
    stack: ["OCR", "AI pipelines", "Cloud", "Docker", "CI/CD", "Monitoring"],
  },
];

export const projects: Project[] = [
  {
    name: "Roundtable",
    tagline: "Five subscriptions and still nothing to watch",
    description:
      "A self-hosted film and series tracker that learns your taste from what you actually do, knows which of your services carries a title in your country, and tracks shows by the episode. Watch nights blend the whole group's taste into one queue and let everyone vote on the night. The built-in assistant researches instead of guessing, and an MCP server lets your own AI read your watch history. Runs on your machine; nothing leaves it.",
    stack: ["FastAPI", "React", "PostgreSQL", "pgvector", "TMDB", "MCP", "Docker"],
    status: "Open source",
    href: "https://github.com/1ordo/roundtable",
    // liveHref: add the live site link here when it's up.
    image: "/roundtable-home.webp",
    imageAlt: "The Roundtable home page: personalised shelves of films and series",
  },
  {
    name: "strix-halo-unsloth",
    tagline: "Getting ML to run on hardware it shouldn't",
    description:
      "The setup that actually gets PyTorch and Unsloth fine-tuning running on an AMD Strix Halo (gfx1151) with 128GB of unified memory. I tracked down the kernel regression and the exact ROCm versions that quietly break every other guide, then shipped prebuilt containers so nobody else loses the weekend.",
    stack: ["PyTorch", "ROCm 7.1", "Unsloth", "LoRA", "Podman", "Linux"],
    status: "Open source",
    stars: 7,
    href: "https://github.com/1ordo/strix-halo-unsloth",
  },
  {
    name: "CCloudS",
    tagline: "Cloud storage that can't read your files",
    description:
      "A self-hosted Drive where the server only ever holds ciphertext. Your keys are derived in the browser with Argon2id, sharing seals a file key to the recipient's X25519 key, and nothing sensitive leaves your machine in the clear. Dump the database and all you get is base64.",
    stack: ["Next.js", "FastAPI", "libsodium", "PostgreSQL", "MinIO"],
    status: "Open source",
    href: "https://github.com/1ordo/CCloudS",
  },
  {
    name: "PorterOPS",
    tagline: "A2A multi-agent, built for real",
    description:
      "A multi-agent ops platform where a LangGraph DAG runs department agents over an async agent-to-agent message bus and streams the whole thing to a React dashboard over SSE. This is the A2A architecture from my resume, as working code you can read.",
    stack: ["LangGraph", "FastAPI", "React", "SSE", "SQLite"],
    status: "Open source",
    href: "https://github.com/1ordo/PorterOPS",
  },
  {
    name: "illiterate",
    tagline: "A grammar engine that checks the AI",
    description:
      "A privacy-first grammar checker and rewriter in five languages. It runs LanguageTool's rules first, then an LLM, then validates the LLM against itself to kill the errors AI usually introduces. Flutter app, FastAPI backend, encrypted end to end.",
    stack: ["Flutter", "FastAPI", "LanguageTool", "Docker"],
    status: "Open source",
    href: "https://github.com/1ordo/illiterate",
  },
  {
    name: "CSphere",
    tagline: "A VS Code style IDE run by 11 agents",
    description:
      "An IDE driven by 11 orchestrated MCP agents for coding, debugging, testing, and deploy, plus a free community marketplace for tools and extensions. Local-first by design: SQLite and ONNX embeddings run right inside Electron, with optional Supabase sync.",
    stack: ["Electron", "TypeScript", "FastAPI", "SQLite", "ONNX", "MCP"],
    status: "In development",
  },
  {
    name: "paperprobe",
    tagline: "AI risk-of-bias for systematic reviews",
    description:
      "A multi-agent tool that scores research papers against the COSMIN risk-of-bias checklist, all ten boxes, with verbatim evidence quotes you can click straight to the right page in the source PDF. Built for real systematic reviews, not demos.",
    stack: ["Python", "FastAPI", "RAG", "Embeddings"],
    status: "In development",
    href: "https://github.com/1ordo/paperprobe",
  },
  {
    name: "n8n-instagram-scraper",
    tagline: "Reels in, transcripts out",
    description:
      "An Instagram Reels pipeline that downloads in full quality, strips metadata so it stays under the radar, transcribes with Whisper, ships to S3, and runs the whole flow through n8n. FastAPI backend, one-command Docker deploy.",
    stack: ["FastAPI", "Whisper", "n8n", "Docker", "AWS S3"],
    status: "Open source",
    stars: 4,
    href: "https://github.com/1ordo/n8n-instagram-scrapper-with-transcription",
  },
  {
    name: "RAG-Medical-Assistant",
    tagline: "Clinical decision support",
    description:
      "Pairs ML clustering with Llama 3.2 or Gemini to read patient data and surface severity, estimated cost, and triage priority. Runs fully local with Ollama or in the cloud, your call.",
    stack: ["Python", "scikit-learn", "Ollama", "Gemini", "Streamlit"],
    status: "Open source",
    href: "https://github.com/1ordo/RAG-Medical-Assistant",
  },
  {
    name: "Pixeld",
    tagline: "Photos into pixel-art guides",
    description:
      "Turns any image into a numbered pixel-art pattern for cross-stitch, Perler beads, or LEGO. Color clustering, optional dithering, multiple export formats. The fun one.",
    stack: ["Python", "FastAPI", "Streamlit"],
    status: "Open source",
    stars: 1,
    href: "https://github.com/1ordo/Pixeld",
  },
];

// Smaller public things that don't need a whole card.
export const moreProjects: { name: string; blurb: string; href: string }[] = [
  {
    name: "AI-Playground",
    blurb: "Load, quantize, and convert any LLM across GGUF, ONNX, and SafeTensors, then chat with it.",
    href: "https://github.com/1ordo/AI-Playground",
  },
  {
    name: "AOE-Discord-bot",
    blurb: "Server bot with auto-translation, Sheets-backed quotes, roles, polls, and moderation.",
    href: "https://github.com/1ordo/AOE-Discord-bot",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    icon: "code",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "C++", "C", "C#", "PHP", "Bash"],
  },
  {
    label: "Backend & APIs",
    icon: "server",
    items: ["FastAPI", "Flask", "Django", "Next.js", "REST", "WebSockets / SSE", "Celery", "Pydantic", "Stripe"],
  },
  {
    label: "AI & ML",
    icon: "brain",
    items: [
      "LLMs",
      "LangChain",
      "LangGraph",
      "Multi-agent (AG2, MCP, FastMCP)",
      "Llama.cpp",
      "PyTorch",
      "TensorFlow",
      "Fine-tuning (LoRA, Unsloth)",
      "Whisper",
      "PaddleOCR",
      "Embeddings (pgvector)",
      "ONNX Runtime",
      "RAG",
    ],
  },
  {
    label: "Databases",
    icon: "database",
    items: ["PostgreSQL", "Supabase", "Redis", "MySQL", "SQLite"],
  },
  {
    label: "Mobile & Frontend",
    icon: "device",
    items: [
      "Flutter",
      "React",
      "Next.js",
      "Electron",
      "HTML",
      "CSS",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    label: "DevOps & Infra",
    icon: "terminal",
    items: ["Docker", "Nginx", "Caddy", "Linux", "Cloudflare", "GitHub Actions", "ROCm", "Sentry", "Self-hosting"],
  },
  {
    label: "Bots & Embedded",
    icon: "cpu",
    items: ["Discord.py", "Telegram bots", "Arduino", "IoT", "n8n", "Steam API"],
  },
];

export const beyond: BeyondItem[] = [
  {
    icon: "cpu",
    text: "I run ML on hardware it was never meant for, then write down what finally worked so the next person doesn't lose a weekend.",
  },
  {
    icon: "code",
    text: "Most of what I build ends up on GitHub. Strangers' repos have saved me too many times not to return the favor.",
  },
  {
    icon: "server",
    text: "I self-host nearly everything, including this site's backups. The cloud is fine. I just sleep better when the outage is my fault.",
  },
  {
    icon: "wave",
    text: "Off the clock it's music production and video editing. I edit better than I film, and yes, I can burn garlic in under two seconds.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "New Mansoura University",
    degree: "Bachelor's",
    field: "AI Engineering",
    period: "2021 - 2026",
    detail: "GPA 3.3 / 4.0",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: "mail" },
  { label: "GitHub", value: `github.com/${personal.githubHandle}`, href: personal.github, icon: "github" },
  { label: "LinkedIn", value: "in/notlordo", href: personal.linkedin, icon: "linkedin" },
  { label: "Résumé", value: "Download the PDF", href: personal.resumeUrl, icon: "document" },
  { label: "Where", value: personal.location, href: "https://maps.google.com/?q=Cairo,Egypt", icon: "pin" },
];
