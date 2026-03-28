"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          <span className="text-blue-400 font-mono text-lg">04.</span> {t.contact.title}
        </h2>
        <p className="text-white/50 mb-8 sm:mb-12 text-sm sm:text-base">{t.contact.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="glass p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors group">
            <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-xs text-white/40 font-medium uppercase tracking-wider">{t.contact.email}</p>
            <a href="mailto:wongsakron.kpg@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors break-all">
              wongsakron.kpg@gmail.com
            </a>
          </div>

          <div className="glass p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors group">
            <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-xs text-white/40 font-medium uppercase tracking-wider">{t.contact.phone}</p>
            <a href="tel:0814907239" className="text-sm text-white/80 hover:text-white transition-colors">
              081-490-7239
            </a>
          </div>

          <div className="glass p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors group">
            <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs text-white/40 font-medium uppercase tracking-wider">{t.contact.location}</p>
            <p className="text-sm text-white/80">{t.contact.locationValue}</p>
          </div>
        </div>

        <a
          href="mailto:wongsakron.kpg@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all font-medium text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
        >
          <Send className="w-4 h-4" />
          {t.contact.hireMeBtn}
        </a>
      </motion.div>
    </section>
  );
}
