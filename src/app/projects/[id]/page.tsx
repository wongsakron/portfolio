"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { lang, t } = useLang();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-white/50 mb-8">Project not found</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const data = project[lang];

  // Find prev/next projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-600/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-[15%] right-[-8%] w-[35%] h-[35%] bg-purple-600/8 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/#projects")}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 sm:mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">
            {lang === "en" ? "Back to all projects" : "กลับไปหน้าผลงาน"}
          </span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg text-white/55 max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 sm:mb-14"
        >
          <ImageCarousel images={project.images} alt={data.title} />
        </motion.div>

        {/* Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14"
        >
          {/* Role */}
          <div className="glass p-6">
            <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
              {t.projects.role}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{data.role}</p>
          </div>

          {/* Tech Stack */}
          <div className="glass p-6">
            <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
              {t.projects.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub */}
          <div className="glass p-6 flex flex-col justify-between">
            <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
              {lang === "en" ? "Source Code" : "ซอร์สโค้ด"}
            </h3>
            <a
              href={project.githubUrl || "https://github.com/wongsakron"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors truncate"
              title={project.githubUrl || "https://github.com/wongsakron"}
            >
              <Code2 className="w-4 h-4 shrink-0" />
              <span className="truncate">
                {project.githubUrl
                  ? project.githubUrl.replace("https://github.com/", "")
                  : "github.com/wongsakron"}
              </span>
            </a>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass p-6 sm:p-8 mb-10 sm:mb-14"
        >
          <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-6">
            {t.projects.highlights}
          </h3>
          <ul className="space-y-4">
            {data.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className="flex gap-3 text-sm text-white/65 leading-relaxed"
              >
                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 bg-gradient-to-r ${project.color}`} />
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Prev / Next Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-between"
        >
          {prevProject ? (
            <button
              onClick={() => router.push(`/projects/${prevProject.id}`)}
              className="glass p-4 sm:p-5 flex items-center gap-4 hover:bg-white/[0.05] transition-colors group flex-1"
            >
              <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
              <div className="text-left">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                  {lang === "en" ? "Previous" : "ก่อนหน้า"}
                </p>
                <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  {prevProject[lang].title}
                </p>
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <button
              onClick={() => router.push(`/projects/${nextProject.id}`)}
              className="glass p-4 sm:p-5 flex items-center gap-4 hover:bg-white/[0.05] transition-colors group flex-1 justify-end"
            >
              <div className="text-right">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                  {lang === "en" ? "Next" : "ถัดไป"}
                </p>
                <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  {nextProject[lang].title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
