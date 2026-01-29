"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Supabase", icon: "⚡" },
  { name: "Stripe", icon: "💳" },
  { name: "Framer Motion", icon: "🔄" },
  { name: "Three.js", icon: "🎮" },
  { name: "Figma", icon: "🎯" },
  { name: "Vercel", icon: "▲" },
];

function MarqueeContent() {
  return (
    <>
      {techStack.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className="flex items-center gap-2 px-6 py-3 mx-2 rounded-full bg-surface border border-border hover:border-border/80 hover:bg-surface-hover transition-colors cursor-default"
        >
          <span className="text-base">{tech.icon}</span>
          <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex">
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, -50 * techStack.length * 8],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </div>
    </div>
  );
}

export function MarqueeCard() {
  return (
    <div className="rounded-2xl bg-surface/50 border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
          Tech Stack
        </span>
      </div>
      <Marquee />
    </div>
  );
}
