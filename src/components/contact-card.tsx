"use client";

import { motion } from "framer-motion";
import { cardVariants, arrowVariants, springConfig } from "@/lib/animations";
import { useMagnetic } from "@/hooks/use-magnetic";

export function ContactCard() {
  const { magneticProps, magneticStyle } = useMagnetic<HTMLAnchorElement>({
    strength: 0.2,
    radius: 200,
  });

  return (
    <motion.a
      href="mailto:hello@davidefod.com"
      {...magneticProps}
      style={{ x: magneticStyle.x, y: magneticStyle.y }}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="group flex flex-col justify-between rounded-2xl bg-surface border border-border p-5 h-full cursor-pointer hover:border-accent-blue/50 transition-colors"
    >
      <div>
        <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent-blue"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>

        <h3 className="text-lg font-medium text-text-primary">Let&apos;s chat</h3>
        <p className="mt-1 text-sm text-text-secondary">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-accent-blue font-medium">Get in touch</span>
        <motion.div
          variants={arrowVariants}
          className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-accent-blue"
          >
            <path
              d="M1 13L13 1M13 1H5M13 1V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
