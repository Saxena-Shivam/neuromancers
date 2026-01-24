"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorImage: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "A Deep Dive into Transformer Architecture",
    excerpt:
      "Understanding the attention mechanism and how transformers revolutionized NLP and beyond.",
    author: "Priya Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    authorRole: "ML Strategist",
    date: "Jan 20, 2026",
    readTime: "12 min read",
    category: "Machine Learning",
    tags: ["Transformers", "NLP", "Deep Learning"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Dynamic Programming: A Pattern-Based Approach",
    excerpt:
      "Learn the 5 essential DP patterns that will help you solve 90% of DP problems in competitive programming.",
    author: "Rahul Verma",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    authorRole: "CP Expert",
    date: "Jan 15, 2026",
    readTime: "15 min read",
    category: "Competitive Programming",
    tags: ["DP", "Algorithms", "Problem Solving"],
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=400&fit=crop",
  },
  // {
  //   id: 3,
  //   title: "Building Scalable APIs with Next.js 16 and Edge Functions",
  //   excerpt:
  //     "A comprehensive guide to creating performant and scalable APIs using the latest Next.js features.",
  //   author: "Amit Kumar",
  //   authorImage:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  //   authorRole: "Dev Strategist",
  //   date: "Jan 10, 2026",
  //   readTime: "10 min read",
  //   category: "Web Development",
  //   tags: ["Next.js", "APIs", "Edge Functions"],
  //   image:
  //     "https://images.unsplash.com/photo-1555066931433-6461ffad8d80?w=800&h=400&fit=crop",
  // },
  // {
  //   id: 4,
  //   title: "Introduction to Rust for Systems Programming",
  //   excerpt:
  //     "Why Rust is becoming the go-to language for systems programming and how to get started.",
  //   author: "Sneha Patel",
  //   authorImage:
  //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  //   authorRole: "Systems Lead",
  //   date: "Jan 5, 2026",
  //   readTime: "8 min read",
  //   category: "Systems Programming",
  //   tags: ["Rust", "Systems", "Memory Safety"],
  //   image:
  //     "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
  // },
  // {
  //   id: 5,
  //   title: "Building Your First Smart Contract on Ethereum",
  //   excerpt:
  //     "Step-by-step tutorial on writing, testing, and deploying Solidity smart contracts.",
  //   author: "Vikram Singh",
  //   authorImage:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  //   authorRole: "Blockchain Lead",
  //   date: "Dec 28, 2025",
  //   readTime: "14 min read",
  //   category: "Blockchain",
  //   tags: ["Ethereum", "Solidity", "Web3"],
  //   image:
  //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
  // },
  // {
  //   id: 6,
  //   title: "React Native vs Flutter: A 2026 Comparison",
  //   excerpt:
  //     "An in-depth comparison of the two most popular cross-platform mobile development frameworks.",
  //   author: "Neha Gupta",
  //   authorImage:
  //     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  //   authorRole: "App Dev Strategist",
  //   date: "Dec 20, 2025",
  //   readTime: "11 min read",
  //   category: "App Development",
  //   tags: ["React Native", "Flutter", "Mobile"],
  //   image:
  //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
  // },
];

const categories = [
  "All",
  "Machine Learning",
  "Competitive Programming",
  "Web Development",
  "App Development",
  "Cyber Security",
  "Game development",
];

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    "Machine Learning": "bg-purple-500/10 text-purple-500 border-purple-500/20",
    "Competitive Programming":
      "bg-green-500/10 text-green-500 border-green-500/20",
    "Web Development": "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "App Development": "bg-orange-500/10 text-orange-500 border-orange-500/20",
    "Systems Programming": "bg-red-500/10 text-red-500 border-red-500/20",
    Blockchain: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  };
  return colors[category] || "bg-primary/10 text-primary border-primary/20";
}

function Loading() {
  return null;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const searchParams = useSearchParams();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-20" ref={ref}>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Blog
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Technical <span className="text-primary">Insights</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Explore articles, tutorials, and insights from our members on
                cutting-edge technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:border-primary/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="p-8 lg:p-12 bg-card flex flex-col justify-center">
                    <Badge className="w-fit mb-4">Featured</Badge>
                    <Badge
                      variant="outline"
                      className={`w-fit mb-4 ${getCategoryColor(
                        featuredPost.category,
                      )}`}
                    >
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <Image
                        src={featuredPost.authorImage || "/placeholder.svg"}
                        alt={featuredPost.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                        crossOrigin="anonymous"
                      />
                      <div>
                        <p className="font-medium text-sm">
                          {featuredPost.author}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{featuredPost.date}</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="mt-8 w-fit group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Tag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter(
                    (post) => !post.featured || selectedCategory !== "All",
                  )
                  .map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1 * index }}
                      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          crossOrigin="anonymous"
                        />
                        <Badge
                          className={`absolute top-4 left-4 ${getCategoryColor(
                            post.category,
                          )}`}
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              width={32}
                              height={32}
                              className="rounded-full"
                              crossOrigin="anonymous"
                            />
                            <span className="text-sm text-muted-foreground">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-2xl lg:text-3xl font-bold">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get the latest articles and tech insights delivered to your
                inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="sm:w-72 bg-background"
                />
                <Button className="bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
