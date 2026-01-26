"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[64px] lg:top-[80px] left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green origin-left z-50 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
      style={{ scaleX }}
    />
  );
}
