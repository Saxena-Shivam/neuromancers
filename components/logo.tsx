"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  imageSrc?: string;
}

export function Logo({
  className = "",
  size = "md",
  imageSrc = "/logo.jpeg",
}: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: "text-lg" },
    md: { width: 40, height: 40, text: "text-xl" },
    lg: { width: 56, height: 56, text: "text-2xl" },
  };

  const { width, height, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {imageSrc ? (
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: `${width}px`, height: `${height}px` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={imageSrc}
            alt="Neuromancers Logo"
            width={width}
            height={height}
            className="drop-shadow-[0_0_8px_var(--neon-cyan)] object-contain"
            priority
          />
        </motion.div>
      ) : (
        <svg
          width={width}
          height={height}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_var(--neon-cyan)]"
        >
          {/* Brain outline */}
          <motion.path
            d="M32 8C20 8 12 18 12 28C12 38 18 44 18 48C18 52 22 56 32 56C42 56 46 52 46 48C46 44 52 38 52 28C52 18 44 8 32 8Z"
            stroke="var(--neon-cyan)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Neural connections */}
          <motion.circle
            cx="24"
            cy="24"
            r="3"
            fill="var(--neon-green)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.circle
            cx="40"
            cy="24"
            r="3"
            fill="var(--neon-green)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
          <motion.circle
            cx="32"
            cy="32"
            r="4"
            fill="var(--neon-cyan)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
          <motion.circle
            cx="26"
            cy="40"
            r="3"
            fill="var(--neon-blue)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
          <motion.circle
            cx="38"
            cy="40"
            r="3"
            fill="var(--neon-blue)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
          {/* Connection lines */}
          <motion.line
            x1="24"
            y1="24"
            x2="32"
            y2="32"
            stroke="var(--neon-cyan)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <motion.line
            x1="40"
            y1="24"
            x2="32"
            y2="32"
            stroke="var(--neon-cyan)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          />
          <motion.line
            x1="32"
            y1="32"
            x2="26"
            y2="40"
            stroke="var(--neon-green)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
          <motion.line
            x1="32"
            y1="32"
            x2="38"
            y2="40"
            stroke="var(--neon-green)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          />
          {/* Code brackets */}
          <motion.text
            x="16"
            y="34"
            fill="var(--neon-cyan)"
            fontSize="12"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {"<"}
          </motion.text>
          <motion.text
            x="44"
            y="34"
            fill="var(--neon-cyan)"
            fontSize="12"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {"/>"}
          </motion.text>
        </svg>
      )}
      <div className="flex flex-col">
        <span
          className={`font-bold ${text} tracking-tight bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent`}
        >
          NEUROMANCERS
        </span>
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
          IIT Bhubaneswar
        </span>
      </div>
    </motion.div>
  );
}
