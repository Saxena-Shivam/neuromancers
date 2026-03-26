"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Filter, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TeamMemberCard, type TeamMember } from "@/components/team-member-card";
import { Suspense } from "react";
import Loading from "./loading";
import {
  secretary,
  governors,
  domainLeads,
  members,
  alumni,
  teamDomains,
} from "@/data/team";

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDomain =
      selectedDomain === "All" ||
      (member.domain && member.domain.includes(selectedDomain));
    return matchesSearch && matchesDomain;
  });

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
                Our Team
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Meet the <span className="text-primary">Neuromancers</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                The passionate individuals driving innovation and excellence at
                IIT Bhubaneswar's premier programming society.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Secretary */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Secretary</h2>
              <p className="text-muted-foreground mt-2">
                Leading Neuromancers with vision
              </p>
            </motion.div>
            <div className="flex justify-center max-w-md mx-auto">
              <TeamMemberCard member={secretary} variant="large" />
            </div>
          </div>
        </section>

        {/* Governors */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Governors</h2>
              <p className="text-muted-foreground mt-2">
                The core leadership team
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {governors.map((governor, index) => (
                <TeamMemberCard
                  key={governor.id}
                  member={governor}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Domain Leads */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Technical Tracks
              </h2>
              <p className="text-muted-foreground mt-2">
                Experts driving excellence in their domains
              </p>
            </motion.div>

            <div className="space-y-12">
              {domainLeads.map((domain, domainIndex) => (
                <motion.div
                  key={domain.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + domainIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-6 text-center">
                    {domain.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {domain.members.map((member, index) => (
                      <TeamMemberCard
                        key={member.id}
                        member={member}
                        index={index}
                        variant="small"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Members</h2>
              <p className="text-muted-foreground mt-2">
                Our talented community
              </p>
            </motion.div>
            {/* Filters */}
            <div className="flex flex-col gap-6 mb-8 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 w-full h-11 text-base border-2 rounded-lg"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {teamDomains.map((domain) => (
                  <Button
                    key={domain}
                    variant={selectedDomain === domain ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDomain(domain)}
                    className={
                      selectedDomain === domain
                        ? "bg-primary text-primary-foreground"
                        : "border-primary/30 hover:border-primary/60 hover:bg-primary/10 text-foreground hover:text-foreground transition-all duration-200"
                    }
                  >
                    {domain}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    variant="small"
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                  <div className="text-center max-w-md">
                    <div className="mb-4 flex justify-center">
                      <AlertCircle className="h-16 w-16 text-primary/40" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-muted-foreground">
                      No members found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {searchQuery
                        ? `No members match "${searchQuery}"`
                        : `No members found in ${selectedDomain}`}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDomain("All");
                      }}
                      className="text-primary border-primary hover:bg-primary/10"
                    >
                      Clear filters
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section id="alumni" className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Alumni</h2>
              <p className="text-muted-foreground mt-2">
                Where our former members are now
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {alumni.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  variant="small"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
