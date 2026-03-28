"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, User, Briefcase, FolderKanban, Wrench, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const navIcons = [User, Briefcase, FolderKanban, Wrench, MessageCircle];

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for solid navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  // Scroll spy — detect which section is in view
  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(2, 6, 23, 0.95)" : undefined,
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b shadow-lg shadow-black/20 ${
        scrolled ? "border-white/8" : "border-white/[0.03]"
      } max-md:!bg-[rgb(2,6,23)] max-md:border-white/10`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex justify-between items-center">
        <a href={isHome ? "#" : "/"} className="font-bold text-xl tracking-tighter text-white">
          WK<span className="text-blue-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link, i) => {
            const Icon = navIcons[i];
            const isActive = isHome && activeSection === link.href;
            const fullHref = isHome ? link.href : `/${link.href}`;
            return (
              <a
                key={link.href}
                href={fullHref}
                onClick={(e) => {
                  if (!isHome) {
                    e.preventDefault();
                    router.push(`/${link.href}`);
                  }
                }}
                className={`relative flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group
                  ${isActive ? "text-white bg-white/[0.08]" : "text-white/50 hover:text-white hover:bg-white/[0.04]"}`}
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-white/40 group-hover:text-blue-300"}`} />
                {link.label}
                {/* Active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-xs font-bold hover:from-blue-500/30 hover:to-purple-500/30 transition-all hover:scale-105 active:scale-95 text-blue-200"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4" />
            {lang === "en" ? "เปลี่ยนภาษา | TH" : "Change Lang | EN"}
          </button>
        </nav>

        {/* Mobile & Tablet toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-xs font-bold hover:from-blue-500/30 hover:to-purple-500/30 transition-all active:scale-95 text-blue-200"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "en" ? "TH" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-3 flex flex-col gap-1">
              {links.map((link, i) => {
                const Icon = navIcons[i];
                const isActive = isHome && activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      if (isHome) {
                        const id = link.href.replace("#", "");
                        setTimeout(() => {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      } else {
                        router.push(`/${link.href}`);
                      }
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${isActive ? "text-white bg-white/[0.08]" : "text-white/60 hover:text-white hover:bg-white/[0.04]"}`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-white/40"}`} />
                    {link.label}
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
