"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is Neuromancers?",
    answer:
      "Neuromancers is the programming society of IIT Bhubaneswar, dedicated to fostering competitive programming skills and innovation among students.",
  },
  {
    question: "How can I join Neuromancers?",
    answer:
      "Members are inducted from the college itself using offline interviews. Keep an eye on our announcements for recruitment drives during the academic year.",
  },
  {
    question: "Do you offer sponsorship opportunities?",
    answer:
      "Yes! We welcome sponsorships from companies and organizations. Check our sponsorship tiers on the /join page or contact us for more details.",
  },
  {
    question: "What events do you organize?",
    answer:
      "We organize competitive programming contests, coding workshops, hackathons, and knowledge-sharing sessions throughout the year.",
  },
  {
    question: "How can I reach out to the team?",
    answer:
      "You can contact us through the contact form on our website or reach out to us via email. Visit our connect or join us page for all communication channels.",
  },
  {
    question: "Are there any prerequisites to participate?",
    answer:
      "No specific prerequisites! Whether you're a beginner or an experienced coder, we have opportunities for everyone to learn and grow.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions? We have answers.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className={`group rounded-xl border border-border/70 bg-card/80 backdrop-blur shadow-lg transition-all duration-300 ${
                  isOpen
                    ? "ring-1 ring-primary/30 shadow-primary/20 translate-y-[-2px]"
                    : "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-left text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <motion.span
                    className="shrink-0 text-primary"
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      className="px-5 pb-5 text-muted-foreground border-t border-border/60 bg-card/70"
                    >
                      <p className="leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Didn't find your answer?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-neon-cyan to-neon-green text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
