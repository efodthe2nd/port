"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useTheme } from "@/context/theme-context";
import { projects } from "@/lib/projects";

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { magneticProps: themeProps, magneticStyle: themeStyle } =
    useMagnetic<HTMLButtonElement>({
      strength: 0.3,
      radius: 100,
    });

  const { magneticProps: workProps, magneticStyle: workStyle } =
    useMagnetic<HTMLButtonElement>({
      strength: 0.25,
      radius: 80,
    });

  const { magneticProps: mailProps, magneticStyle: mailStyle } =
    useMagnetic<HTMLAnchorElement>({
      strength: 0.25,
      radius: 80,
    });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          {...themeProps}
          style={{ x: themeStyle.x, y: themeStyle.y }}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border hover:border-border/80 transition-colors group"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Tooltip */}
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-surface border border-border text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>

          {/* Sun icon (shown in dark mode) */}
          <motion.svg
            initial={false}
            animate={{
              scale: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : 90,
              opacity: theme === "dark" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute text-text-secondary"
          >
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>

          {/* Moon icon (shown in light mode) */}
          <motion.svg
            initial={false}
            animate={{
              scale: theme === "light" ? 1 : 0,
              rotate: theme === "light" ? 0 : -90,
              opacity: theme === "light" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute text-text-secondary"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        {/* Center - Selected Work with Dropdown */}
        <div className="relative hidden md:block" ref={dropdownRef}>
          <motion.button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            {...workProps}
            style={{ x: workStyle.x, y: workStyle.y }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border hover:border-border/80 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-text-secondary"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 4"
              />
            </svg>
            <span className="text-sm text-text-secondary">Selected work</span>
            <motion.svg
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="text-text-secondary"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 min-w-[200px] rounded-xl bg-surface border border-border shadow-lg overflow-hidden"
              >
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-surface-hover transition-all duration-200 group"
                  >
                    {/* Project Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center w-8 h-8 rounded-lg border border-border overflow-hidden"
                      style={{ backgroundColor: project.accent + "20" }}
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: project.accent }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </motion.div>

                    {/* Project Name */}
                    <motion.span
                      className="text-sm text-text-secondary group-hover:text-text-primary transition-colors"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mail icon */}
        <motion.a
          href="mailto:davidefod@gmail.com"
          {...mailProps}
          style={{ x: mailStyle.x, y: mailStyle.y }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border hover:border-border/80 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-secondary"
          >
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M22 6L12 13 2 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
    </motion.nav>
  );
}
