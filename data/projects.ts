export interface ProjectContributor {
  name: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  domain: string;
  github: string;
  live?: string;
  stars: number;
  forks: number;
  contributors: ProjectContributor[];
  featured: boolean;
  year: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CodeArena",
    description:
      "Real-time competitive programming platform with live contests, leaderboards, and integrated code execution engine.",
    longDescription:
      "A comprehensive platform for hosting and participating in programming contests with features like real-time submissions, automated judging, and detailed analytics.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    domain: "Web Development",
    github: "https://github.com/neuromancers/codearena",
    live: "https://codearena.neuromancers.in",
    stars: 234,
    forks: 45,
    contributors: [
      {
        name: "Rohan",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Ananya",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Karan",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: true,
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "ML Pipeline Framework",
    description:
      "End-to-end machine learning pipeline for model training, evaluation, hyperparameter tuning, and deployment.",
    techStack: ["Python", "PyTorch", "FastAPI", "Kubernetes", "MLflow"],
    domain: "Machine Learning",
    github: "https://github.com/neuromancers/ml-pipeline",
    stars: 189,
    forks: 38,
    contributors: [
      {
        name: "Aditya",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Priya",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Campus Connect",
    description:
      "Social platform for IIT Bhubaneswar students with events, resources, lost & found, and networking features.",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
    domain: "App Development",
    github: "https://github.com/neuromancers/campus-connect",
    live: "https://connect.iitbbs.ac.in",
    stars: 156,
    forks: 28,
    contributors: [
      {
        name: "Meera",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Rahul",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: 4,
    title: "BlockVote",
    description:
      "Decentralized voting system built on Ethereum with zero-knowledge proofs for complete voter privacy.",
    techStack: ["Solidity", "React", "Web3.js", "IPFS", "Hardhat"],
    domain: "Blockchain",
    github: "https://github.com/neuromancers/blockvote",
    stars: 98,
    forks: 22,
    contributors: [
      {
        name: "Vikram",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: false,
    year: "2024",
  },
  {
    id: 5,
    title: "CP Templates",
    description:
      "Comprehensive collection of competitive programming templates in C++, Python, and Java with explanations.",
    techStack: ["C++", "Python", "Java", "Algorithms"],
    domain: "Competitive Programming",
    github: "https://github.com/neuromancers/cp-templates",
    stars: 312,
    forks: 156,
    contributors: [
      {
        name: "Karan",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Ishaan",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "Neural Style Transfer",
    description:
      "Real-time neural style transfer application using deep learning for artistic image transformation.",
    techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
    domain: "Machine Learning",
    github: "https://github.com/neuromancers/neural-style",
    live: "https://style.neuromancers.in",
    stars: 87,
    forks: 19,
    contributors: [
      {
        name: "Priya",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: false,
    year: "2023",
  },
  {
    id: 7,
    title: "DevBoard",
    description:
      "Developer dashboard aggregating GitHub, GitLab, and Bitbucket activities with productivity insights.",
    techStack: ["Next.js", "GraphQL", "Prisma", "Tailwind CSS"],
    domain: "Web Development",
    github: "https://github.com/neuromancers/devboard",
    stars: 145,
    forks: 32,
    contributors: [
      {
        name: "Rohan",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      },
      {
        name: "Ananya",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: false,
    year: "2024",
  },
  {
    id: 8,
    title: "OS Kernel",
    description:
      "Educational operating system kernel with basic memory management, process scheduling, and file system.",
    techStack: ["C", "Assembly", "Make", "QEMU"],
    domain: "Systems",
    github: "https://github.com/neuromancers/mini-os",
    stars: 76,
    forks: 14,
    contributors: [
      {
        name: "Abhishek",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=50&h=50&fit=crop&crop=face",
      },
    ],
    featured: false,
    year: "2024",
  },
];

export const projectDomains = [
  "All",
  "Web Development",
  "Machine Learning",
  "App Development",
  "Competitive Programming",
  "Blockchain",
  "Systems",
];
