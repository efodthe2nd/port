"use client";

import { motion } from "framer-motion";
import { cardVariants } from "@/lib/animations";

export function BioCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className="rounded-2xl bg-surface border border-border p-6 md:p-8 h-full"
    >
      <div className="space-y-5">
        {/* Header */}
        <div>
          <h1 className="text-xl md:text-2xl font-medium text-text-primary">
            <span className="font-semibold">David Efod</span>
            <span className="text-text-secondary"> — Design Engineer</span>
          </h1>
          <p className="mt-1 text-text-secondary">
            crafting interfaces that convert at{" "}
            <a
              href="https://thenazcreatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-teal hover:underline underline-offset-2 transition-colors"
            >
              thenazcreatives.com
            </a>
          </p>
        </div>

        {/* Bio paragraphs */}
        <div className="space-y-4 text-[15px] leading-relaxed text-text-secondary">
          <p>
            I build full-stack applications where pixels meet performance. From
            Nigeria&apos;s first indigenous 3DS2 payment system to SaaS dashboards for
            funded startups, I&apos;ve shipped code that handles real money and real
            users.
          </p>

          <p>
            With experience spanning{" "}
            <span className="text-accent-purple">payment gateways</span>,{" "}
            <span className="text-accent-teal">fintech platforms</span>, and{" "}
            <span className="text-accent-orange">conversion-focused landing pages</span>,
            I bring a blend of engineering rigor and design obsession to everything I
            build.
          </p>

          <p>
            At my core is a deep{" "}
            <span className="strikethrough text-text-secondary/70">passion</span>{" "}
            <span className="text-text-primary font-medium">obsession</span> for
            interfaces that convert, pixel-perfect implementation, and systems that
            actually ship.
          </p>

          <p>
            I specialize in{" "}
            <span className="font-mono text-sm text-accent-blue">React</span>,{" "}
            <span className="font-mono text-sm text-accent-blue">Next.js</span>,{" "}
            <span className="font-mono text-sm text-accent-blue">TypeScript</span>, and
            turning complex problems into simple, beautiful solutions.
          </p>

          <p className="text-text-primary">Let&apos;s build something that matters.</p>
        </div>

      </div>
    </motion.div>
  );
}
