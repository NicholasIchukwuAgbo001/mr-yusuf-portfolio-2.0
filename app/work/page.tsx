"use client";

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
    <section className="text-white py-10 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Selected Project
          </h2>
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-grey to-secondary bg-clip-text text-transparent">
            2022 - 2023
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <Link
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center text-center rounded-lg 
                         transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-2xl p-4 bg-background/30 shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">
                    👉 Click to view source code on GitHub
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {project.title} | {project.year}
              </h3>

              {/* Description */}
              <p className="mt-3 text-grey text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {project.tech?.map((t, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary shadow-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow-md hover:shadow-lg hover:bg-secondary/80 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
