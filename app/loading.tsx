"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6"
        >
          <Logo className="h-16 w-16 mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
        <p className="mt-4 text-sm text-muted-foreground font-mono">
          Loading...
        </p>
      </div>
    </div>
  );
}
