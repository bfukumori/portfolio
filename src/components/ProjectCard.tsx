"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLink = Boolean(project.link);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
      className={`group relative flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-800/50 hover:border-zinc-700 ${
        hasLink ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-hidden"
              >
                <span className="absolute inset-0 z-0" aria-hidden="true" />
                <span className="relative z-10">{project.title}</span>
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="text-sm font-medium text-emerald-400 mt-1">
            {project.architecture}
          </p>
        </div>
        {project.link ? (
          <div
            className="relative z-10 shrink-0 p-1 text-zinc-500 transition-colors group-hover:text-zinc-200"
            aria-hidden="true"
          >
            <ArrowUpRight className="h-5 w-5" />
          </div>
        ) : (
          <span className="relative z-10 shrink-0 rounded-full border border-zinc-800 bg-zinc-800/60 px-2.5 py-0.5 text-xs text-zinc-400">
            Corporativo
          </span>
        )}
      </div>
      <p className="text-zinc-400 leading-relaxed">{project.description}</p>
      <ul className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4">
        {project.metrics.map((metric) => (
          <li
            key={metric}
            className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300"
          >
            {metric}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
