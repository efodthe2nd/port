"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";

export function Nav() {
  const { magneticProps: logoProps, magneticStyle: logoStyle } =
    useMagnetic<HTMLAnchorElement>({
      strength: 0.3,
      radius: 100,
    });

  const { magneticProps: workProps, magneticStyle: workStyle } =
    useMagnetic<HTMLAnchorElement>({
      strength: 0.25,
      radius: 80,
    });

  const { magneticProps: mailProps, magneticStyle: mailStyle } =
    useMagnetic<HTMLAnchorElement>({
      strength: 0.25,
      radius: 80,
    });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          {...logoProps}
          style={{ x: logoStyle.x, y: logoStyle.y }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border hover:border-border/80 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-secondary"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>

        {/* Center - Selected Work */}
        <motion.a
          href="#work"
          {...workProps}
          style={{ x: workStyle.x, y: workStyle.y }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border hover:border-border/80 transition-colors"
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
        </motion.a>

        {/* Mail icon */}
        <motion.a
          href="mailto:hello@davidefod.com"
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
