import UnderDevelopment from "@/components/under-development";

export default function LeaderboardPage() {
  return (
    <UnderDevelopment
      pageName="Leaderboard"
      description="We're building a real-time competitive programming leaderboard with live ratings from Codeforces and LeetCode. Stay tuned!"
    />
  );
}

/* TODO: Implement real leaderboard with API integration
   Original code preserved below for future implementation

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Medal,
  Crown,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface LeaderboardEntry {
  rank: number;
  previousRank: number;
//   name: string;
//   image: string;
//   year: string;
//   branch: string;
//   codeforcesRating: number;
//   codeforcesHandle: string;
//   codechefRating: number;
//   codechefHandle: string;
//   leetcodeRating: number;
//   leetcodeHandle: string;
//   problemsSolved: number;
//   contestsParticipated: number;
// }

// const leaderboardData: LeaderboardEntry[] = [
//   {
//     rank: 1,
//     previousRank: 1,
//     name: "Arjun Reddy",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     year: "3rd Year",
//     branch: "CSE",
//     codeforcesRating: 2245,
//     codeforcesHandle: "arjun_master",
//     codechefRating: 2156,
//     codechefHandle: "arjun_cc",
//     leetcodeRating: 2456,
//     leetcodeHandle: "arjunreddy",
//     problemsSolved: 1850,
//     contestsParticipated: 156,
//   },
//   {
//     rank: 2,
//     previousRank: 4,
//     name: "Priya Sharma",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//     year: "2nd Year",
//     branch: "CSE",
//     codeforcesRating: 2189,
//     codeforcesHandle: "priya_cp",
//     codechefRating: 2098,
//     codechefHandle: "priya_sharma",
//     leetcodeRating: 2398,
//     leetcodeHandle: "priyasharma",
//     problemsSolved: 1620,
//     contestsParticipated: 142,
//   },
//   {
//     rank: 3,
//     previousRank: 2,
//     name: "Rahul Verma",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
//     year: "4th Year",
//     branch: "ECE",
//     codeforcesRating: 2134,
//     codeforcesHandle: "rahul_codes",
//     codechefRating: 2045,
//     codechefHandle: "rahul_v",
//     leetcodeRating: 2345,
//     leetcodeHandle: "rahulverma",
//     problemsSolved: 1540,
//     contestsParticipated: 128,
//   },
//   {
//     rank: 4,
//     previousRank: 3,
//     name: "Sneha Patel",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     year: "3rd Year",
//     branch: "CSE",
//     codeforcesRating: 2089,
//     codeforcesHandle: "sneha_algo",
//     codechefRating: 1998,
//     codechefHandle: "sneha_p",
//     leetcodeRating: 2289,
//     leetcodeHandle: "snehapatel",
//     problemsSolved: 1420,
//     contestsParticipated: 115,
//   },
//   {
//     rank: 5,
//     previousRank: 6,
//     name: "Amit Kumar",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//     year: "2nd Year",
//     branch: "CSE",
//     codeforcesRating: 1978,
//     codeforcesHandle: "amit_dev",
//     codechefRating: 1923,
//     codechefHandle: "amit_k",
//     leetcodeRating: 2156,
//     leetcodeHandle: "amitkumar",
//     problemsSolved: 1280,
//     contestsParticipated: 98,
//   },
//   {
//     rank: 6,
//     previousRank: 5,
//     name: "Neha Gupta",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-af0119f7cbe7?w=100&h=100&fit=crop",
//     year: "3rd Year",
//     branch: "EE",
//     codeforcesRating: 1945,
//     codeforcesHandle: "neha_coder",
//     codechefRating: 1889,
//     codechefHandle: "neha_g",
//     leetcodeRating: 2098,
//     leetcodeHandle: "nehagupta",
//     problemsSolved: 1150,
//     contestsParticipated: 87,
//   },
//   {
//     rank: 7,
//     previousRank: 8,
//     name: "Vikram Singh",
//     image:
//       "https://images.unsplash.com/photo-1519085360798-e69530286df2?w=100&h=100&fit=crop",
//     year: "4th Year",
//     branch: "CSE",
//     codeforcesRating: 1889,
//     codeforcesHandle: "vikram_s",
//     codechefRating: 1834,
//     codechefHandle: "vikram_singh",
//     leetcodeRating: 2045,
//     leetcodeHandle: "vikramsingh",
//     problemsSolved: 1080,
//     contestsParticipated: 76,
//   },
//   {
//     rank: 8,
//     previousRank: 7,
//     name: "Ananya Das",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
//     year: "2nd Year",
//     branch: "CSE",
//     codeforcesRating: 1856,
//     codeforcesHandle: "ananya_cp",
//     codechefRating: 1798,
//     codechefHandle: "ananya_d",
//     leetcodeRating: 1989,
//     leetcodeHandle: "ananyadas",
//     problemsSolved: 980,
//     contestsParticipated: 65,
//   },
//   {
//     rank: 9,
//     previousRank: 10,
//     name: "Rohan Mehta",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
//     year: "3rd Year",
//     branch: "ME",
//     codeforcesRating: 1812,
//     codeforcesHandle: "rohan_m",
//     codechefRating: 1756,
//     codechefHandle: "rohan_mehta",
//     leetcodeRating: 1923,
//     leetcodeHandle: "rohanmehta",
//     problemsSolved: 890,
//     contestsParticipated: 54,
//   },
//   {
//     rank: 10,
//     previousRank: 9,
//     name: "Kavya Iyer",
//     image:
//       "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
//     year: "2nd Year",
//     branch: "CSE",
//     codeforcesRating: 1789,
//     codeforcesHandle: "kavya_i",
//     codechefRating: 1723,
//     codechefHandle: "kavya_iyer",
//     leetcodeRating: 1876,
//     leetcodeHandle: "kavyaiyer",
//     problemsSolved: 820,
//     contestsParticipated: 48,
//   },
// ];

// function getRankIcon(rank: number) {
//   if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
//   if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
//   if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
//   return (
//     <span className="text-lg font-bold text-muted-foreground">{rank}</span>
//   );
// }

// function getRankChange(current: number, previous: number) {
//   const diff = previous - current;
//   if (diff > 0) {
//     return (
//       <span className="flex items-center text-green-500 text-xs">
//         <TrendingUp className="h-3 w-3 mr-1" />+{diff}
//       </span>
//     );
//   }
//   if (diff < 0) {
//     return (
//       <span className="flex items-center text-red-500 text-xs">
//         <TrendingDown className="h-3 w-3 mr-1" />
//         {diff}
//       </span>
//     );
//   }
//   return (
//     <span className="flex items-center text-muted-foreground text-xs">
//       <Minus className="h-3 w-3" />
//     </span>
//   );
// }

// function getRatingColor(rating: number, platform: string) {
//   if (platform === "codeforces") {
//     if (rating >= 2400) return "text-red-500";
//     if (rating >= 2100) return "text-orange-500";
//     if (rating >= 1900) return "text-purple-500";
//     if (rating >= 1600) return "text-blue-500";
//     if (rating >= 1400) return "text-cyan-500";
//     return "text-green-500";
//   }
//   if (platform === "codechef") {
//     if (rating >= 2500) return "text-red-500";
//     if (rating >= 2200) return "text-orange-500";
//     if (rating >= 2000) return "text-yellow-500";
//     if (rating >= 1800) return "text-purple-500";
//     return "text-green-500";
//   }
//   // leetcode
//   if (rating >= 2400) return "text-red-500";
//   if (rating >= 2000) return "text-orange-500";
//   if (rating >= 1600) return "text-blue-500";
//   return "text-green-500";
// }

// type SortKey =
//   | "rank"
//   | "codeforcesRating"
//   | "codechefRating"
//   | "leetcodeRating"
//   | "problemsSolved";

// function Loading() {
//   return null;
// }

// export default function LeaderboardPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortKey, setSortKey] = useState<SortKey>("rank");
//   const [sortAsc, setSortAsc] = useState(true);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const searchParams = useSearchParams();

//   const handleSort = (key: SortKey) => {
//     if (sortKey === key) {
//       setSortAsc(!sortAsc);
//     } else {
//       setSortKey(key);
//       setSortAsc(key === "rank");
//     }
//   };

//   const filteredData = leaderboardData
//     .filter(
//       (entry) =>
//         entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         entry.branch.toLowerCase().includes(searchQuery.toLowerCase()),
//     )
//     .sort((a, b) => {
//       const modifier = sortAsc ? 1 : -1;
//       if (sortKey === "rank") {
//         return (a.rank - b.rank) * modifier;
//       }
//       return (b[sortKey] - a[sortKey]) * modifier;
//     });

//   const topThree = leaderboardData.slice(0, 3);

//   return (
//     <Suspense fallback={<Loading />}>
//       <div className="pt-20" ref={ref}>
//         {/* Hero }*/
//         <section className="py-16 lg:py-24 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
//           <div className="container mx-auto px-4 lg:px-8 relative">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="max-w-3xl mx-auto text-center"
//             >
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">
//                 Leaderboard
//               </span>
//               <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
//                 CP <span className="text-primary">Rankings</span>
//               </h1>
//               <p className="mt-6 text-lg text-muted-foreground">
//                 Track our members competitive programming rankings across
//                 platforms.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Top 3 Podium */}
//         <section className="py-12 lg:py-16">
//           <div className="container mx-auto px-4 lg:px-8">
//             <div className="flex justify-center items-end gap-4 md:gap-8">
//               {/* 2nd Place */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2 }}
//                 className="text-center"
//               >
//                 <div className="relative mb-4">
//                   <Image
//                     src={topThree[1]?.image || ""}
//                     alt={topThree[1]?.name || ""}
//                     width={80}
//                     height={80}
//                     className="rounded-full border-4 border-gray-400 mx-auto"
//                     crossOrigin="anonymous"
//                   />
//                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
//                     2
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-sm md:text-base">
//                   {topThree[1]?.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground">
//                   {topThree[1]?.codeforcesRating} CF
//                 </p>
//                 <div className="h-24 md:h-32 w-20 md:w-28 bg-gradient-to-t from-gray-500/20 to-gray-400/40 rounded-t-lg mt-4" />
//               </motion.div>

