import { type TeamMember } from "@/components/team-member-card";

export const secretary: TeamMember = {
  id: 1,
  name: "Suvansh Sharma",
  role: "Secretary",
  domain: "Competitive Programming (CP) Machine Learning / AI",
  image:
    "/profile/optimized/WhatsApp Image 2026-01-24 at 22.47.28 - Suvansh Sharma.webp",
  email: "23ee01058@iitbbs.ac.in",
  linkedin: "https://www.linkedin.com/in/suvansh-sharma-3516a4227/",
  github: "https://github.com/Suvansh297",
  bio: "Electrical Engineering undergrad and Secretary of Neuromancers. Tech stack revolves around Machine Learning, Deep Learning, and heavy problem-solving.",
};

export const governors: TeamMember[] = [
  {
    id: 2,
    name: "Aaditya Sharma",
    role: "Governor",
    domain:
      "Competitive Programming (CP) Machine Learning / AI System Design Gen AI",
    image: "/profile/optimized/new_pfp - Aaditya Sharma.webp",
    email: "23ee01001@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/aaditya-sharma-061bb2255/",
    github: "https://github.com/aadityasharma1206",
    bio: "Third-year EE student interested in machine learning, data science, and intelligent systems. Committed to building impactful, scalable solutions.",
  },
  {
    id: 3,
    name: "Unmilan Das",
    role: "Governor",
    domain: "Competitive Programming (CP) Machine Learning / AI Generative AI",
    image:
      "/profile/optimized/WhatsApp Image 2026-01-24 at 23.02.10 - Unmilan.webp",
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
        id: 4,
        name: "Ravilisetty Makarandh",
        role: "Member",
        domain: "Competitive Programming (CP)",
        image:
          "/profile/optimized/IMG_20260125_145326 - RAVILISETTY MAKARANDH.webp",
        email: "22cs01002@iitbbs.ac.in",
        linkedin:
          "https://www.linkedin.com/in/ravilisetty-makarandh-3105322a8/",
        github: "https://github.com/rmak05",
        bio: "Qualified for ICPC India Regional with strong expertise in competitive programming.",
      },
      {
        id: 5,
        name: "Avirat Joshi",
        role: "Member",
        domain: "Competitive Programming (CP) System Design",
        image: "/profile/optimized/Avirat Joshi - Avirat Joshi.webp",
        email: "23cs01073@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/avirat-joshi",
        github: "https://github.com/avirat2211",
        bio: "Third-year CSE student working on Go and C++ projects in systems, networking, and performance-focused development.",
      },
      {
        id: 6,
        name: "Utkarsh Verma",
        role: "Member",
        domain: "Competitive Programming (CP) Web Development",
        image: "/profile/optimized/IMG-20231112-WA0012 - UTKARSH VERMA.webp",
        email: "utkarshver11@gmail.com",
        linkedin: "https://www.linkedin.com/in/utkarsh-verma-819115316/",
        github: "https://github.com/Vishnu-Utkarsh",
        bio: "ECE '28, Expert @CodeForces, Knight @LeetCode",
      },

      {
        id: 7,
        name: "Dabhi Vishwas Kamleshbhai",
        role: "Member",
        domain:
          "Competitive Programming (CP) Machine Learning / AI Data Science",
        image: "/profile/optimized/Vishwas Dabhi - vishwas dabhi.webp",
        email: "23cs01015@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/vishwas-dabhi/",
        github: "https://github.com/Vishwasdabhi",
        bio: "Competitive programmer skilled in DSA and OOP, focused on efficient and scalable solutions.",
      },
    ],
  },
  {
    category: "App Development ",
    members: [
      {
        id: 8,
        name: "Ayush Agrawal",
        role: "Governor (2024-2025)",
        domain:
          "Competitive Programming (CP) Web Development App Development System Design",
        image: "/profile/optimized/my_pic - AYUSH AGRAWAL.webp",
        email: "ayushagrawalgdbh@gmail.com",
        linkedin: "https://www.linkedin.com/in/ayush07agrawal/",
        github: "https://github.com/ayush07agrawal",
        bio: "Interested in competitive programming, web and app development, and building strong programming fundamentals.",
      },
      {
        id: 9,
        name: "Kadambari Siddarth Subramanyam",
        role: "Member",
        domain:
          "Competitive Programming (CP) Web Development App Development System Design",
        image:
          "/profile/optimized/Screenshot_2025-05-12-17-30-05-94_6012fa4d4ddec268fc5c7112cbb265e7_Original - KADAMBARI SIDDARTH SUBRAMANYAM.webp",
        email: "23cs01027@iitbbs.ac.in",
        linkedin:
          "https://www.linkedin.com/in/siddarth-kadambari-8838612ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/K-Siddarth",
        bio: "Interested in web and app development with expertise in system design.",
      },
    ],
  },
  {
    category: "System Design",
    members: [
      {
        id: 10,
        name: "Devesh Kumar",
        role: "Member",
        domain: "Competitive Programming (CP) System Design",
        image: "/profile/optimized/1513 - Devesh kumar.webp",
        email: "devesh006kumar@gmail.com",
        linkedin: "https://www.linkedin.com/in/devesh-kumar-81aa73317/",
        github: "https://github.com/Devu2501",
        bio: "Focused on learning DSA and competitive programming.",
      },
    ],
  },
  {
    category: "Web Development",
    members: [
      {
        id: 12,
        name: "Hetvi Patel",
        role: "Member",
        domain: "Competitive Programming (CP) Web Development",
        image: "/profile/optimized/Pic - Hetvi Patel.webp",
        email: "24ce01068@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/hetvi-patel-ab6a40323/",
        github: "https://github.com/hetvi168",
        bio: "Coding enthusiast focused on building efficient solutions in web development and DSA.",
      },
      {
        id: 13,
        name: "Prashant Sharma",
        role: "Member",
        domain:
          "Competitive Programming (CP) Web Development;Machine Learning / AI",
        image: "/profile/optimized/IMG_20260124_192349 - PRASHANT SHARMA.webp",
        email: "24cs01058@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/prashant-sharma-61b0b8338",
        github: "https://github.com/prashant-2006",
        bio: "Proficient in full-stack development with React.js, Next.js. Passionate about building real-time applications.",
      },
      {
        id: 14,
        name: "Ashmit Chowdhury",
        role: "Member",
        domain: "Competitive Programming (CP)",
        image: "/profile/optimized/IMG-20251001-WA0121 - ASHMIT CHOWDHURY.webp",
        email: "24cs01010@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/ashmit-chowdhury",
        github: "https://github.com/baguvix7",
        bio: "Avid competitive programmer.",
      },
    ],
  },

  {
    category: "Machine Learning & Data Science",
    members: [
      {
        id: 15,
        name: "Jayaditya Sahu",
        role: "Member",
        domain:
          "Web Development App Development Machine Learning / AI Data Science",
        image:
          "/profile/optimized/WhatsApp Image 2026-01-24 at 8.37.00 PM - Jayaditya Sahu.webp",
        email: "23CS01025@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/jayaditya-sahu-0b1a922b4/",
        github: "https://github.com/Jayadityas",
        bio: "Third year CSE with experience in MERN, Data analysis, ML. National Semi-finalist in Flipkart Grid 7.0.",
      },
      {
        id: 16,
        name: "Pathya Taya",
        role: "Member",
        domain: "Competitive Programming (CP) Machine Learning / AI",
        image: "/profile/optimized/photophoto - Pathya Taya.webp",
        email: "pathyataya@gmail.com",
        linkedin: "https://www.linkedin.com/in/pathya",
        github: "https://github.com/Pathya-Taya",
        bio: "Third year EE interested in Robotics and ML. Knight on LeetCode. Joining Tech Mahindra as SDE Intern.",
      },
      {
        id: 17,
        name: "Anmol Kamath",
        role: "Member",
        domain:
          "Competitive Programming (CP) Machine Learning / AI Data Science System Design Generative AI",
        image: "/profile/optimized/Anmol_Formal_Picture - KAMATH ANMOL.webp",
        email: "24ee01038@iitbbs.ac.in",
        linkedin:
          "https://www.linkedin.com/in/anmol-kamath-343838322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/anmolkamath22",
        bio: "Deep passion for Machine Learning and AI, applying knowledge across multiple domains.",
      },

      {
        id: 18,
        name: "JupudI Adarsh",
        role: "Member",
        domain:
          "Competitive Programming (CP);Web Development;Machine Learning / AI",
        image: "/profile/optimized/Adarsh_Photo - JUPUDI ADARSH.webp",
        email: "24CS01031@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/adarsh-jupudi/",
        github: "https://github.com/adarshjupudi",
        bio: "Passionate about competitive programming, machine learning, and OOP project implementation.",
      },
      {
        id: 19,
        name: "Shashank M N",
        role: "Member",
        domain: "Competitive Programming (CP) Machine Learning / AI",
        image: "/profile/optimized/shashank.webp",
        email: "23cs02010@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/shashank-mn/",
        github: "https://github.com/Shashank-M-N",
        bio: "Engineering student at IIT Bhubaneswar. Curious about tech, problem-solving, and figuring things out one step at a time. Learning, exploring, and growing.",
      },
      {
        id: 20,
        name: "Harshit Maheshwari",
        role: "Member",
        domain: "Competitive Programming (CP) Machine Learning / AI",
        image:
          "/profile/optimized/Harshit Maheshwari - HARSHIT MAHESHWARI.webp",
        email: "23cs02005@iitbbs.ac.in",
        linkedin: "https://www.linkedin.com/in/harshit-maheshwari-8808aa2a9/",
        github: "https://github.com/itsmeanonymous27",
        bio: "Part-time engineer and full-time athlete with interests in competitive programming and machine learning.",
      },
    ],
  },
];

