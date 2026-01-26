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
    year: "2022",
    items: [
      {
        title: "Team AlphaZero - ICPC Multi-Region Achievers",
        description:
          "Outstanding performance securing 2nd Rank in ICPC Kanpur Region and 4th Rank in ICPC Gwalior Region, qualifying for ICPC Asia West.",
        type: "Competition",
        icon: Trophy,
        date: "December 2024",
        team: ["Rishvic Pushpakaran", "Arpit Kesharwani", "Sarthak Gupta"],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "ICPC Asia West Regional Finalists",
        description:
          "Team 'Fast and Fourier' qualified for ICPC Asia West Competition in Mathura, India, representing IIT Bhubaneswar at the regional finals.",
        type: "Competition",
        icon: Trophy,
        date: "December 2024",
        team: ["Tushar Joshi", "Soham Chakraborty", "Arihant Garg"],
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
