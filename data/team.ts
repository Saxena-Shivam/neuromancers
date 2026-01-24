import { type TeamMember } from "@/components/team-member-card";

export const secretary: TeamMember = {
  id: 14,
  name: "Suvansh Sharma",
  role: "Secretary",
  domain: "Competitive Programming (CP) Machine Learning / AI",
  image: "/profile/WhatsApp Image 2026-01-24 at 22.47.28 - Suvansh Sharma.jpeg",
  email: "23ee01058@iitbbs.ac.in",
  linkedin: "https://www.linkedin.com/in/suvansh-sharma-3516a4227/",
  github: "https://github.com/Suvansh297",
  bio: "Electrical Engineering undergrad and Secretary of Neuromancers. Tech stack revolves around Machine Learning, Deep Learning, and heavy problem-solving.",
};

export const governors: TeamMember[] = [
  {
    id: 13,
    name: "Aaditya Sharma",
    role: "Governor",
    domain:
      "Competitive Programming (CP) Machine Learning / AI System Design Generative AI",
    image: "/profile/new_pfp - Aaditya Sharma.jpeg",
    email: "23ee01001@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/aaditya-sharma-061bb2255/",
    github: "https://github.com/aadityasharma1206",
    bio: "Third-year EE student interested in machine learning, data science, and intelligent systems. Committed to building impactful, scalable solutions.",
  },
  {
    id: 15,
    name: "Unmilan Das",
    role: "Governor",
    domain: "Competitive Programming (CP) Machine Learning / AI Generative AI",
    image: "/profile/WhatsApp Image 2026-01-24 at 23.02.10 - Unmilan.jpeg",
    email: "unmilan17@gmail.com",
    linkedin: "https://www.linkedin.com/in/unmilan-das-b07905295/",
    github: "https://github.com/unmilan17",
    bio: "Passionate about problem solving, data structures, and applied machine learning. Specialist on Codeforces.",
  },
];

export interface DomainLeadGroup {
  category: string;
  members: TeamMember[];
}

export const domainLeads: DomainLeadGroup[] = [
  {
    category: "Competitive Programming",
    members: [
      {
        id: 1,
        name: "Utkarsh Verma",
        role: "CP Expert",
        domain: "Competitive Programming (CP) Web Development",
        image: "/profile/IMG-20231112-WA0012 - UTKARSH VERMA.jpg",
        email: "utkarshver11@gmail.com",
        linkedin: "https://www.linkedin.com/in/utkarsh-verma-819115316/",
        github: "https://github.com/Vishnu-Utkarsh",
        bio: "ECE '28, Expert @CodeForces, Knight @LeetCode",
      },
    ],
  },
  {
    category: "Web Development",
    members: [
      {
        id: 2,
        name: "Hetvi Patel",
        role: "Web Development",
        domain: "Competitive Programming (CP) Web Development",
        image: "/profile/Pic - Hetvi Patel.jpeg",
        email: "24ce01068@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/hetvi-patel-ab6a40323/",
        github: "https://github.com/hetvi168",
        bio: "Coding enthusiast focused on building efficient solutions in web development and DSA.",
      },
      {
        id: 5,
        name: "Prashant Sharma",
        role: "Full Stack Developer",
        domain:
          "Competitive Programming (CP) Web Development;Machine Learning / AI",
        image: "/profile/IMG_20260124_192349 - PRASHANT SHARMA.jpg",
        email: "24cs01058@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/prashant-sharma-61b0b8338",
        github: "https://github.com/prashant-2006",
        bio: "Proficient in full-stack development with React.js, Next.js. Passionate about building real-time applications.",
      },
    ],
  },
  {
    category: "App Development & System Design",
    members: [
      {
        id: 4,
        name: "Kadambari Siddarth Subramanyam",
        role: "Full Stack & Systems Lead",
        domain:
          "Competitive Programming (CP) Web Development App Development System Design",
        image:
          "/profile/Screenshot_2025-05-12-17-30-05-94_6012fa4d4ddec268fc5c7112cbb265e7_Original - KADAMBARI SIDDARTH SUBRAMANYAM.jpeg",
        email: "23cs01027@iitbbs.ac.in",
        linkedin:
          "https://www.linkedin.com/in/siddarth-kadambari-8838612ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/K-Siddarth",
        bio: "Interested in web and app development with expertise in system design.",
      },
      {
        id: 10,
        name: "Devesh Kumar",
        role: "System Design Expert",
        domain: "Competitive Programming (CP) System Design",
        image: "/profile/1513 - Devesh kumar.jpg",
        email: "devesh006kumar@gmail.com",
        linkedin: "https://www.linkedin.com/in/devesh-kumar-81aa73317/",
        github: "https://github.com/Devu2501",
        bio: "Focused on learning DSA and competitive programming.",
      },
    ],
  },
  {
    category: "Machine Learning & Data Science",
    members: [
      {
        id: 3,
        name: "Anmol Kamath",
        role: "ML & CP Lead",
        domain:
          "Competitive Programming (CP) Machine Learning / AI Data Science System Design Generative AI",
        image: "/profile/Anmol_Formal_Picture - KAMATH ANMOL.jpeg",
        email: "24ee01038@iitbbs.ac.in",
        linkedin:
          "https://www.linkedin.com/in/anmol-kamath-343838322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/anmolkamath22",
        bio: "Deep passion for Machine Learning and AI, applying knowledge across multiple domains.",
      },
      {
        id: 9,
        name: "Pathya Taya",
        role: "Member",
        domain: "Competitive Programming (CP) Machine Learning / AI",
        image: "/profile/photophoto - Pathya Taya.jpeg",
        email: "pathyataya@gmail.com",
        linkedin: "https://www.linkedin.com/in/pathya",
        github: "https://github.com/Pathya-Taya",
        bio: "Third year EE interested in Robotics and ML. Knight on LeetCode. Joining Tech Mahindra as SDE Intern.",
      },
      {
        id: 6,
        name: "JupudI Adarsh",
        role: "ML Enthusiast",
        domain:
          "Competitive Programming (CP);Web Development;Machine Learning / AI",
        image: "/profile/Adarsh_Photo - JUPUDI ADARSH.jpeg",
        email: "24CS01031@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/adarsh-jupudi/",
        github: "https://github.com/adarshjupudi",
        bio: "Passionate about competitive programming, machine learning, and OOP project implementation.",
      },
    ],
  },
];

