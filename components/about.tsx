"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Globe, Smartphone, Cpu, Blocks } from "lucide-react";

const domains = [
  {
    icon: Code,
    title: "Competitive Programming",
    description:
      "Master algorithms and data structures through contests on Codeforces, CodeChef, and LeetCode.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Dive into neural networks, deep learning, and AI applications with hands-on projects.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Build modern web applications using React, Next.js, and cutting-edge technologies.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Create mobile experiences with Flutter, React Native, and native development.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cpu,
    title: "Cyber Security",
    description:
      "Explore operating systems, compilers, databases, and low-level programming.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Blocks,
    title: "Game Development",
    description:
      "Build decentralized applications and smart contracts on modern blockchains.",
    color: "from-purple-500 to-indigo-500",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm tracking-wider uppercase"
          >
            About Us
          </motion.span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Empowering the Next Generation of{" "}
            <span className="text-primary">Tech Leaders</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Neuromancers is the official programming society of IIT Bhubaneswar.
            We foster a culture of innovation, learning, and collaboration,
            helping students excel in various domains of computer science and
            technology.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a thriving ecosystem where students can explore, learn,
              and innovate in technology. We provide resources, mentorship, and
              opportunities to help every member reach their full potential.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as one of India's premier programming
              communities, producing world-class developers, researchers, and
              entrepreneurs who drive technological advancement globally.
            </p>
          </div>
        </motion.div>

        {/* Domain cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <domain.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
