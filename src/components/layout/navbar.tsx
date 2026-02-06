"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:px-8">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-nav flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-xl md:px-6"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.65)]">
            <Image
              src="/sakib.jpg"
              alt="Md. Sakib Hasan"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
              AI Engineer
            </p>
            <p className="text-sm font-medium text-slate-50">
              Md. Sakib Hasan
            </p>
          </div>
          <motion.span
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [0, 10, 0], opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              opacity: { duration: 0.5 }, // Animate opacity only once
            }}
            className="hidden pl-4 text-xl text-cyan-100/90 md:inline-flex md:text-2xl [font-family:var(--font-signature)]"
          >
            Sakib
          </motion.span>
        </div>

        <div className="hidden items-center gap-6 text-xs font-medium text-slate-200/80 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href.replace("#", ""))}
              className="group relative cursor-pointer px-1 py-1 text-[0.78rem] tracking-wide text-slate-300/80 transition hover:text-cyan-300"
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-1 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/80 via-sky-300/80 to-purple-400/80 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="mailto:mdsakibhasan960@gmail.com"
            className="icon-btn"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Hasan-Sakib"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sakib-hasan-356304272/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn md:hidden"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sakib-hasan-356304272/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-cyan-400/90 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.75)] transition hover:bg-cyan-300 md:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

