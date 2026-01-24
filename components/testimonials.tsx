"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Neuromancers transformed my coding journey. The mentorship and competitive programming culture here helped me crack my dream internship at Google.",
    author: "Priya Sharma",
    role: "SDE @ Google",
    batch: "Batch of 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    quote:
      "The ML workshops and projects at Neuromancers gave me hands-on experience that directly contributed to my research at CMU.",
    author: "Rahul Verma",
    role: "ML Researcher @ CMU",
    batch: "Batch of 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    quote:
      "From a complete beginner to contributing to major open source projects, Neuromancers provided the perfect environment to grow.",
    author: "Ananya Patel",
    role: "Open Source Engineer @ Mozilla",
    batch: "Batch of 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Words from Our <span className="text-primary">Alumni</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Hear from our members who have gone on to achieve great things.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="relative p-6 rounded-2xl bg-background border border-border"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed pr-12">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.batch}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
