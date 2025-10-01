"use client";

import { motion } from "framer-motion";
import HeroText from "@/components/home-page/HeroText";
import HeroImage from "@/components/home-page/HeroImage";
import TechStack from "../components/home-page/TechStack";

const Home = () => {
  return (
    <main>
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-around gap-10 md:gap-16 px-6 pt-2 md:pt-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <HeroText />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <HeroImage />
        </motion.div>
      </motion.section>
      <motion.section
        className="py-5 px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <TechStack />
      </motion.section>
    </main>
  );
};

export default Home;
