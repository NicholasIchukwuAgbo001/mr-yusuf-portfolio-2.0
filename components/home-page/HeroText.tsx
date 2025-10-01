"use client";

import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      className="text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-xl tracking-widest uppercase text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Welcome
      </motion.p>

      <motion.h1
        className="text-3xl md:text-6xl font-bold leading-tight mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I&apos;m <span className="text-secondary">Yusuf Usman</span>
      </motion.h1>

      <motion.p
        className="mt-4 inline-block bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Backend Engineer
      </motion.p>

      <motion.p
        className="mt-6 text-grey leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Passionate about building scalable, secure, and high-performance
        server-side applications. Experienced with Java, Spring Boot, Python,
        Django, Docker, RESTful APIs, databases, and cloud deployment. Dedicated
        to writing clean, efficient, and maintainable code that powers modern
        applications.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.a
          href="/work"
          className="px-6 py-3 rounded-md bg-secondary text-black font-semibold shadow-md hover:bg-secondary/90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="/contact"
          className="px-6 py-3 rounded-md border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-black transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
