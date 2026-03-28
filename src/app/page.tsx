"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-600/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-[15%] right-[-8%] w-[35%] h-[35%] bg-purple-600/8 blur-[140px] rounded-full" />
        <div className="absolute top-[50%] left-[30%] w-[25%] h-[25%] bg-emerald-600/5 blur-[120px] rounded-full" />

        {/* Orbit ring 1 — large, slow, top-right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full border border-white/[0.03]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/25" />
        </motion.div>

        {/* Orbit ring 2 — medium, mid-left */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] rounded-full border border-dashed border-white/[0.02]"
        >
          <div className="absolute bottom-0 right-8 w-1 h-1 rounded-full bg-purple-400/20" />
        </motion.div>

        {/* Orbit ring 3 — small, bottom-right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] right-[15%] w-[300px] h-[300px] rounded-full border border-white/[0.025]"
        >
          <div className="absolute top-4 right-0 w-1 h-1 rounded-full bg-emerald-400/20" />
        </motion.div>
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-12 pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-20 sm:space-y-28">
        <Hero />
        <Experience />
        <ProjectsSection />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
