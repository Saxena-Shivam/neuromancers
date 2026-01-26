"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { blogPosts, blogCategories } from "@/data/blog";

const categories = blogCategories;

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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const searchParams = useSearchParams();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/under-development");
  };

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
            {blogPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Tag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No articles available yet
                </h3>
                <p className="text-muted-foreground">
                  Check back soon for technical insights and tutorials from our
                  members.
                </p>
              </motion.div>
            ) : filteredPosts.length === 0 ? (
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
              <form
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                onSubmit={handleSubscribe}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="sm:w-72 bg-background"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90 cursor-pointer"
                >
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
