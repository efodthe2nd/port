"use client";

import { motion } from "framer-motion";
import { cardVariants, springConfig } from "@/lib/animations";
import { useMagnetic } from "@/hooks/use-magnetic";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  href?: string;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  magnetic = false,
  href,
  onClick,
}: CardProps) {
  const { magneticProps, magneticStyle, isHovered } = useMagnetic<HTMLDivElement>({
    strength: 0.15,
    radius: 300,
  });

  const baseClasses =
    "relative rounded-2xl bg-surface border border-border overflow-hidden transition-colors duration-300";
  const hoverClasses = "hover:border-border/80 hover:bg-surface-hover";

  const content = (
    <motion.div
      {...(magnetic ? magneticProps : {})}
      style={magnetic ? { x: magneticStyle.x, y: magneticStyle.y } : undefined}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`${baseClasses} ${hoverClasses} ${className}`}
      transition={{
        type: "spring",
        ...springConfig.gentle,
      }}
    >
      {/* Gradient glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.05 : 0,
        }}
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)",
        }}
      />
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return content;
}
