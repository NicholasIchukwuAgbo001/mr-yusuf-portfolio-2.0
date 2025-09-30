"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navLists: NavItem[] = [
  { label: "About Me", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm uppercase tracking-wider font-medium text-grey">
        {navLists.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onLinkClick}
                className={`block transition-all duration-300 py-1 px-3 rounded-lg relative ${
                  isActive
                    ? "text-secondary font-bold"
                    : "hover:text-secondary/90"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-secondary rounded-full animate-fadeIn"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
