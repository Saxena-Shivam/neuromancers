"use client";

import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { MotionProps } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

const domains = [
  {
    title: "Competitive Programming",
    description:
      "Master algorithms and data structures through contests on Codeforces, CodeChef, and LeetCode.",
    color: "from-cyan-500 to-blue-500",
    tag: "Algorithms",
    highlight: "2.4k+ problems",
  },
  {
    title: "Machine Learning",
    description:
      "Dive into neural networks, deep learning, and AI applications with hands-on projects.",
    color: "from-green-500 to-emerald-500",
    tag: "Neural Systems",
    highlight: "Model Building",
  },
  {
    title: "Web Development",
    description:
      "Build modern web applications using React, Next.js, and cutting-edge technologies.",
    color: "from-blue-500 to-purple-500",
    tag: "Full Stack",
    highlight: "Production Apps",
  },
  {
    title: "App Development",
    description:
      "Create mobile experiences with Flutter, React Native, and native development.",
    color: "from-pink-500 to-rose-500",
    tag: "Mobile First",
    highlight: "Cross Platform",
  },
  {
    title: "Cyber Security",
    description:
      "Explore operating systems, compilers, databases, and low-level programming.",
    color: "from-orange-500 to-amber-500",
    tag: "Security Ops",
    highlight: "CTF + Audits",
  },
  {
    title: "Game Development",
    description:
      "Build decentralized applications and smart contracts on modern blockchains.",
    color: "from-purple-500 to-indigo-500",
    tag: "Interactive Tech",
    highlight: "Gameplay Systems",
  },
];

const purposeCards = [
  {
    title: "Our Mission",
    description:
      "To create a thriving ecosystem where students can explore, learn, and innovate in technology. We provide resources, mentorship, and opportunities to help every member reach their full potential.",
    tone: "primary",
    badge: "Learning Engine",
    glow: "from-cyan-500 to-blue-500",
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as one of India's premier programming communities, producing world-class developers, researchers, and entrepreneurs who drive technological advancement globally.",
    tone: "accent",
    badge: "Global Impact",
    glow: "from-emerald-500 to-teal-500",
  },
];

function getCardBurstOrigin(index: number, total: number, columns: number) {
  const rows = Math.ceil(total / columns);
  const col = index % columns;
  const row = Math.floor(index / columns);

  const centerCol = (columns - 1) / 2;
  const centerRow = (rows - 1) / 2;

  return {
    x: (centerCol - col) * 280,
    y: (centerRow - row) * 210,
  };
}

type TiltCardProps = MotionProps & {
  className: string;
  children: ReactNode;
  maxTilt?: number;
};

function TiltCard({
  className,
  children,
  maxTilt = 18,
  ...motionProps
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const [isHovering, setIsHovering] = useState(false);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 240,
    damping: 18,
    mass: 0.35,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 240,
    damping: 18,
    mass: 0.35,
  });

  const smoothGlareX = useSpring(glareX, {
    stiffness: 160,
    damping: 22,
    mass: 0.4,
  });
  const smoothGlareY = useSpring(glareY, {
    stiffness: 160,
    damping: 22,
    mass: 0.4,
  });

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${smoothGlareX}% ${smoothGlareY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 14%, transparent 48%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const tiltY = (px - 0.5) * maxTilt * 2;
    const tiltX = (0.5 - py) * maxTilt * 2;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
    setIsHovering(false);
  };

  return (
    <div style={{ perspective: 1300 }}>
      <motion.div
        {...motionProps}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={className}
      >
        <div
          style={{
            transform: "translateZ(22px)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: glareBackground,
            opacity: isHovering ? 1 : 0,
            transition: "opacity 220ms ease",
            transform: "translateZ(30px)",
          }}
        />
      </motion.div>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [gridColumns, setGridColumns] = useState(3);

  useEffect(() => {
    const updateGridColumns = () => {
      if (window.innerWidth >= 1024) {
        setGridColumns(3);
      } else if (window.innerWidth >= 768) {
        setGridColumns(2);
      } else {
        setGridColumns(1);
      }
    };

    updateGridColumns();
    window.addEventListener("resize", updateGridColumns);

    return () => {
      window.removeEventListener("resize", updateGridColumns);
    };
  }, []);

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
          {purposeCards.map((card, index) => (
            <TiltCard
              key={card.title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 28, scale: 0.96 }
              }
              transition={{
                delay: 0.36 + index * 0.12,
                type: "spring",
                stiffness: 92,
                damping: 18,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              maxTilt={16}
              className="group relative overflow-hidden rounded-2xl bg-card/95 border border-border p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`absolute -top-20 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${card.glow} opacity-15 blur-2xl transition-all duration-500 group-hover:opacity-25 group-hover:scale-110`}
              />

              <div
                className="relative mb-5 flex items-center justify-between"
                style={{ transform: "translateZ(18px)" }}
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  {card.badge}
                </span>
                <motion.span
                  animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="h-2 w-2 rounded-full bg-primary/70"
                />
              </div>

              <h3
                style={{ transform: "translateZ(20px)" }}
                className={`text-2xl font-semibold mb-4 ${card.tone === "primary" ? "text-primary" : "text-accent"}`}
              >
                {card.title}
              </h3>
              <p
                style={{ transform: "translateZ(14px)" }}
                className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors"
              >
                {card.description}
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary/40 to-transparent" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </TiltCard>
          ))}
        </motion.div>

        {/* Domain cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const burstOrigin = getCardBurstOrigin(
              index,
              domains.length,
              gridColumns,
            );

            return (
              <TiltCard
                key={domain.title}
                initial={{
                  opacity: 0,
                  x: burstOrigin.x,
                  y: burstOrigin.y,
                  scale: 0.62,
                  rotate: index % 2 === 0 ? -10 : 10,
                  filter: "blur(8px)",
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        x: burstOrigin.x,
                        y: burstOrigin.y,
                        scale: 0.62,
                        rotate: index % 2 === 0 ? -10 : 10,
                        filter: "blur(8px)",
                      }
                }
                transition={{
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 90,
                  damping: 16,
                }}
                whileHover={{ y: -8, scale: 1.015 }}
                maxTilt={18}
                className="group relative overflow-hidden p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div
                  className={`absolute -top-20 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${domain.color} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:scale-110`}
                />

                {/* Animated signal replacing static icon */}
                <div
                  className="relative mb-5 flex items-center justify-between"
                  style={{ transform: "translateZ(18px)" }}
                >
                  <div className="relative h-12 w-12">
                    <motion.div
                      animate={{
                        scale: [1, 1.14, 1],
                        opacity: [0.45, 0.85, 0.45],
                      }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        delay: index * 0.22,
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${domain.color} blur-[1px]`}
                    />
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{
                        duration: 7.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[3px] rounded-full border border-primary/35"
                    />
                    <div className="absolute inset-[11px] rounded-full bg-background/90 border border-border" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-primary/90 font-semibold">
                      {domain.tag}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  style={{ transform: "translateZ(18px)" }}
                  className="text-lg font-semibold text-foreground mb-2"
                >
                  {domain.title}
                </h3>
                <p
                  style={{ transform: "translateZ(12px)" }}
                  className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors"
                >
                  {domain.description}
                </p>

                <div className="mt-5 pt-4 border-t border-border/80 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {domain.highlight}
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                    className="h-1.5 w-10 rounded-full bg-primary/35"
                  />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
