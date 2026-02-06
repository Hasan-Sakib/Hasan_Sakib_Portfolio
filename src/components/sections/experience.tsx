"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Acciptra",
    role: "AI Engineer",
    period: "2024 — Present",
    location: "Remote",
    highlights: [
      "Designed and deployed ML-powered systems for real-time decision-making.",
      "Built internal tools that visualise model behavior with interactive 3D views.",
      "Collaborated closely with product teams to ship AI features end‑to‑end.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 space-y-8 md:space-y-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title text-[0.7rem] font-semibold uppercase text-cyan-300/80">
            Experience
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Building AI experiences in production.
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-slate-700/60 to-transparent md:left-1/2" />

        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="relative grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start md:gap-10"
            >
              <div className="relative pl-10 md:pl-0 md:pr-8 md:text-right">
                <div className="absolute left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/70 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.9)] md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-3.5 w-3.5 text-cyan-200" />
                </div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {exp.period}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  {exp.location}
                </p>
              </div>

              <div className="glass-card relative overflow-hidden p-5 sm:p-6">
                <div className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="relative space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-300/90">{exp.company}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300/90">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