export const members: TeamMember[] = [
  {
    id: 21,
    name: "Yelikatte Bharath",
    role: "Member",
    domain:
      "Competitive Programming (CP) Web Development;Machine Learning / AI",
    image: "/profile/optimized/photo - Bharath Yelikatte.webp",
    email: "25cs01081@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/bharath-yelikatte-41943a377/",
    github: "https://github.com/Bharath-Yelikatte",
    bio: "Strong interest in backend development and system design. Building scalable applications.",
  },
  {
    id: 22,
    name: "NANUVALA SRI ADHITHYA",
    role: "Member",
    domain:
      "Competitive Programming (CP) Web Development;Machine Learning / AI Data Science;System Design",
    image: "/profile/optimized/profileimage - NANUVALA SRI ADHITHYA.webp",
    email: "25cs01055@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/sri-adhithya-n-51b90439b/",
    github: "https://github.com/Adhi4127",
    bio: "First year CSE doing DSA and learning MERN STACK with competitive programming.",
  },
  {
    id: 23,
    name: "Abhishek Singh",
    role: "Member",
    domain: "Competitive Programming (CP) Web Development",
    image: "/profile/optimized/Photos - Abhishek Singh.webp",
    email: "25cs01002@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-84b83739b/",
    github: "https://github.com/AbhishekSingh0705",
    bio: "Focused on DSA in Java and Web Development with efficient, user-friendly applications.",
  },

  {
    id: 24,
    name: "Nanuvala Sri Adhithya",
    role: "Member",
    domain:
      "Competitive Programming (CP) Web Development Machine Learning / AI Data Science System Design",
    image: "/profile/optimized/profileimage - NANUVALA SRI ADHITHYA.webp",
    email: "25cs01055@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/sri-adhithya-nanuvala-51b90439b/",
    github: "https://github.com/Adhi4127",
    bio: "CSE student at IIT Bhubaneswar working on DSA in C++ and exploring web development and competitive programming.",
  },

  {
    id: 25,
    name: "Samay Parmar",
    role: "Member",
    domain: "Competitive Programming (CP) Machine Learning / AI Data Science",
    image: "/profile/optimized/Samay - Samay Parmar.webp",
    email: "25cs01067@iitbbs.ac.in",
    linkedin: "https://www.linkedin.com/in/samay-parmar-6b613238b/",
    github: "https://github.com/SamayParmar",
    bio: "CSE student interested in DSA and exploring AI and machine learning to expand technical knowledge.",
  },

  {
    id: 26,
    name: "Nandyala Sai Keerthi",
    role: "Member",
    domain: "Competitive Programming (CP) Web Development",
    image: "/profile/optimized/Keerthi.webp",
    email: "nsaikeerthi5@gmail.com",
    linkedin: "https://www.linkedin.com/in/nandyala-sai-keerthi-bb6350380",
    github: "https://github.com/nsaikeerthi5",
    bio: "Passionate about programming and problem-solving, constantly improving skills through practice.",
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
