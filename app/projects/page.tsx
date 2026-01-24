"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

interface Project {
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
  contributors: {
    name: string;
    image: string;
  }[];
  featured: boolean;
  year: string;
  image?: string;
}

const projects: Project[] = [
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

const domains = [
  "All",
  "Web Development",
  "Machine Learning",
  "App Development",
  "Competitive Programming",
  "Blockchain",
  "Systems",
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const searchParams = useSearchParams();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain =
      selectedDomain === "All" || project.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

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
              Our Projects
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Building the <span className="text-primary">Future</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore our open source projects and contributions to the
              developer community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
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
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-2xl font-bold mb-8"
            >
              Featured Projects
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Project image */}
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 mb-3"
                        >
                          {project.domain}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Contributors */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.contributors.slice(0, 3).map((contributor) => (
                          <div
                            key={contributor.name}
                            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-card"
                          >
                            <Image
                              src={contributor.image || "/placeholder.svg"}
                              alt={contributor.name}
                              fill
                              className="object-cover"
                              crossOrigin="anonymous"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.contributors.length} contributor
                        {project.contributors.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <GitFork className="h-4 w-4" />
                          <span>{project.forks}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-12 lg:py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold mb-8"
          >
            {featuredProjects.length > 0 ? "More Projects" : "All Projects"}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * index }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="outline" className="text-xs mb-2">
                      {project.domain}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Open Source CTA */}
      <section id="opensource" className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
          >
            <Github className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Contribute to Open Source
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              All our projects are open source. Star our repositories, report
              issues, or contribute code to help us build better tools for
              developers.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
            >
              <a
                href="https://github.com/neuromancers-iitbbs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Visit Our GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