//               {/* 1st Place */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.1 }}
//                 className="text-center"
//               >
//                 <div className="relative mb-4">
//                   <Crown className="absolute -top-6 left-1/2 -translate-x-1/2 h-8 w-8 text-yellow-400" />
//                   <Image
//                     src={topThree[0]?.image || ""}
//                     alt={topThree[0]?.name || ""}
//                     width={96}
//                     height={96}
//                     className="rounded-full border-4 border-yellow-400 mx-auto"
//                     crossOrigin="anonymous"
//                   />
//                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
//                     1
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-sm md:text-base">
//                   {topThree[0]?.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground">
//                   {topThree[0]?.codeforcesRating} CF
//                 </p>
//                 <div className="h-32 md:h-44 w-20 md:w-28 bg-gradient-to-t from-yellow-500/20 to-yellow-400/40 rounded-t-lg mt-4" />
//               </motion.div>

//               {/* 3rd Place */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.3 }}
//                 className="text-center"
//               >
//                 <div className="relative mb-4">
//                   <Image
//                     src={topThree[2]?.image || ""}
//                     alt={topThree[2]?.name || ""}
//                     width={80}
//                     height={80}
//                     className="rounded-full border-4 border-amber-600 mx-auto"
//                     crossOrigin="anonymous"
//                   />
//                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
//                     3
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-sm md:text-base">
//                   {topThree[2]?.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground">
//                   {topThree[2]?.codeforcesRating} CF
//                 </p>
//                 <div className="h-20 md:h-24 w-20 md:w-28 bg-gradient-to-t from-amber-600/20 to-amber-500/40 rounded-t-lg mt-4" />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Leaderboard Table */}
//         <section className="py-12 lg:py-16 bg-card/50">
//           <div className="container mx-auto px-4 lg:px-8">
//             {/* Search */}
//             <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
//               <h2 className="text-2xl font-bold flex items-center gap-2">
//                 <Trophy className="h-6 w-6 text-primary" />
//                 Full Rankings
//               </h2>
//               <div className="relative w-full md:w-72">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by name or branch..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 bg-background"
//                 />
//               </div>
//             </div>

