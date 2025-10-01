"use client";

import { motion } from "framer-motion";
import EducationCard from "@/components/education/EducationCard";
import { education } from "@/data/educationInfo";

const Education = () => {
  return (
    <motion.section
      className="text-white px-6 py-10 md:py-16 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center border-b-2 border-secondary inline-block pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        EDUCATION
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-between w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.p
          className="text-grey lg:w-1/2 leading-relaxed max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          My educational journey has shaped both my technical expertise and
          problem-solving mindset. I started with a strong foundation in{" "}
          <span className="text-secondary">Mathematics</span>, where I gained
          core knowledge in programming, algorithms, and system design. Over
          time, I advanced into specialized areas such as{" "}
          <span className="text-secondary">Backend Development</span>,
          <span className="text-secondary">Databases</span>, and{" "}
          <span className="text-secondary">Cloud Technologies</span>. Alongside
          formal studies, I continuously sharpened my skills through online
          certifications, hands-on projects, and real-world application of
          modern technologies. This blend of academic training and practical
          learning has prepared me to build scalable, secure, and efficient
          solutions for today’s digital challenges.
        </motion.p>

        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-extrabold text-secondary/70 mb-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            2012 - 2024
          </motion.h3>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.3 }}
              >
                <EducationCard title={item.title} subtitle={item.subtitle} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
