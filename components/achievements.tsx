"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, FileCode, GitBranch, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "ICPC Regionals 2025",
    description: "Top 10 finish in Asia West Region",
    year: "2025",
    type: "Competition",
  },
  {
    icon: Award,
    title: "Smart India Hackathon",
    description: "Winners in Software Edition",
    year: "2025",
    type: "Hackathon",
  },
  {
    icon: Medal,
    title: "Google Summer of Code",
    description: "15+ students selected across organizations",
    year: "2024-25",
    type: "Open Source",
  },
  {
    icon: FileCode,
    title: "ACM SIGMOD Research",
    description: "Paper accepted at premier database conference",
    year: "2024",
    type: "Research",
  },
  {
    icon: GitBranch,
    title: "Major League Hacking",
    description: "Best Use of Cloud Technology Award",
    year: "2024",
    type: "Hackathon",
  },
  {
    icon: Star,
    title: "CodeChef Snackdown",
    description: "All India Rank 23 in Finals",
    year: "2024",
    type: "Competition",
  },
];

const stats = [
  { value: "50+", label: "Competition Wins" },
  { value: "25+", label: "GSoC Selections" },
  { value: "10+", label: "Research Papers" },
  { value: "100+", label: "Open Source PRs" },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Our <span className="text-primary">Milestones</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Celebrating excellence in competitions, research, and open source
            contributions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-1/2" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group`}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          {achievement.type} • {achievement.year}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mt-3">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