//             {/* Table */}
//             <div className="rounded-xl border border-border overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-secondary/50">
//                     <tr>
//                       <th className="px-4 py-4 text-left text-sm font-medium text-muted-foreground">
//                         <button
//                           onClick={() => handleSort("rank")}
//                           className="flex items-center gap-1 hover:text-foreground transition-colors"
//                         >
//                           Rank
//                           {sortKey === "rank" &&
//                             (sortAsc ? (
//                               <ChevronUp className="h-3 w-3" />
//                             ) : (
//                               <ChevronDown className="h-3 w-3" />
//                             ))}
//                         </button>
//                       </th>
//                       <th className="px-4 py-4 text-left text-sm font-medium text-muted-foreground">
//                         Member
//                       </th>
//                       <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground">
//                         <button
//                           onClick={() => handleSort("codeforcesRating")}
//                           className="flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
//                         >
//                           Codeforces
//                           {sortKey === "codeforcesRating" &&
//                             (sortAsc ? (
//                               <ChevronUp className="h-3 w-3" />
//                             ) : (
//                               <ChevronDown className="h-3 w-3" />
//                             ))}
//                         </button>
//                       </th>
//                       <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground">
//                         <button
//                           onClick={() => handleSort("codechefRating")}
//                           className="flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
//                         >
//                           CodeChef
//                           {sortKey === "codechefRating" &&
//                             (sortAsc ? (
//                               <ChevronUp className="h-3 w-3" />
//                             ) : (
//                               <ChevronDown className="h-3 w-3" />
//                             ))}
//                         </button>
//                       </th>
//                       <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground">
//                         <button
//                           onClick={() => handleSort("leetcodeRating")}
//                           className="flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
//                         >
//                           LeetCode
//                           {sortKey === "leetcodeRating" &&
//                             (sortAsc ? (
//                               <ChevronUp className="h-3 w-3" />
//                             ) : (
//                               <ChevronDown className="h-3 w-3" />
//                             ))}
//                         </button>
//                       </th>
//                       <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground hidden lg:table-cell">
//                         <button
//                           onClick={() => handleSort("problemsSolved")}
//                           className="flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
//                         >
//                           Problems
//                           {sortKey === "problemsSolved" &&
//                             (sortAsc ? (
//                               <ChevronUp className="h-3 w-3" />
//                             ) : (
//                               <ChevronDown className="h-3 w-3" />
//                             ))}
//                         </button>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-border">
//                     {filteredData.map((entry, index) => (
//                       <motion.tr
//                         key={entry.rank}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: 0.03 * index }}
//                         className="bg-background hover:bg-secondary/30 transition-colors"
//                       >
//                         <td className="px-4 py-4">
//                           <div className="flex items-center gap-2">
//                             <div className="w-8 h-8 flex items-center justify-center">
//                               {getRankIcon(entry.rank)}
//                             </div>
//                             {getRankChange(entry.rank, entry.previousRank)}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4">
//                           <div className="flex items-center gap-3">
//                             <Image
//                               src={entry.image || "/placeholder.svg"}
//                               alt={entry.name}
//                               width={40}
//                               height={40}
//                               className="rounded-full"
//                               crossOrigin="anonymous"
//                             />
//                             <div>
//                               <p className="font-medium text-foreground">
//                                 {entry.name}
//                               </p>
//                               <p className="text-xs text-muted-foreground">
//                                 {entry.year} | {entry.branch}
//                               </p>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 text-center">
//                           <a
//                             href={`https://codeforces.com/profile/${entry.codeforcesHandle}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`font-mono font-semibold hover:underline ${getRatingColor(
//                               entry.codeforcesRating,
//                               "codeforces",
//                             )}`}
//                           >
//                             {entry.codeforcesRating}
//                             <ExternalLink className="inline h-3 w-3 ml-1 opacity-50" />
//                           </a>
//                         </td>
//                         <td className="px-4 py-4 text-center">
//                           <a
//                             href={`https://www.codechef.com/users/${entry.codechefHandle}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`font-mono font-semibold hover:underline ${getRatingColor(
//                               entry.codechefRating,
//                               "codechef",
//                             )}`}
//                           >
//                             {entry.codechefRating}
//                             <ExternalLink className="inline h-3 w-3 ml-1 opacity-50" />
//                           </a>
//                         </td>
//                         <td className="px-4 py-4 text-center">
//                           <a
//                             href={`https://leetcode.com/${entry.leetcodeHandle}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`font-mono font-semibold hover:underline ${getRatingColor(
//                               entry.leetcodeRating,
//                               "leetcode",
//                             )}`}
//                           >
//                             {entry.leetcodeRating}
//                             <ExternalLink className="inline h-3 w-3 ml-1 opacity-50" />
//                           </a>
//                         </td>
//                         <td className="px-4 py-4 text-center hidden lg:table-cell">
//                           <Badge variant="secondary" className="font-mono">
//                             {entry.problemsSolved}
//                           </Badge>
//                         </td>
//                       </motion.tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {filteredData.length === 0 && (
//               <div className="text-center py-12">
//                 <p className="text-muted-foreground">
//                   No members found matching your search.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </Suspense>
//   );
// }
