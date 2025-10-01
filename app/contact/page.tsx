"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ContactCard from "@/components/contact/ContactCard";

interface ContactItem {
  icon: ReactElement;
  url: string;
  hoverColor: string;
  hoverBgColor: string;
}

const contacts: ContactItem[] = [
  {
    icon: <MdPhone className="w-8 h-8" />,
    url: "tel:+2348169025216",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-green-500",
  },
  {
    icon: <MdEmail className="w-8 h-8" />,
    url: "mailto:yusuf.usman1003@gmail.com",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-red-500",
  },
  {
    icon: <FaGithub className="w-8 h-8" />,
    url: "https://github.com/yusufusmahn",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-gray-600",
  },
  {
    icon: <FaLinkedin className="w-8 h-8" />,
    url: "https://www.linkedin.com/in/yusuf-usman-625193218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-blue-600",
  },
  {
    icon: <FaFacebook className="w-8 h-8" />,
    url: "https://www.facebook.com/share/1Ckgx7FJFF/",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-blue-500",
  },
  {
    icon: <FaTwitter className="w-8 h-8" />,
    url: "https://x.com/yusufusman1003?s=09",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-sky-400",
  },
  {
    icon: <FaInstagram className="w-8 h-8" />,
    url: "https://www.instagram.com/yusufusmahn?igsh=bHg2cTdsMTNhY3Qx",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-pink-500",
  },
  {
    icon: <FaWhatsapp className="w-8 h-8" />,
    url: "https://wa.me/2348169025216",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-green-400",
  },
  {
    icon: <FaYoutube className="w-8 h-8" />,
    url: "https://youtube.com/@yusufusmahn",
    hoverColor: "text-white",
    hoverBgColor: "hover:bg-red-600",
  },
];

export default function ContactSection(): ReactElement {
  return (
    <motion.section
      className="text-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-secondary italic mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Let&apos;s Work Together
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {contacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <ContactCard
                icon={item.icon}
                url={item.url}
                hoverColor={item.hoverColor}
                hoverBgColor={item.hoverBgColor}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center items-center gap-3 text-gray-300 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <MdLocationOn className="w-6 h-6 text-red-500" />
          <p className="text-base sm:text-lg md:text-xl">
            Wakanda Hostel, Abule Oja University road, Lagos State
          </p>
        </motion.div>

        <motion.div
          className="mt-16 border-t border-gray-700 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.h3
            className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-wider text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            YUSUF USMAN
          </motion.h3>
        </motion.div>
      </div>
    </motion.section>
  );
}
