"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skillsAndInterest";

const TechStack = () => {
  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  const startIndex = 0;
  const endIndex = page * ITEMS_PER_PAGE;
  const visibleSkills = skills.slice(startIndex, endIndex);

  const hasMore = endIndex < skills.length;

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold text-white mb-6 text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Technologies I Work With
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 bg-background/50 border border-secondary/20 rounded-lg text-secondary font-medium transition-all duration-300 hover:bg-secondary/10 hover:border-secondary/60 hover:scale-105 backdrop-blur-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(56, 189, 248, 0.2)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 rounded-lg bg-secondary text-black font-semibold shadow-md hover:bg-secondary/80 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechStack;
