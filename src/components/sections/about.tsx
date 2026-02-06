"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  "Next.js",
  "TypeScript",
  "React Three Fiber",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "LangChain",
  "RAG Systems",
  "LLM Ops",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 space-y-8 md:space-y-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title text-[0.7rem] font-semibold uppercase text-cyan-300/80">
            About
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Human in the loop of intelligent systems.
          </h2>
        </div>
        <p className="hidden max-w-xs text-xs text-slate-400 md:block">
          I design experiences where complex AI systems feel intuitive, visual
          and almost playful—without sacrificing rigor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.1fr_minmax(0,1.1fr)]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card relative overflow-hidden p-5 sm:p-6"
        >
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mb-4 flex items-start gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              <Image
                src="/sakib.jpg"
                alt="Md. Sakib Hasan"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          </div>

          <div className="relative space-y-4 text-sm text-slate-200/90">
            <p>
              I&apos;m an{" "}
              <span className="font-semibold text-cyan-300">
                AI Engineer & Creative Developer
              </span>{" "}
              passionate about combining deep learning, data, and 3D
              interactions to build expressive products.
            </p>
            <p>
              From real‑time inference dashboards to interactive 3D explainability
              tools, I love turning abstract neural behavior into{" "}
              <span className="text-slate-50">tangible visual stories</span>.
            </p>
            <p>
              My work lives at the edge of{" "}
              <span className="text-slate-50">human‑computer interaction</span>{" "}
              and{" "}
              <span className="text-slate-50">applied machine learning</span> —
              building interfaces that are fast, elegant, and deeply informed by
              the underlying models.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex flex-col gap-4 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Tech Stack
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.04 },
              },
            }}
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                  boxShadow:
                    "0 18px 40px rgba(8,47,73,0.95), 0 0 40px rgba(34,211,238,0.7)",
                }}
                className="relative overflow-hidden rounded-full border border-cyan-500/30 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] font-medium text-cyan-100/90 shadow-[0_18px_35px_rgba(15,23,42,0.95)]"
              >
                <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/70 to-cyan-400/0" />
                <span className="relative">{tech}</span>
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-2 grid grid-cols-3 gap-3 text-[0.65rem] text-slate-300/80">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
              <p className="uppercase tracking-[0.18em] text-slate-500">
                Specialty
              </p>
              <p className="mt-1 font-medium text-slate-100">
                LLM apps, RAG, tools
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
              <p className="uppercase tracking-[0.18em] text-slate-500">
                Frontend
              </p>
              <p className="mt-1 font-medium text-slate-100">
                Next.js · 3D UI
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
              <p className="uppercase tracking-[0.18em] text-slate-500">
                Mindset
              </p>
              <p className="mt-1 font-medium text-slate-100">
                Experiment · Measure · Refine
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

