"use client";

import { useState } from "react";
import { skills } from "@/data/skillsAndInterest";

const TechStack = () => {
  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  const startIndex = 0;
  const endIndex = page * ITEMS_PER_PAGE;
  const visibleSkills = skills.slice(startIndex, endIndex);

  const hasMore = endIndex < skills.length;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-background/50 border border-secondary/20 rounded-lg text-secondary font-medium transition-all duration-300 hover:bg-secondary/10 hover:border-secondary/60 hover:scale-105 backdrop-blur-sm text-center"
          >
            {skill}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 rounded-lg bg-secondary text-black font-semibold shadow-md hover:bg-secondary/80 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TechStack;
