"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      "You can contact us through the contact form on our website or reach out to us via email. Visit our connect page for all communication channels.",
  },
  {
    question: "Are there any prerequisites to participate?",
    answer:
      "No specific prerequisites! Whether you're a beginner or an experienced coder, we have opportunities for everyone to learn and grow.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
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
          <p className="text-gray-400 text-lg">
            Have questions? We have answers.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 bg-gray-900/50"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Didn't find your answer?</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
