export interface Alumni {
  id: number;
  name: string;
  image: string;
  batch: string;
  branch: string;
  role: string;
  company: string;
  location: string;
  linkedin: string;
  achievements: string[];
  testimonial?: string;
}

export const alumniData: Alumni[] = [
  //   {
  //     id: 1,
  //     name: "Aditya Krishnan",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  //     batch: "2020",
  //     branch: "CSE",
  //     role: "Senior Software Engineer",
  //     company: "Google",
  //     location: "Mountain View, CA",
  //     linkedin: "https://linkedin.com/in/adityakrishnan",
  //     achievements: ["ICPC World Finalist 2019", "GSoC Mentor", "10+ Patents"],
  //     testimonial:
  //       "Neuromancers gave me the foundation to compete at the highest levels. The mentorship and collaborative environment shaped my career.",
  //   },
  //   {
  //     id: 2,
  //     name: "Meera Iyer",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  //     batch: "2019",
  //     branch: "CSE",
  //     role: "ML Research Scientist",
  //     company: "Meta AI",
  //     location: "Menlo Park, CA",
  //     linkedin: "https://linkedin.com/in/meeraiyer",
  //     achievements: ["NeurIPS Best Paper 2023", "PhD Stanford", "50+ Citations"],
  //     testimonial:
  //       "The research culture at Neuromancers ignited my passion for AI. Forever grateful for the foundation it provided.",
  //   },
  //   {
  //     id: 3,
  //     name: "Rohan Sharma",
  //     image:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  //     batch: "2021",
  //     branch: "ECE",
  //     role: "Founding Engineer",
  //     company: "Startup (YC W23)",
  //     location: "San Francisco, CA",
  //     linkedin: "https://linkedin.com/in/rohansharma",
  //     achievements: ["YC Founder", "Ex-Uber", "Forbes 30 Under 30"],
  //     testimonial:
  //       "The research culture at Neuromancers ignited my passion for AI. Forever grateful for the foundation it provided.",
  //   },
  //   {
  //     id: 4,
  //     name: "Priyanka Das",
  //     image:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  //     batch: "2020",
  //     branch: "CSE",
  //     role: "Staff Engineer",
  //     company: "Microsoft",
  //     location: "Hyderabad, India",
  //     linkedin: "https://linkedin.com/in/priyankadas",
  //     achievements: [
  //       "Azure Core Team",
  //       "Speaker at MS Build",
  //       "Open Source Leader",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Varun Reddy",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  //     batch: "2018",
  //     branch: "CSE",
  //     role: "Engineering Manager",
  //     company: "Amazon",
  //     location: "Seattle, WA",
  //     linkedin: "https://linkedin.com/in/varunreddy",
  //     achievements: ["AWS Lambda Team", "Ex-Goldman Sachs", "15+ Team Lead"],
  //   },
  //   {
  //     id: 6,
  //     name: "Ananya Gupta",
  //     image:
  //       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  //     batch: "2022",
  //     branch: "CSE",
  //     role: "Quant Developer",
  //     company: "Jane Street",
  //     location: "New York, NY",
  //     linkedin: "https://linkedin.com/in/ananyagupta",
  //     achievements: ["ICPC Regionals Gold", "Ex-Tower Research", "IMO Silver"],
  //   },
  //   {
  //     id: 7,
  //     name: "Karthik Menon",
  //     image:
  //       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  //     batch: "2019",
  //     branch: "EE",
  //     role: "Senior Data Scientist",
  //     company: "Netflix",
  //     location: "Los Gatos, CA",
  //     linkedin: "https://linkedin.com/in/karthikmenon",
  //     achievements: ["Recommendation Systems", "PhD UCLA", "20+ Publications"],
  //   },
  //   {
  //     id: 8,
  //     name: "Shreya Patel",
  //     image:
  //       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  //     batch: "2021",
  //     branch: "CSE",
  //     role: "Product Manager",
  //     company: "Stripe",
  //     location: "Dublin, Ireland",
  //     linkedin: "https://linkedin.com/in/shreyapatel",
  //     achievements: ["Ex-Razorpay", "IIM-A MBA", "Payments Expert"],
  //   },
];
