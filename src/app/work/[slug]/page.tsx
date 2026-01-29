"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { Nav } from "@/components/nav";
import { ProjectImage } from "@/components/project-image";
import { pageVariants, staggerContainer, staggerItem } from "@/lib/animations";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-text-primary mb-4">
            Project not found
          </h1>
          <Link
            href="/"
            className="text-accent-blue hover:underline underline-offset-2"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Nav />

      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen pt-24 pb-16"
      >
        {/* Hero Section */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">Back to all work</span>
              </Link>
            </motion.div>

            {/* Project header */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <span className="text-sm font-mono text-text-secondary">
                  {project.year}
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-xl md:text-2xl text-text-secondary mb-6"
              >
                {project.subtitle}
              </motion.p>

              <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono text-text-secondary bg-surface border border-border rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {project.liveUrl && project.liveUrl !== "#" && (
                <motion.a
                  variants={staggerItem}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
                >
                  <span>Visit Live Site</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 13L13 1M13 1H5M13 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border"
            >
              <ProjectImage
                src={project.images.hero}
                alt={`${project.title} hero`}
                className="object-cover"
                priority
                accentColor={project.accent}
              />
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-4">
                About the project
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Screenshots Grid */}
        <section className="px-4 md:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {project.images.screens.map((screen, index) => (
                <motion.div
                  key={screen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border"
                >
                  <ProjectImage
                    src={screen}
                    alt={`${project.title} screen ${index + 1}`}
                    className="object-cover"
                    accentColor={project.accent}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Next Project */}
        <section className="px-4 md:px-8 pt-16 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-sm font-mono text-text-secondary uppercase tracking-wider">
                Next project
              </span>

              <Link
                href={`/work/${nextProject.slug}`}
                className="group block mt-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                    {nextProject.title}
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-text-secondary group-hover:text-accent-blue group-hover:translate-x-2 transition-all"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="mt-2 text-text-secondary">
                  {nextProject.subtitle}
                </p>
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
