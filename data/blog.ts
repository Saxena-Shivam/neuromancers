export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  //   {
  //     id: 1,
  //     title: "A Deep Dive into Transformer Architecture",
  //     excerpt:
  //       "Understanding the attention mechanism and how transformers revolutionized NLP and beyond.",
  //     author: "Priya Sharma",
  //     authorImage:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  //     authorRole: "ML Strategist",
  //     date: "Jan 20, 2026",
  //     readTime: "12 min read",
  //     category: "Machine Learning",
  //     tags: ["Transformers", "NLP", "Deep Learning"],
  //     image:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Mastering Dynamic Programming: A Pattern-Based Approach",
  //     excerpt:
  //       "Learn the 5 essential DP patterns that will help you solve 90% of DP problems in competitive programming.",
  //     author: "Rahul Verma",
  //     authorImage:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  //     authorRole: "CP Expert",
  //     date: "Jan 15, 2026",
  //     readTime: "15 min read",
  //     category: "Competitive Programming",
  //     tags: ["DP", "Algorithms", "Problem Solving"],
  //     image:
  //       "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=400&fit=crop",
  //   },
  // Add more blog posts here
];

export const blogCategories = [
  "All",
  "Machine Learning",
  "Competitive Programming",
  "Web Development",
  "Systems Programming",
  "Blockchain",
  "Data Science",
];
