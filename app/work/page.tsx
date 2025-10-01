"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/workInfo";

export default function SelectedProjects() {
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);

  const startIndex = 0;
  const endIndex = page * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, endIndex);

  const hasMore = endIndex < projects.length;

  return (
    <motion.section
      className="text-white py-10 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Selected Project
          </motion.h2>
          <motion.span
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-grey to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            2022 - 2023
          </motion.span>
        </motion.div>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative flex flex-col items-center text-center rounded-lg 
                         transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-2xl p-4 bg-background/30 shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white text-sm font-medium">
                      👉 Click to view source code on GitHub
                    </span>
                  </motion.div>
                </div>

                <motion.h3
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.3 }}
                >
                  {project.title} | {project.year}
                </motion.h3>

                <motion.p
                  className="mt-3 text-grey text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.ul
                  className="mt-4 flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1, duration: 0.3 }}
                >
                  {project.tech?.map((t, i) => (
                    <motion.li
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary shadow-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(56, 189, 248, 0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {t}
                    </motion.li>
                  ))}
                </motion.ul>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow-md hover:shadow-lg hover:bg-secondary/80 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
