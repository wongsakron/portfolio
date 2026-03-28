"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Server, Database, Code2, Wrench, Container, Monitor } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const skillData = [
  {
    key: "frontend" as const,
    icon: LayoutTemplate,
    color: "text-blue-400",
    items: ["Next.js", "Angular", "React", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    key: "backend" as const,
    icon: Server,
    color: "text-purple-400",
    items: [".NET Core Web API", "Python", "C#", "Node.js"],
  },
  {
    key: "database" as const,
    icon: Database,
    color: "text-emerald-400",
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Supabase", "Elastic"],
  },
  {
    key: "devops" as const,
    icon: Container,
    color: "text-orange-400",
    items: ["Docker", "CI/CD", "Git", "Cloudflare R2", "Kibana", "n8n"],
  },
  {
    key: "server" as const,
    icon: Monitor,
    color: "text-cyan-400",
    items: ["Ubuntu", "Linux"],
  },
  {
    key: "languages" as const,
    icon: Code2,
    color: "text-amber-400",
    items: ["Python", "C#", "C", "Java", "TypeScript", "JavaScript"],
  },
];

export default function Skills() {
  const { t } = useLang();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
          <Wrench className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          <span className="text-blue-400 font-mono text-lg">03.</span> {t.skills.title}
          <div className="hidden sm:block flex-1 h-px bg-white/10 ml-4" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Skill cards */}
          {skillData.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.key}
                variants={fadeInUp}
                className="glass p-6 hover:bg-white/[0.05] transition-colors group"
              >
                <Icon className={`w-7 h-7 ${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-base font-semibold text-white mb-4">
                  {t.skills.categories[skill.key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white/80 hover:border-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Education card - spans 2 cols */}
          <motion.div
            variants={fadeInUp}
            className="glass p-6 sm:col-span-2 hover:bg-white/[0.05] transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                  {t.skills.education}
                </p>
                <h3 className="text-lg font-bold text-white mb-1">{t.skills.university}</h3>
                <p className="text-white/55 text-sm mb-1">{t.skills.degree}</p>
                <p className="text-white/40 text-xs font-mono">{t.skills.year}</p>
              </div>
              <div className="inline-block self-start sm:self-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 font-mono text-lg font-bold border border-blue-500/20">
                {t.skills.gpa}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
