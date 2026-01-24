"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TeamMemberCard, type TeamMember } from "@/components/team-member-card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

// Team data
const secretary: TeamMember = {
  id: 1,
  name: "Suvansh Sharma",
  role: "Secretary",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  email: "secretary@neuromancers.in",
  linkedin: "https://linkedin.com/in/arjunmehta",
  github: "https://github.com/arjunmehta",
  bio: "Final year CSE student passionate about building scalable systems and fostering a culture of innovation at IIT Bhubaneswar.",
};

const governors: TeamMember[] = [
  {
    id: 2,
    name: "Aditya Sharma",
    role: "Governor",
    domain: "Technical Operations",
    image:
      "https://images.unsplash.com/photo-149479010837-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    email: "sneha@neuromancers.in",
    linkedin: "https://linkedin.com/in/snehareddy",
    github: "https://github.com/snehareddy",
  },
  {
    id: 3,
    name: "Unmilan",
    role: "Governor",
    domain: "Events & Outreach",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "vikram@neuromancers.in",
    linkedin: "https://linkedin.com/in/vikramsingh",
    github: "https://github.com/vikramsingh",
  },
  {
    id: 4,
    name: "Diya Sharma",
    role: "Governor",
    domain: "Member Development",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    email: "diya@neuromancers.in",
    linkedin: "https://linkedin.com/in/diyasharma",
    github: "https://github.com/diyasharma",
  },
];

const domainLeads: { category: string; members: TeamMember[] }[] = [
  {
    category: "Development Strategists",
    members: [
      {
        id: 5,
        name: "Rohan Gupta",
        role: "Web Development Lead",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/rohangupta",
        github: "https://github.com/rohangupta",
      },
      {
        id: 6,
        name: "Ananya Krishnan",
        role: "Backend Lead",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/ananyak",
        github: "https://github.com/ananyak",
      },
    ],
  },
  {
    category: "Machine Learning Strategists",
    members: [
      {
        id: 7,
        name: "Aditya Nair",
        role: "ML Research Lead",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/adityanair",
        github: "https://github.com/adityanair",
      },
      {
        id: 8,
        name: "Priya Menon",
        role: "Deep Learning Lead",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/priyamenon",
        github: "https://github.com/priyamenon",
      },
    ],
  },
  {
    category: "Competitive Programming Experts",
    members: [
      {
        id: 9,
        name: "Karan Joshi",
        role: "CP Head",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/karanjoshi",
        github: "https://github.com/karanjoshi",
      },
      {
        id: 10,
        name: "Ishaan Patel",
        role: "Contest Coordinator",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/ishaanpatel",
        github: "https://github.com/ishaanpatel",
      },
    ],
  },
  {
    category: "App Development Strategists",
    members: [
      {
        id: 11,
        name: "Meera Iyer",
        role: "Mobile Dev Lead",
        image:
          "https://images.unsplash.com/photo-1544005313944-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/meeraiyer",
        github: "https://github.com/meeraiyer",
      },
    ],
  },
  {
    category: "Core CS Strategists",
    members: [
      {
        id: 12,
        name: "Abhishek Roy",
        role: "Systems Lead",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/abhishekroy",
        github: "https://github.com/abhishekroy",
      },
    ],
  },
  {
    category: "UI/UX Designers",
    members: [
      {
        id: 13,
        name: "Nisha Verma",
        role: "Design Lead",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/nishaverma",
      },
    ],
  },
  {
    category: "DevOps & Cloud Team",
    members: [
      {
        id: 14,
        name: "Siddharth Das",
        role: "DevOps Lead",
        image:
          "https://images.unsplash.com/photo-1507591064344-472988babdf2?w=200&h=200&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/siddharthdas",
        github: "https://github.com/siddharthdas",
      },
    ],
  },
];

const members: TeamMember[] = [
  {
    id: 15,
    name: "Aarav Kumar",
    role: "Member",
    domain: "Web Development",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 16,
    name: "Kavya Sharma",
    role: "Member",
    domain: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 17,
    name: "Rahul Nair",
    role: "Member",
    domain: "Competitive Programming",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 18,
    name: "Shruti Patel",
    role: "Member",
    domain: "App Development",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 19,
    name: "Aryan Singh",
    role: "Member",
    domain: "Web Development",
    image:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 20,
    name: "Tanvi Reddy",
    role: "Member",
    domain: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1529626455594-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 21,
    name: "Dev Mehta",
    role: "Member",
    domain: "Systems",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 22,
    name: "Pooja Iyer",
    role: "Member",
    domain: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
  },
];

const alumni: TeamMember[] = [
  {
    id: 23,
    name: "Raj Malhotra",
    role: "Former Secretary",
    domain: "SDE @ Microsoft",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/rajmalhotra",
  },
  {
    id: 24,
    name: "Anita Gupta",
    role: "Former Governor",
    domain: "ML Engineer @ Meta",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/anitagupta",
  },
  {
    id: 25,
    name: "Vivek Sharma",
    role: "Former CP Lead",
    domain: "Researcher @ DeepMind",
    image:
      "https://images.unsplash.com/photo-1480429370612-2c8fde69d9e7?w=200&h=200&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/viveksharma",
  },
  {
    id: 26,
    name: "Priyanka Das",
    role: "Former Web Lead",
    domain: "Staff Engineer @ Stripe",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/priyankadas",
  },
];

const domains = [
  "All",
  "Web Development",
  "Machine Learning",
  "Competitive Programming",
  "App Development",
  "Systems",
  "UI/UX Design",
];

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDomain =
      selectedDomain === "All" || member.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-20" ref={ref}>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Our Team
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Meet the <span className="text-primary">Neuromancers</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                The passionate individuals driving innovation and excellence at
                IIT Bhubaneswar's premier programming society.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Secretary */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Secretary</h2>
              <p className="text-muted-foreground mt-2">
                Leading Neuromancers with vision
              </p>
            </motion.div>
            <div className="max-w-md mx-auto">
              <TeamMemberCard member={secretary} variant="large" />
            </div>
          </div>
        </section>

        {/* Governors */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Governors</h2>
              <p className="text-muted-foreground mt-2">
                The core leadership team
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {governors.map((governor, index) => (
                <TeamMemberCard
                  key={governor.id}
                  member={governor}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Domain Leads */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Domain Leads & Strategists
              </h2>
              <p className="text-muted-foreground mt-2">
                Experts driving excellence in their domains
              </p>
            </motion.div>

            <div className="space-y-12">
              {domainLeads.map((domain, domainIndex) => (
                <motion.div
                  key={domain.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + domainIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-6 text-center">
                    {domain.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {domain.members.map((member, index) => (
                      <TeamMemberCard
                        key={member.id}
                        member={member}
                        index={index}
                        variant="small"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Members</h2>
              <p className="text-muted-foreground mt-2">
                Our talented community
              </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {domains.map((domain) => (
                  <Button
                    key={domain}
                    variant={selectedDomain === domain ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDomain(domain)}
                    className={
                      selectedDomain === domain
                        ? "bg-primary text-primary-foreground"
                        : "border-border"
                    }
                  >
                    {domain}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  variant="small"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section id="alumni" className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Alumni</h2>
              <p className="text-muted-foreground mt-2">
                Where our former members are now
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {alumni.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  variant="small"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
