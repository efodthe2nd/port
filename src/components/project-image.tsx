"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  accentColor?: string;
}

export function ProjectImage({
  src,
  alt,
  fill = true,
  className = "",
  sizes,
  priority = false,
  accentColor = "#3b82f6",
}: ProjectImageProps) {
  const [error, setError] = useState(false);
  const isSvg = src.endsWith(".svg");

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-surface absolute inset-0 ${className}`}
        style={{
          background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)`,
        }}
      >
        <div className="text-center p-8">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: accentColor }}
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path
                d="M21 15L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 18L9 13L3 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm text-text-secondary font-mono">{alt}</p>
          <p className="text-xs text-text-secondary/60 mt-1">Image coming soon</p>
        </div>
      </div>
    );
  }

  // For SVGs, use a regular img tag or unoptimized Image
  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
