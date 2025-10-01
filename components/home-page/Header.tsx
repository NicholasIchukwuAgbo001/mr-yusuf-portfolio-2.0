"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const menuButton = document.getElementById("menu-button");

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-9999 border-b border-white/10 shadow-xl header-glow bg-background/50 backdrop-blur-lg ">
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-tight hover:text-secondary transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <span className="bg-gradient-to-r from-secondary to-cyan-400 bg-clip-text text-transparent">
            Yusuf Usman
          </span>
          <span className="text-secondary animate-pulse ml-1">.</span>
        </Link>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <button
          id="menu-button"
          className="md:hidden text-white hover:text-secondary transition-all duration-300 focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-white/10 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          {...(isOpen
            ? { "aria-expanded": "true" }
            : { "aria-expanded": "false" })}
        >
          {isOpen ? (
            <X
              size={28}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          ) : (
            <Menu
              size={28}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <>
          <div
            id="mobile-sidebar"
            className={`fixed top-0 left-0 h-screen w-64 bg-background/95 backdrop-blur-lg shadow-2xl transform transition-all duration-300 ease-in-out md:hidden z-9999 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 pt-20 h-full overflow-y-auto">
              <Navbar onLinkClick={() => setIsOpen(false)} />
            </div>
          </div>

          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        </>
      )}
    </header>
  );
};

export default Header;