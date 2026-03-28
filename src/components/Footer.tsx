"use client";

import { Mail, Phone, MapPin, Code2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="w-full py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white/40 text-sm font-medium">{t.footer.built}</p>
            <p className="text-white/20 text-xs mt-1">© 2026 {t.footer.rights}</p>
          </div>
          <div className="flex items-center gap-6 text-white/30 text-xs">
            <a href="mailto:wongsakron.kpg@gmail.com" className="hover:text-white/60 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 081-490-7239
            </span>
            <a href="https://github.com/wongsakron" target="_blank" rel="noreferrer" className="hover:text-white/60 transition-colors flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
