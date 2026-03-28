"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, FolderKanban } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const data = project[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group glass overflow-hidden block cursor-pointer hover:bg-white/[0.04] transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.images[0]}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          />
          {/* View button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
              <Eye className="w-4 h-4" />
              {t.projects.viewDetails}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/50 mb-4 leading-relaxed line-clamp-2">
            {data.shortDesc}
          </p>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-white/40">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useLang();

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3 sm:gap-4">
          <FolderKanban className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          <span className="text-blue-400 font-mono text-lg">02.</span>{" "}
          {t.projects.title}
          <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
        </h2>
        <p className="text-white/40 mb-8 sm:mb-12 text-sm">
          {t.projects.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
