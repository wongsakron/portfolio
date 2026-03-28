"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const dotColors = ["bg-blue-400", "bg-purple-400"];

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          <span className="text-blue-400 font-mono text-lg">01.</span> {t.experience.title}
          <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
        </h2>

        <div className="space-y-8 sm:space-y-12 border-l border-white/10 ml-2 sm:ml-4 pl-6 sm:pl-12 relative">
          {t.experience.jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[3.35rem] sm:-left-[4.35rem] top-1 p-2 bg-[#020617] rounded-full border border-white/10">
                <div className={`w-3 h-3 ${dotColors[i % 2]} rounded-full`} />
              </div>

              {/* Content */}
              <div className="glass p-6 sm:p-8 hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${i === 0 ? "bg-blue-500/15 text-blue-300" : "bg-purple-500/15 text-purple-300"}`}>
                    {job.type}
                  </span>
                </div>
                <p className={`text-base font-semibold mb-1 ${i === 0 ? "text-blue-400" : "text-purple-400"}`}>
                  {job.company}
                </p>
                <p className="text-sm text-white/40 mb-1 font-mono">{job.period}</p>
                {"periodDetail" in job && job.periodDetail && (
                  <p className="text-xs text-white/30 mb-4 font-mono">{job.periodDetail}</p>
                )}
                {!("periodDetail" in job) && <div className="mb-4" />}

                <ul className="space-y-3 text-white/65 leading-relaxed text-sm">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <ArrowRight className={`w-4 h-4 ${i === 0 ? "text-blue-400" : "text-purple-400"} shrink-0 mt-0.5`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
