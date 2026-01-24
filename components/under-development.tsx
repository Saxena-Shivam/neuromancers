"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";

interface UnderDevelopmentProps {
  pageName?: string;
  description?: string;
}

export default function UnderDevelopment({
  pageName = "This Page",
  description = "We're working hard to bring you something amazing. Check back soon!",
}: UnderDevelopmentProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30"
              >
                <Construction className="h-12 w-12 text-primary" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl"
              />
            </div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            {pageName} <span className="text-primary">Under Development</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Features Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            <div className="rounded-xl bg-card border border-border p-4">
              <Code2 className="h-6 w-6 text-primary mb-2 mx-auto" />
              <p className="text-sm font-semibold">New Features</p>
              <p className="text-xs text-muted-foreground mt-1">
                Exciting updates
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <Construction className="h-6 w-6 text-primary mb-2 mx-auto" />
              <p className="text-sm font-semibold">In Progress</p>
              <p className="text-xs text-muted-foreground mt-1">
                Currently building
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Code2 className="h-6 w-6 text-primary mb-2 mx-auto" />
              </motion.div>
              <p className="text-sm font-semibold">Coming Soon</p>
              <p className="text-xs text-muted-foreground mt-1">Stay tuned</p>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-green text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
