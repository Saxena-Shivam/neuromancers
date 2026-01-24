"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  Users,
  GitBranch,
  FileText,
  ExternalLink,
  Calendar,
  Medal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievements, achievementStats } from "@/data/achievements";

function getTypeColor(type: string) {
  const colors: Record<string, string> = {
    Contest: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    "Open Source": "bg-green-500/10 text-green-500 border-green-500/20",
    Research: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    Competition: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    CP: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    Fellowship: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    Recognition: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return colors[type] || "bg-primary/10 text-primary border-primary/20";
}

export default function AchievementsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Achievements
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-primary">Victories</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A chronicle of excellence in competitions, research, and
              open-source contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievementStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {achievements.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="relative">
              {/* Year Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * yearIndex }}
                className="sticky top-24 z-10 mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold">
                  <Calendar className="h-4 w-4" />
                  {yearGroup.year}
                </div>
              </motion.div>

              {/* Timeline Items */}
              <div className="relative pl-8 lg:pl-12 border-l-2 border-border ml-4 pb-12">
                {yearGroup.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * (yearIndex + index) }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[calc(2rem+5px)] lg:-left-[calc(3rem+5px)] w-3 h-3 rounded-full bg-primary" />

                    {/* Card */}
                    <div className="rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge
                            variant="outline"
                            className={getTypeColor(item.type)}
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>

                      {item.team && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.team.map((member) => (
                            <span
                              key={member}
                              className="px-2 py-1 rounded-full bg-secondary text-xs text-secondary-foreground"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Be Part of Our Next Victory
            </h2>
            <p className="text-muted-foreground mb-8">
              Join Neuromancers and add your achievements to our growing list of
              accomplishments.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
            >
              <a href="/join">
                Join Us
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
