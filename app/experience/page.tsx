"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experienceInfo";

export default function Experience() {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-background via-gray-900 to-blue-900 text-white py-10 md:py-16 px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mb-14 relative z-10 gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">EXPERIENCE</h2>
          <div className="w-20 h-1 bg-secondary" />
        </motion.div>
        <motion.h3
          className="text-5xl md:text-6xl font-extrabold text-grey"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          2018 - 2025
        </motion.h3>
      </motion.div>

      <motion.div
        className="space-y-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex justify-between flex-col md:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            whileHover={{
              x: 10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex gap-5">
              <div className="text-secondary text-3xl font-bold">»</div>
              <div>
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <p className="text-grey">
                  {exp.title} {exp.years}
                </p>
              </div>
            </div>
            <p className="text-sm text-grey mt-2 max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
