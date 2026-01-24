"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 z-40"
          aria-label="Go to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
