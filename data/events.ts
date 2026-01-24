export interface Event {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  type: string;
  status: "upcoming" | "ongoing" | "past";
  image: string;
  highlights?: string[];
  registrationLink?: string;
}

// Keep events in chronological order (oldest first). Append new events at the end only.
export const events: Event[] = [
  {
    id: 1,
    title: "Winter Hackathon",
    description:
      "24-hour hackathon bringing together creative minds to build innovative projects.",
    date: "2024",
    time: "24 Hours",
    location: "IIT Bhubaneswar",
    attendees: 250,
    type: "Hackathon",
    status: "past",
    image: "/events/winter_hackathon.png",
    highlights: [
      "24-hour marathon",
      "Cross-disciplinary teams",
      "Prize pool",
      "Mentorship available",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity Workshop",
    description:
      "Comprehensive workshop on cybersecurity fundamentals, ethical hacking, and secure coding practices.",
    date: "2024",
    time: "Full Day",
    location: "CS Lab, IIT Bhubaneswar",
    attendees: 100,
    type: "Workshop",
    status: "past",
    image: "/events/cyber_security.png",
    highlights: [
      "Hands-on labs",
      "Security best practices",
      "Industry experts",
      "Certificate of participation",
    ],
  },
  {
    id: 3,
    title: "Road to ICPC",
    description:
      "Training and preparation series to help students prepare for competitive programming contests.",
    date: "2024",
    time: "Various Sessions",
    location: "IIT Bhubaneswar",
    attendees: 150,
    type: "Workshop",
    status: "past",
    image: "/events/roadtoicpc.png",
    highlights: [
      "Expert coaching",
      "Problem solving sessions",
      "Contest preparation",
    ],
  },
  {
    id: 4,
    title: "ICPC Contest",
    description:
      "Local ICPC contest organized by Neuromancers to identify and nurture competitive programming talent.",
    date: "2024",
    time: "Full Day",
    location: "IIT Bhubaneswar",
    attendees: 80,
    type: "Contest",
    status: "past",
    image: "/events/icpc_contest.png",
    highlights: [
      "Multiple divisions",
      "Hands-on experience",
      "Network with competitors",
    ],
  },
  {
    id: 5,
    title: "TechZephyr Contest",
    description:
      "Annual programming competition featuring diverse problem sets across multiple domains.",
    date: "2024",
    time: "Evening",
    location: "Online",
    attendees: 200,
    type: "Contest",
    status: "past",
    image: "/events/techzephy_contest.png",
    highlights: [
      "Multiple categories",
      "Prizes and recognition",
      "Building competitive spirit",
    ],
  },
  {
    id: 6,
    title: "GC Coding Relay Event",
    description:
      "Team-based programming challenge in relay format: 4 members, 1 hour each, strict handovers, final demo.",
    fullDescription:
      "The GC Coding Relay Event is a unique team-based programming challenge featuring relay coding format. Each of the 4 team members gets exactly 1 hour to code, debug, and document their progress before handing over to the next teammate. Teams must follow strict handover rules with no interaction between members. The event concludes with a practical demonstration of the solution.",
    date: "Feb 2026",
    time: "4 Hours",
    location: "IIT Bhubaneswar",
    attendees: 8,
    type: "Contest",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    highlights: [
      "Relay Format: 1 hour per coder",
      "Team Size: 4 members per team",
      "2 teams per branch",
      "Practical demonstration required",
      "No teammate interaction allowed",
      "100 points judging criteria",
    ],
  },
  {
    id: 7,
    title: "GC CP Challenge",
    description:
      "Division-based CP contest with Codeforces rating brackets (1600+ and <1600), points for your branch.",
    fullDescription:
      "The GC Competitive Programming Challenge is a skill-based programming competition divided into two contests based on Codeforces rating. Participants in the High-Rated division (1600+ rating) compete with max 5 nominations per branch, while the Low-Rated division (below 1600) is open to all. Solve algorithmic problems of varying difficulty, with points awarded based on correctness, efficiency, and completion time.",
    date: "Feb 2026",
    time: "3-4 Hours",
    location: "Online & On-site",
    attendees: 100,
    type: "Contest",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    highlights: [
      "Division A: Codeforces 1600+",
      "Division B: Codeforces <1600",
      "Ranking by speed and accuracy",
      "Top 3 finishers per contest",
      "Participation points awarded",
      "Valid Codeforces profile required",
    ],
  },
];
