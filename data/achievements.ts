import {
  Trophy,
  Award,
  Star,
  Users,
  GitBranch,
  FileText,
  Medal,
} from "lucide-react";

export type AchievementIcon =
  | typeof Trophy
  | typeof Award
  | typeof Star
  | typeof Users
  | typeof GitBranch
  | typeof FileText
  | typeof Medal;

export interface AchievementItem {
  title: string;
  description: string;
  type: string;
  icon: AchievementIcon;
  date: string;
  team?: string[];
}

export interface AchievementYearGroup {
  year: string;
  items: AchievementItem[];
}

export interface AchievementHighlight extends AchievementItem {
  year: string;
}

export const achievements: AchievementYearGroup[] = [
  {
    year: "2025",
    items: [
      {
        title: "ICPC Asia Regionals - Gold Medal",
        description:
          "Team Neuromancers secured Gold in the ICPC Asia Regional Contest held at Amritapuri.",
        type: "Contest",
        icon: Trophy,
        date: "Dec 2025",
        team: ["Arjun Reddy", "Priya Sharma", "Rahul Verma"],
      },
      {
        title: "Google Summer of Code - 8 Selections",
        description:
          "Record 8 members selected for GSoC 2025 across top open-source organizations.",
        type: "Open Source",
        icon: GitBranch,
        date: "May 2025",
      },
      {
        title: "Smart India Hackathon - Winners",
        description:
          "Won the Smart India Hackathon in the Software Edition with an AI-powered healthcare solution.",
        type: "Hackathon",
        icon: Award,
        date: "Aug 2025",
        team: ["Sneha Patel", "Amit Kumar", "Neha Gupta"],
      },
      {
        title: "Research Paper at NeurIPS",
        description:
          "Published research on 'Efficient Transformer Architectures for Edge Devices' at NeurIPS 2025.",
        type: "Research",
        icon: FileText,
        date: "Nov 2025",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Inter-IIT Tech Meet - Overall Champions",
        description:
          "Secured 1st position at Inter-IIT Tech Meet 12.0 with wins in multiple events.",
        type: "Competition",
        icon: Trophy,
        date: "Dec 2024",
      },
      {
        title: "Codeforces Round #900 - 3 Candidates Master",
        description:
          "Three members achieved Candidate Master (1900+) rating on Codeforces.",
        type: "CP",
        icon: Star,
        date: "Oct 2024",
      },
      {
        title: "Microsoft Imagine Cup - National Finalists",
        description:
          "Reached national finals with an innovative education technology solution.",
        type: "Hackathon",
        icon: Award,
        date: "Apr 2024",
      },
      {
        title: "Open Source Contributions - 500+ PRs",
        description:
          "Members collectively contributed 500+ pull requests to major open-source projects.",
        type: "Open Source",
        icon: GitBranch,
        date: "2024",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "ACM ICPC World Finals Qualifier",
        description:
          "First team from IIT Bhubaneswar to qualify for ICPC World Finals.",
        type: "Contest",
        icon: Trophy,
        date: "Nov 2023",
      },
      {
        title: "MLH Fellowship - 5 Selections",
        description:
          "Five members selected for MLH Fellowship across different tracks.",
        type: "Fellowship",
        icon: Users,
        date: "Jun 2023",
      },
      {
        title: "Best Technical Society Award",
        description:
          "Recognized as the Best Technical Society at IIT Bhubaneswar Annual Awards.",
        type: "Recognition",
        icon: Medal,
        date: "Mar 2023",
      },
    ],
  },
];

export const achievementStats = [
  { label: "Contest Wins", value: "5+", icon: Trophy },
  { label: "GSoC Selections", value: "5+", icon: GitBranch },
  { label: "Research Papers", value: "1+", icon: FileText },
  { label: "Active Members", value: "50+", icon: Users },
];

export const achievementHighlights: AchievementHighlight[] =
  achievements.flatMap((group) =>
    group.items.map((item) => ({ ...item, year: group.year })),
  );

export const achievementDomains = [
  "Contest",
  "Hackathon",
  "Open Source",
  "Research",
  "Competition",
  "CP",
  "Fellowship",
  "Recognition",
  "Other",
];
