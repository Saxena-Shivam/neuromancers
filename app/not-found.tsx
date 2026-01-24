"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glitch Effect 404 */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none select-none">
              <span className="text-primary relative">
                4
                <span className="absolute inset-0 text-neon-cyan opacity-50 translate-x-1 translate-y-1">
                  4
                </span>
              </span>
              <span className="text-muted-foreground relative">
                0
                <span className="absolute inset-0 text-neon-green opacity-50 -translate-x-1 -translate-y-1">
                  0
                </span>
              </span>
              <span className="text-primary relative">
                4
                <span className="absolute inset-0 text-neon-cyan opacity-50 translate-x-1 translate-y-1">
                  4
                </span>
              </span>
            </h1>
          </div>

          {/* Terminal Style Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Terminal className="h-4 w-4" />
              <span className="text-xs font-mono">neuromancers@iitbbs:~$</span>
            </div>
            <div className="font-mono text-sm text-left space-y-2">
              <p className="text-red-500">
                <span className="text-muted-foreground">Error:</span> Page not found
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Status:</span> 404
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Message:</span> The requested URL was not found on this server.
              </p>
              <p className="text-neon-green mt-4">
                Suggestion: Return to a known location.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Lost in the Matrix?
            </h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Decorative Code Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 font-mono text-xs text-muted-foreground/50 space-y-1"
          >
            <p>{"// TODO: Fix broken link"}</p>
            <p>{"// Author: Neuromancers Dev Team"}</p>
            <p>{"// Last updated: 2026-01-24"}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
