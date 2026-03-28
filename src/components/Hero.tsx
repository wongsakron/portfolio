"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Code2, Download } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="min-h-[85vh] flex items-center scroll-mt-24">
      <div className="flex w-full items-center justify-between gap-12">
        {/* Left — text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Greeting */}
          <p className="text-lg sm:text-xl text-white/50 mb-2 font-medium">
            {t.hero.greeting}
          </p>

          {/* Name — Thai: single line, English: two lines */}
          {lang === "th" ? (
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {t.hero.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                {t.hero.surname}
              </span>
            </h1>
          ) : (
            <>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-2 leading-tight">
                {t.hero.name}
              </h1>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  {t.hero.surname}
                </span>
              </h1>
            </>
          )}

          {/* Role */}
          <div className="inline-block px-4 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono mb-6">
            {"<"} {t.hero.role} {"/>"}
          </div>

          {/* Summary */}
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mb-10 leading-relaxed">
            {t.hero.summary}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:wongsakron.kpg@gmail.com"
              className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all font-medium hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              {t.hero.contactBtn}
            </a>
            <a
              href={lang === "th" ? "/FB_Wongsakorn_TH.pdf" : "/FB_Wongsakorn_ENG.pdf"}
              download
              className="px-6 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all font-medium hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              {t.hero.resumeBtn}
            </a>
            <a
              href="https://github.com/wongsakron"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all font-medium border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Code2 className="w-4 h-4" />
              {t.hero.githubBtn}
            </a>
          </div>
        </motion.div>

        {/* Right — profile photo (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block shrink-0"
        >
          <div className="relative w-80 h-80 xl:w-[22rem] xl:h-[22rem]">
            {/* Subtle radial background glow */}
            <div className="absolute -inset-20 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/8 to-transparent blur-3xl" />

            {/* Animated orbit ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-white/[0.04]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/40" />
            </motion.div>

            {/* Animated orbit ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-14 rounded-full border border-dashed border-white/[0.03]"
            >
              <div className="absolute bottom-0 right-4 w-1.5 h-1.5 rounded-full bg-purple-400/30" />
            </motion.div>

            {/* Pulsing glow ring */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 blur-2xl"
            />

            {/* Gradient border ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-60" />
            <div className="absolute -inset-0 rounded-full bg-[#020617]" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
              <Image
                src="/me.png"
                alt="Wongsakorn Khaophong"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 416px, 384px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
