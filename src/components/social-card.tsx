"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/animations";

export function SocialCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.a
      href="https://x.com/efoddavid"
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="block rounded-2xl bg-surface border border-border p-5 h-full cursor-pointer hover:border-border/80 transition-colors"
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-accent-blue/20 border border-border flex items-center justify-center">
          {imgError ? (
            <span className="text-accent-blue font-semibold text-sm">DE</span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/profile/avatar.svg"
              alt="David Efod"
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Name and handle */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-text-primary text-sm">David Efod</span>
            {/* Verified badge */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 22 22"
              fill="none"
              className="text-accent-blue flex-shrink-0"
            >
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-text-secondary text-sm">@efoddavid</span>
        </div>

        {/* X/Twitter logo */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-secondary"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Tweet preview (optional flavor text) */}
      <p className="mt-4 text-sm text-text-secondary leading-relaxed">
        Building interfaces that make users click. Currently obsessing over micro-interactions and payment UX.
      </p>

      {/* Engagement metrics */}
      <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
        <span className="flex items-center gap-1 text-red-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          128
        </span>
        <span className="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          24
        </span>
      </div>
    </motion.a>
  );
}