export const members: TeamMember[] = [
  {
    id: 7,
    name: "Yelikatte Bharath",
    role: "Member",
    domain:
      "Competitive Programming (CP) Web Development;Machine Learning / AI",
    image: "/profile/photo - Bharath Yelikatte.jpeg",
    email: "25cs01081@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/bharath-yelikatte-41943a377/",
    github: "https://github.com/Bharath-Yelikatte",
    bio: "Strong interest in backend development and system design. Building scalable applications.",
  },
  {
    id: 8,
    name: "NANUVALA SRI ADHITHYA",
    role: "Member",
    domain:
      "Competitive Programming (CP) Web Development;Machine Learning / AI Data Science;System Design",
    image: "/profile/profileimage - NANUVALA SRI ADHITHYA.jpeg",
    email: "25cs01055@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/sri-adhithya-n-51b90439b/",
    github: "https://github.com/Adhi4127",
    bio: "First year CSE doing DSA and learning MERN STACK with competitive programming.",
  },
  {
    id: 11,
    name: "Abhishek Singh",
    role: "Member",
    domain: "Competitive Programming (CP) Web Development",
    image: "/profile/Photos - Abhishek Singh.jpeg",
    email: "25cs01002@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-84b83739b/",
    github: "https://github.com/AbhishekSingh0705",
    bio: "Focused on DSA in Java and Web Development with efficient, user-friendly applications.",
  },
  {
    id: 12,
    name: "Ashmit Chowdhury",
    role: "Member",
    domain: "Competitive Programming (CP)",
    image: "/profile/IMG-20251001-WA0121 - ASHMIT CHOWDHURY.jpg",
    email: "24cs01010@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/ashmit-chowdhury",
    github: "https://github.com/baguvix7",
    bio: "Avid competitive programmer.",
  },
  {
    id: 16,
    name: "Jayaditya Sahu",
    role: "ML & Data Science Lead",
    domain:
      "Web Development App Development Machine Learning / AI Data Science",
    image:
      "/profile/WhatsApp Image 2026-01-24 at 8.37.00 PM - Jayaditya Sahu.jpeg",
    email: "23CS01025@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/jayaditya-sahu-0b1a922b4/",
    github: "https://github.com/Jayadityas",
    bio: "Third year CSE with experience in MERN, Data analysis, ML. National Semi-finalist in Flipkart Grid 7.0.",
  },
];

export const alumni: TeamMember[] = [];

export const teamDomains = [
  "All",
  "Competitive Programming (CP)",
  "Web Development",
  "Machine Learning / AI",
  "App Development",
  "System Design",
  "Data Science",
  "Generative AI",
];
