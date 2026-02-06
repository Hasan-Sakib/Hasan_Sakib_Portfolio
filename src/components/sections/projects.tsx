"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Neural Insight",
    subtitle: "3D Model Explainability",
    description:
      "An interactive 3D environment for visualising attention maps, embeddings, and decision boundaries of deep models in real time.",
    image: "/window.svg",
    liveUrl: "#",
    sourceUrl: "#",
    tags: ["React Three Fiber", "Next.js", "Framer Motion", "Python backend"],
  },
  {
    title: "RAG Studio",
    subtitle: "LLM Retrieval Playground",
    description:
      "A visual interface to compare RAG pipelines, inspect chunks, and tune vector search — built for fast iteration on LLM products.",
    image: "/globe.svg",
    liveUrl: "#",
    sourceUrl: "#",
    tags: ["RAG", "LangChain", "tRPC", "Tailwind"],
  },
  {
    title: "Sense Grid",
    subtitle: "Multimodal Analytics",
    description:
      "Dashboard for streaming video, sensor data, and model outputs with dense UI but calm, focused interaction patterns.",
    image: "/file.svg",
    liveUrl: "#",
    sourceUrl: "#",
    tags: ["Computer Vision", "WebSockets", "D3", "Three.js"],
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 space-y-8 md:space-y-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title text-[0.7rem] font-semibold uppercase text-cyan-300/80">
            Projects & Research
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Selected work at the edge of AI & UX.
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <TiltCard key={project.title} index={index}>
            <article className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80">
                  <div className="relative h-32 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center opacity-90"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-4 top-3 flex items-center justify-between text-[0.65rem] text-slate-200/90">
                    <span className="rounded-full bg-slate-950/80 px-2 py-0.5 backdrop-blur">
                      {project.subtitle}
                    </span>
                    <span className="rounded-full bg-slate-950/80 px-2 py-0.5 text-cyan-200/90 backdrop-blur">
                      Featured
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300/90">
                    {project.description}
                  </p>
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.65rem] text-slate-300/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 text-[0.75rem]">
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/90 px-3 py-1 font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/80 bg-slate-950/80 px-3 py-1 font-medium text-slate-100 shadow-[0_0_30px_rgba(15,23,42,0.95)] transition hover:border-cyan-300/80 hover:text-cyan-100"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

type TiltCardProps = {
  children: React.ReactNode;
  index: number;
};

const TiltCard = ({ children, index }: TiltCardProps) => {
  const [transform, setTransform] = useState<string>(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    );
  };

  const handleLeave = () => {
    setTransform(
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full rounded-3xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-[0_20px_70px_rgba(15,23,42,1)] transition-transform duration-150"
    >
      <div className="pointer-events-none absolute -inset-x-6 -top-24 h-40 bg-gradient-to-b from-cyan-400/40 via-purple-500/30 to-transparent opacity-70 blur-2xl" />
      <div className="relative flex h-full flex-col justify-between">{children}</div>
    </motion.div>
  );
};

