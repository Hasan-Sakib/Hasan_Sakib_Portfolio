"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const educationItems = [
  {
    label: "School",
    title: "Secondary Education",
    meta: "Foundations in mathematics, physics & computing.",
    accent: "from-cyan-400/70 to-sky-400/60",
    logo: "/logos/school.png",
  },
  {
    label: "College",
    title: "Higher Secondary",
    meta: "Deepened STEM focus with competitive programming.",
    accent: "from-purple-400/70 to-fuchsia-400/60",
    logo: "/logos/college.png",
  },
  {
    label: "University",
    title: "East West University",
    meta: "Formal training in Computer Science and AI.",
    accent: "from-emerald-400/70 to-cyan-400/60",
    logo: "/logos/university.png",
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 space-y-8 md:space-y-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title text-[0.7rem] font-semibold uppercase text-cyan-300/80">
            Education
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            A layered path into AI.
          </h2>
        </div>
      </div>

      <div className="bento-grid grid gap-4 md:grid-cols-3">
        {educationItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              rotateX: 6,
              rotateY: -6 + index * 4,
              boxShadow:
                "0 25px 80px rgba(15,23,42,0.95), 0 0 80px rgba(56,189,248,0.7)",
            }}
            className="tilt-card relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90 p-4 shadow-[0_18px_60px_rgba(15,23,42,1)]"
          >
            <div
              className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${item.accent} opacity-40 blur-3xl`}
            />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
                {/* Logo Placeholder */}
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-800/50">
                  <Image
                    src={item.logo}
                    alt={`${item.label} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300/90">{item.meta}</p>
              <div className="mt-2 flex justify-between text-[0.65rem] text-slate-400">
                <span>Self‑driven projects</span>
                <span>AI & systems thinking</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

