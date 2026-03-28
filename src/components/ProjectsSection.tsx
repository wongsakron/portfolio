"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, FolderKanban, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from "lucide-react";
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

// ---- Fuzzy-like search: match if all keywords appear in text ----
function fuzzyMatch(text: string, query: string): boolean {
  const lower = text.toLowerCase();
  const keywords = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return keywords.every((kw) => lower.includes(kw));
}

const PER_PAGE_OPTIONS = [4, 10, 20];

export default function ProjectsSection() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  // Filter projects based on search query
  const filtered = useMemo(() => {
    if (!search.trim()) return projects;
    return projects.filter((p) => {
      const data = p[lang];
      const searchable = [
        data.title,
        data.shortDesc,
        data.description,
        ...p.tech,
      ].join(" ");
      return fuzzyMatch(searchable, search);
    });
  }, [search, lang]);

  // Reset to page 1 when search or perPage changes
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const startIdx = (currentPage - 1) * perPage;
  const displayed = filtered.slice(startIdx, startIdx + perPage);

  const goTo = (p: number) => setPage(Math.max(1, Math.min(totalPages, p)));

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
        <p className="text-white/40 mb-6 sm:mb-8 text-sm">
          {t.projects.subtitle}
        </p>

        {/* Search + per-page controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder={lang === "en" ? "Search projects..." : "ค้นหาโปรเจกต์..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
            />
          </div>

          {/* Per page dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm text-white/40">
              {lang === "en" ? "Show:" : "แสดง:"}
            </span>
            <div className="relative group">
              <select
                value={perPage}
                onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}
                className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer shadow-sm"
              >
                {PER_PAGE_OPTIONS.map((n) => (
                  <option key={n} value={n} className="bg-[#0f172a] text-white">
                    {n}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none group-hover:text-white/70 transition-colors" />
            </div>
            <span className="text-sm text-white/40 hidden sm:inline-block">
              {lang === "en" ? `of ${filtered.length} items` : `จาก ${filtered.length} รายการ`}
            </span>
          </div>
        </div>

        {/* Project grid or empty state */}
        {displayed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-white/30">
            <Search className="w-10 h-10 mb-4 opacity-30" />
            <p className="text-sm">
              {lang === "en" ? "No projects found" : "ไม่พบโปรเจกต์ที่ค้นหา"}
            </p>
          </div>
        )}

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10">
            {/* First */}
            <button
              onClick={() => goTo(1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="First page"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            {/* Prev */}
            <button
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all
                  ${p === currentPage
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                    : "border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.06]"
                  }`}
              >
                {p}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Last */}
            <button
              onClick={() => goTo(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="Last page"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
