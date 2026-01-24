"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Linkedin,
  MapPin,
  Building2,
  GraduationCap,
  Search,
  Quote,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Loading from "./loading"; // Import the Loading component

interface Alumni {
  id: number;
  name: string;
  image: string;
  batch: string;
  branch: string;
  role: string;
  company: string;
  location: string;
  linkedin: string;
  achievements: string[];
  testimonial?: string;
}

const alumniData: Alumni[] = [
  {
    id: 1,
    name: "Aditya Krishnan",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    batch: "2020",
    branch: "CSE",
    role: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    linkedin: "https://linkedin.com/in/adityakrishnan",
    achievements: ["ICPC World Finalist 2019", "GSoC Mentor", "10+ Patents"],
    testimonial:
      "Neuromancers gave me the foundation to compete at the highest levels. The mentorship and collaborative environment shaped my career.",
  },
  {
    id: 2,
    name: "Meera Iyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    batch: "2019",
    branch: "CSE",
    role: "ML Research Scientist",
    company: "Meta AI",
    location: "Menlo Park, CA",
    linkedin: "https://linkedin.com/in/meeraiyer",
    achievements: ["NeurIPS Best Paper 2023", "PhD Stanford", "50+ Citations"],
    testimonial:
      "The research culture at Neuromancers ignited my passion for AI. Forever grateful for the foundation it provided.",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    batch: "2021",
    branch: "ECE",
    role: "Founding Engineer",
    company: "Startup (YC W23)",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/rohansharma",
    achievements: ["YC Founder", "Ex-Uber", "Forbes 30 Under 30"],
  },
  {
    id: 4,
    name: "Priyanka Das",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    batch: "2020",
    branch: "CSE",
    role: "Staff Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/priyankadas",
    achievements: [
      "Azure Core Team",
      "Speaker at MS Build",
      "Open Source Leader",
    ],
  },
  {
    id: 5,
    name: "Varun Reddy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    batch: "2018",
    branch: "CSE",
    role: "Engineering Manager",
    company: "Amazon",
    location: "Seattle, WA",
    linkedin: "https://linkedin.com/in/varunreddy",
    achievements: ["AWS Lambda Team", "Ex-Goldman Sachs", "15+ Team Lead"],
  },
  {
    id: 6,
    name: "Ananya Gupta",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    batch: "2022",
    branch: "CSE",
    role: "Quant Developer",
    company: "Jane Street",
    location: "New York, NY",
    linkedin: "https://linkedin.com/in/ananyagupta",
    achievements: ["ICPC Regionals Gold", "Ex-Tower Research", "IMO Silver"],
  },
  {
    id: 7,
    name: "Karthik Menon",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    batch: "2019",
    branch: "EE",
    role: "Senior Data Scientist",
    company: "Netflix",
    location: "Los Gatos, CA",
    linkedin: "https://linkedin.com/in/karthikmenon",
    achievements: ["Recommendation Systems", "PhD UCLA", "20+ Publications"],
  },
  {
    id: 8,
    name: "Shreya Patel",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    batch: "2021",
    branch: "CSE",
    role: "Product Manager",
    company: "Stripe",
    location: "Dublin, Ireland",
    linkedin: "https://linkedin.com/in/shreyapatel",
    achievements: ["Ex-Razorpay", "IIM-A MBA", "Payments Expert"],
  },
];

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const searchParams = useSearchParams(); // Use useSearchParams

  const batches = [
    "All",
    ...Array.from(new Set(alumniData.map((a) => a.batch))).sort(
      (a, b) => Number(b) - Number(a),
    ),
  ];

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch =
      selectedBatch === "All" || alumni.batch === selectedBatch;
    return matchesSearch && matchesBatch;
  });

  const featuredAlumni = alumniData.filter((a) => a.testimonial);

  return (
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
              Alumni Network
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-primary">Legacy</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Meet our alumni who are now leading at top tech companies and
              research institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredAlumni.length > 0 && (
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              What Our Alumni Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredAlumni.map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="relative rounded-2xl bg-background border border-border p-6"
                >
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic mb-6">
                    &quot;{alumni.testimonial}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={alumni.image || "/placeholder.svg"}
                      alt={alumni.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      crossOrigin="anonymous"
                    />
                    <div>
                      <p className="font-semibold">{alumni.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {alumni.role} at {alumni.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alumni..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {batches.map((batch) => (
                <button
                  key={batch}
                  onClick={() => setSelectedBatch(batch)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedBatch === batch
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                >
                  {batch === "All" ? "All Batches" : `Batch ${batch}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredAlumni.length === 0 ? (
            <div className="text-center py-16">
              <GraduationCap className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No alumni found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAlumni.map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.05 * index }}
                  className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={alumni.image || "/placeholder.svg"}
                      alt={alumni.name}
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors"
                      crossOrigin="anonymous"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {alumni.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Batch {alumni.batch} | {alumni.branch}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{alumni.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {alumni.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{alumni.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {alumni.achievements.slice(0, 2).map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="secondary"
                        className="text-xs"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Are You a Neuromancer Alumni?
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay connected with your batchmates and help mentor the next
              generation of programmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alumni@neuromancers-iitbbs.org"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green text-background font-medium hover:opacity-90 transition-opacity"
              >
                Update Your Profile
              </a>
              <a
                href="https://linkedin.com/company/neuromancers-iitbbs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Join LinkedIn Group
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
