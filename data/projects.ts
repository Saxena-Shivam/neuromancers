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
    id: 13,
    title: "General Championship 2024 App",
    description:
      "A comprehensive mobile platform for participants, spectators, and organizers of the General Championship 2024 at IIT Bhubaneswar, featuring real-time leaderboards, event management, and admin controls.",
    longDescription:
      "The General Championship 2024 App is a feature-rich mobile application developed for IIT Bhubaneswar's championship event. The platform serves as a comprehensive hub for all championship-related activities, including secure user authentication, real-time team leaderboards, event scheduling, and dedicated admin panels. Key features include a home page with highlights and news updates from Oracle, an all-teams menu for detailed team statistics, upcoming and past event listings with search functionality, and an admin panel for organizing committee members to manage events and scores. The app utilizes Firebase Realtime Database for instant data synchronization, ensuring all users have access to the latest championship information. Built with React Native and Material-UI, it delivers a seamless experience across different devices.",
    techStack: [
      "React Native",
      "Material-UI",
      "Firebase",
      "JavaScript",
      "Figma",
    ],
    domain: "App Development",
    github: "#",
    live: "https://drive.google.com/file/d/15mRpVcHAev2AVEN8lfmeH7HiHUgd3A3s/view",
    stars: 15,
    forks: 4,
    contributors: [
      {
        name: "Shivam Saxena",
        image: "/profile/optimized/shivam2.webp",
      },
      {
        name: "Kadambari Siddarth Subramanyam",
        image:
          "/profile/optimized/Screenshot_2025-05-12-17-30-05-94_6012fa4d4ddec268fc5c7112cbb265e7_Original - KADAMBARI SIDDARTH SUBRAMANYAM.webp",
      },
    ],
    featured: true,
    year: "2024",
    image: "/project/optimized/gc.webp",
  },
  {
    id: 1,
    title: "AcadSync",
    description:
      "An intelligent platform that generates adaptive study schedules and AI-based question papers.",
    longDescription:
      "AcadSync is designed to transform academic preparation. It combines adaptive scheduling, performance analysis, and smart question generation to help students prepare more effectively. The system dynamically allocates study hours based on topic weightage, difficulty, and past performance using an Exponential Moving Average (EMA) algorithm. It also generates question papers, balancing objective and descriptive questions, ensuring personalized practice for every student. The platform includes dedicated portals for students, teachers, and admins built using modern web technologies.",
    techStack: [
      "TypeScript",
      "MongoDB",
      "Python",
      "Vite",
      "Node.js",
      "Tailwind CSS",
      "OpenAI API",
      "LangChain",
      "Framer Motion",
    ],
    domain: "Web Development",
    github: "#",
    live: "https://acadsync.in",
    stars: 28,
    forks: 24,
    contributors: [
      {
        name: "Shivam Saxena",
        image: "/profile/optimized/shivam2.webp",
      },
    ],
    featured: true,
    year: "2025",
    image: "/project/optimized/acadsync.webp",
  },
  {
    id: 3,
    title: "Request Management System",
    description:
      "A role-based platform enabling requestors and receivers to manage requests with real-time updates, automated reminders, and secure authentication.",
    longDescription:
      "The Request Management System is a fullstack application designed for seamless communication between requestors and receivers. It features secure user registration and login with JWT authentication, role-based dashboards, and a request lifecycle that supports sending, accepting, rejecting, and tracking requests in real-time. Automated email reminders ensure pending requests are not ignored, with support for both Ethereal (testing) and Gmail (production) SMTP. The platform delivers a clean, responsive user experience powered by React and Tailwind CSS, while leveraging Node.js, Express.js, and MongoDB on the backend.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],
    domain: "Web Development",
    github: "https://github.com/Saxena-Shivam/ARC_Task",
    live: "https://arc-woad-kappa.vercel.app/home",
    stars: 67,
    forks: 12,
    contributors: [
      {
        name: "Shivam Saxena",
        image: "/profile/optimized/shivam2.webp",
      },
    ],
    featured: false,
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: 12,
    title: "Interactive Window OS Design",
    description:
      "A web-based interactive desktop environment that simulates a modern OS, featuring multiple mini-apps like Contact, GitHub, Education, and Terminal within a single dynamic interface.",
    longDescription:
      "The Interactive Window OS Design is a creative web application that replicates the feel of a desktop operating system directly in the browser. The platform features draggable and resizable windows, smooth transitions, and app-based components, including Contact, GitHub integration, Education hub, and an interactive Terminal for simple commands. Built with a focus on clean design and user-friendly navigation, the project leverages React, TailwindCSS, and Framer Motion for seamless UI experiences. It showcases how modern web technologies can be combined to create a desktop-like interface for portfolio interaction or productivity tools. The app is also optimized for mobile devices, providing touch-based interactions and a clean responsive layout for smaller screens.",
    techStack: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "Framer Motion",
      "Vercel",
    ],
    domain: "Web Development",
    github: "https://github.com/Saxena-Shivam/",
    live: "https://shivam-portfolio-black-three.vercel.app/",
    stars: 145,
    forks: 31,
    contributors: [
      {
        name: "Shivam Saxena",
        image: "/profile/optimized/shivam2.webp",
      },
    ],
    featured: false,
    year: "2025",
    image: "/project/optimized/image.webp",
  },

  // {
  //   id: 4,
  //   title: "CodeArena",
  //   description:
  //     "Real-time competitive programming platform with live contests, leaderboards, and integrated code execution engine.",
  //   longDescription:
  //     "A comprehensive platform for hosting and participating in programming contests with features like real-time submissions, automated judging, and detailed analytics.",
  //   techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis"],
  //   domain: "Web Development",
  //   github: "https://github.com/neuromancers/codearena",
  //   live: "https://codearena.neuromancers.in",
  //   stars: 234,
  //   forks: 45,
  //   contributors: [
  //     {
  //       name: "Rohan",
  //       image:
  //         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Ananya",
  //       image:
  //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Karan",
  //       image:
  //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: true,
  //   year: "2025",
  //   image:
  //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  // },

  // {
  //   id: 5,
  //   title: "ML Pipeline Framework",
  //   description:
  //     "End-to-end machine learning pipeline for model training, evaluation, hyperparameter tuning, and deployment.",
  //   techStack: ["Python", "PyTorch", "FastAPI", "Kubernetes", "MLflow"],
  //   domain: "Machine Learning",
  //   github: "https://github.com/neuromancers/ml-pipeline",
  //   stars: 189,
  //   forks: 38,
  //   contributors: [
  //     {
  //       name: "Aditya",
  //       image:
  //         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Priya",
  //       image:
  //         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: true,
  //   year: "2024",
  // },
  // {
  //   id: 6,
  //   title: "Campus Connect",
  //   description:
  //     "Social platform for IIT Bhubaneswar students with events, resources, lost & found, and networking features.",
  //   techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
  //   domain: "App Development",
  //   github: "https://github.com/neuromancers/campus-connect",
  //   live: "https://connect.iitbbs.ac.in",
  //   stars: 156,
  //   forks: 28,
  //   contributors: [
  //     {
  //       name: "Meera",
  //       image:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Rahul",
  //       image:
  //         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: true,
  //   year: "2024",
  // },
  // {
  //   id: 7,
  //   title: "BlockVote",
  //   description:
  //     "Decentralized voting system built on Ethereum with zero-knowledge proofs for complete voter privacy.",
  //   techStack: ["Solidity", "React", "Web3.js", "IPFS", "Hardhat"],
  //   domain: "Blockchain",
  //   github: "https://github.com/neuromancers/blockvote",
  //   stars: 98,
  //   forks: 22,
  //   contributors: [
  //     {
  //       name: "Vikram",
  //       image:
  //         "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: false,
  //   year: "2024",
  // },
  // {
  //   id: 8,
  //   title: "CP Templates",
  //   description:
  //     "Comprehensive collection of competitive programming templates in C++, Python, and Java with explanations.",
  //   techStack: ["C++", "Python", "Java", "Algorithms"],
  //   domain: "Competitive Programming",
  //   github: "https://github.com/neuromancers/cp-templates",
  //   stars: 312,
  //   forks: 156,
  //   contributors: [
  //     {
  //       name: "Karan",
  //       image:
  //         "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Ishaan",
  //       image:
  //         "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: false,
  //   year: "2023",
  // },
  // {
  //   id: 9,
  //   title: "Neural Style Transfer",
  //   description:
  //     "Real-time neural style transfer application using deep learning for artistic image transformation.",
  //   techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
  //   domain: "Machine Learning",
  //   github: "https://github.com/neuromancers/neural-style",
  //   live: "https://style.neuromancers.in",
  //   stars: 87,
  //   forks: 19,
  //   contributors: [
  //     {
  //       name: "Priya",
  //       image:
  //         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: false,
  //   year: "2023",
  // },
  // {
  //   id: 10,
  //   title: "DevBoard",
  //   description:
  //     "Developer dashboard aggregating GitHub, GitLab, and Bitbucket activities with productivity insights.",
  //   techStack: ["Next.js", "GraphQL", "Prisma", "Tailwind CSS"],
  //   domain: "Web Development",
  //   github: "https://github.com/neuromancers/devboard",
  //   stars: 145,
  //   forks: 32,
  //   contributors: [
  //     {
  //       name: "Rohan",
  //       image:
  //         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
  //     },
  //     {
  //       name: "Ananya",
  //       image:
  //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: false,
  //   year: "2024",
  // },
  // {
  //   id: 11,
  //   title: "OS Kernel",
  //   description:
  //     "Educational operating system kernel with basic memory management, process scheduling, and file system.",
  //   techStack: ["C", "Assembly", "Make", "QEMU"],
  //   domain: "Systems",
  //   github: "https://github.com/neuromancers/mini-os",
  //   stars: 76,
  //   forks: 14,
  //   contributors: [
  //     {
  //       name: "Abhishek",
  //       image:
  //         "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=50&h=50&fit=crop&crop=face",
  //     },
  //   ],
  //   featured: false,
  //   year: "2024",
  // },
];

export const projectDomains = [
  "All",
  "Web Development",
  "Machine Learning",
  "App Development",
  "OOPS",
  "Game Development",
  "Systems Design",
];
