"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Code2, Database, LayoutTemplate, Server } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass rounded-none border-t-0 border-l-0 border-r-0 py-4 px-6 sm:px-12 flex justify-between items-center shadow-sm shadow-black/50">
        <div className="font-bold text-xl tracking-tighter">WK.</div>
        <nav className="hidden sm:flex gap-8 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 text-xs font-medium text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for work (Apr 17, 2026)
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Wongsakorn <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Khaophong</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
              A 4th-year Information Technology student with expertise in Full-Stack development, automation, and data analysis. I build scalable end-to-end systems with clean code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:wongsakron.kpg@gmail.com" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors font-medium">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a href="https://github.com/wongsakron" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-colors font-medium border border-white/10">
                <Code2 className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-blue-400">01.</span> Experience
            </h2>
            
            <div className="space-y-12 border-l border-white/10 ml-4 pl-8 sm:pl-12 relative">
              {/* Job 1 */}
              <div className="relative">
                <div className="absolute -left-[3.35rem] sm:-left-[4.35rem] top-1 p-2 bg-[#020617] rounded-full border border-white/10">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer <span className="text-blue-400 font-normal">@ H S P Intelligence</span></h3>
                <p className="text-sm text-white/50 mb-4 font-mono">Dec 2025 – Mar 2026 | Co-operative Education</p>
                <ul className="space-y-3 text-white/70 leading-relaxed">
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>VeloJob Project:</strong> Designed architecture and developed end-to-end Biosoft Job Portal using Next.js, .NET Core Web API, and SQL Server.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Integrated <strong>Smart Location-Based Routing</strong> with openRouteService API for turn-by-turn navigation.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Developed <strong>AI Resume Parsing</strong> for automated data extraction and built a strict RBAC security system compliant with PDPA.</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative pt-4">
                <div className="absolute -left-[3.35rem] sm:-left-[4.35rem] top-5 p-2 bg-[#020617] rounded-full border border-white/10">
                  <div className="w-3 h-3 bg-purple-400 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer <span className="text-purple-400 font-normal">@ Neer Code Co., Ltd.</span></h3>
                <p className="text-sm text-white/50 mb-4 font-mono">Feb 2025 – Mar 2026 | Freelance & Intern</p>
                <ul className="space-y-3 text-white/70 leading-relaxed">
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Built real-time interactive dashboards using Kibana Maps and Geo-index to visualize spatial data.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Trained a Python-based <strong>Machine Learning model</strong> to analyze urine color for preliminary drug screening.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Developed an end-to-end <strong>Internal AI Assistant</strong> (RAG) using pgvector and a local LLM (Ollama).</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-blue-400">02.</span> Skills & Education
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="glass p-8 hover:bg-white/[0.07] transition-colors group">
                <LayoutTemplate className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-white">Frontend & UI</h3>
                <p className="text-white/60 leading-relaxed">
                  Next.js, Angular, React, Tailwind CSS, Bootstrap 5. Building responsive, accessible, and highly interactive user interfaces.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass p-8 hover:bg-white/[0.07] transition-colors group">
                <Server className="w-8 h-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-white">Backend & API</h3>
                <p className="text-white/60 leading-relaxed">
                  .NET Core Web API, Python, C#, Node.js. Designing robust scalable architectures and RESTful services.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass p-8 hover:bg-white/[0.07] transition-colors group">
                <Database className="w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-white">Database & DevOps</h3>
                <p className="text-white/60 leading-relaxed">
                  PostgreSQL, SQL Server, MongoDB, Supabase, Docker, CI/CD, Git, Cloudflare R2, Elastic/Kibana.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass p-8 hover:bg-white/[0.07] transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                <p className="text-white/80 font-medium mb-1">Rajamangala University of Technology Srivijaya</p>
                <p className="text-white/60 text-sm mb-4">B.S. Information Technology (2022 - 2026)</p>
                <div className="inline-block px-3 py-1 rounded bg-blue-500/20 text-blue-300 font-mono text-sm border border-blue-500/20">
                  GPA: 3.87
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-white/40 text-sm font-medium border-t border-white/5">
        <p className="mb-2">Designed & Built by Wongsakorn Khaophong</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:wongsakron.kpg@gmail.com" className="hover:text-white transition-colors flex items-center gap-2"><Mail className="w-4 h-4"/> Email</a>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4"/> 081-490-7239</span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Thung Song</span>
        </div>
      </footer>
    </div>
  );
}
