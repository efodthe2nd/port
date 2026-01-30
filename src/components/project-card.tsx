"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cardVariants, imageVariants, arrowVariants, springConfig } from "@/lib/animations";
import { useMagnetic } from "@/hooks/use-magnetic";
import { ProjectImage } from "@/components/project-image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const { magneticProps, magneticStyle } = useMagnetic<HTMLDivElement>({
    strength: 0.12,
    radius: 400,
  });

  return (
    <Link href={`/work/${project.slug}`} className={`block ${className}`}>
      <motion.div
        {...magneticProps}
        style={{ x: magneticStyle.x, y: magneticStyle.y }}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="group relative rounded-2xl bg-surface border border-border overflow-hidden cursor-pointer transition-colors duration-300 hover:border-border/80"
      >
        {/* Media container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          <motion.div variants={imageVariants} className="relative w-full h-full">
            {project.video ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="pointer-events-none absolute inset-0 w-full h-full border-0 scale-[1.5] object-cover"
                title={project.title}
              />
            ) : project.cardVideo || project.heroVideo ? (
              <video
                src={project.cardVideo || project.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <ProjectImage
                src={project.images.hero}
                alt={project.title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                accentColor={project.accent}
              />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Accent color indicator */}
          <div
            className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-80"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-text-primary truncate group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            {/* Arrow icon */}
            <motion.div
              variants={arrowVariants}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-border/50 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-text-secondary group-hover:text-accent-blue transition-colors"
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

          {/* Tech stack pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-background rounded-md border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-mono text-text-secondary">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: project.accent }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ type: "spring", ...springConfig.snappy }}
        />
      </motion.div>
    </Link>
  );
}
