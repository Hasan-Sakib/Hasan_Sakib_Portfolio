"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";

const heroParentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const childFadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const HeroSection = () => {
  return (
    <section id="home" className="relative mt-4 grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center">
      <motion.div
        variants={heroParentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-6 md:space-y-7"
      >
        <motion.div
          variants={childFadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/70 px-3 py-1 text-xs font-medium text-cyan-200/90 shadow-[0_0_30px_rgba(34,211,238,0.75)] backdrop-blur-xl"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          Available for AI & Frontend collaborations
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="space-y-5 md:space-y-6"
        >
          <motion.h1
            variants={childFadeUp}
            className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              intelligent
            </span>{" "}
            interfaces for the{" "}
            <span className="bg-gradient-to-r from-cyan-300/90 to-emerald-300/80 bg-clip-text text-transparent">
              AI-driven web.
            </span>
          </motion.h1>

          <motion.p
            variants={childFadeUp}
            className="max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base"
          >
            I&apos;m <span className="font-semibold text-cyan-300">Md. Sakib Hasan</span>, an
            AI Engineer at{" "}
            <span className="font-semibold text-sky-300">Acciptra</span> crafting
            high-fidelity experiences where neural networks meet pixel-perfect
            interfaces. I blend{" "}
            <span className="text-slate-100">machine intelligence</span> with{" "}
            <span className="text-slate-100">immersive 3D visuals</span> to tell compelling product stories.
          </motion.p>

          <motion.div
            variants={childFadeUp}
            className="flex flex-wrap gap-3 text-xs sm:text-sm"
          >
            <button className="group inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-4 py-2 font-semibold text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300">
              View projects
              <span className="translate-y-px text-base transition group-hover:translate-x-0.5">
                ↗
              </span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2 font-medium text-slate-100/90 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition hover:border-cyan-300/80 hover:text-cyan-100/95">
              Download CV
            </button>
          </motion.div>

          <motion.div
            variants={childFadeUp}
            className="grid grid-cols-3 gap-3 text-[0.65rem] text-slate-300/80 sm:text-[0.7rem] md:max-w-md"
          >
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.95)]">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-1 font-medium text-slate-100">
                AI interfaces & 3D UX
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.95)]">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Stack
              </p>
              <p className="mt-1 font-medium text-slate-100">
                Next.js · TS · R3F
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.95)]">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Location
              </p>
              <p className="mt-1 font-medium text-slate-100">
                Remote · Global
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="relative md:justify-self-end"
      >
        <div className="relative flex items-center justify-center rounded-[2rem] border border-slate-700/80 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black p-4 shadow-[0_25px_80px_rgba(15,23,42,0.95)]">
          {/* Profile container */}
          <div className="relative z-10 flex flex-col items-center gap-4 rounded-3xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_0_50px_rgba(15,23,42,0.9)] backdrop-blur-xl">
            <div className="relative h-28 w-28 overflow-hidden rounded-[1.2rem] border border-cyan-400/70 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-[0_0_80px_rgba(34,211,238,0.9)]">
              <Image
                src="/sakib.jpg"
                alt="Md. Sakib Hasan"
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
            <div className="space-y-1 text-center">
              <p className="text-[0.75rem] uppercase tracking-[0.26em] text-slate-400">
                AI Engineer · Acciptra
              </p>
              <p className="text-sm text-slate-300">
                Designing intelligent systems & immersive experiences.
              </p>
            </div>
          </div>

          {/* 3D neural network node */}
          <div className="pointer-events-none absolute -right-10 top-4 h-40 w-40 md:-right-16 md:top-3 md:h-52 md:w-52">
            <Suspense fallback={null}>
              <Canvas
                dpr={[1, 1.8]}
                camera={{ position: [0, 0, 6.5], fov: 35 }}
              >
                <color attach="background" args={["#020617"]} />
                <ambientLight intensity={0.8} />
                <directionalLight
                  position={[4, 6, 5]}
                  intensity={1.25}
                  color={"#38bdf8"}
                />
                <directionalLight
                  position={[-4, -6, -3]}
                  intensity={0.7}
                  color={"#a855f7"}
                />
                <NeuralNode />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Canvas>
            </Suspense>
          </div>

          {/* Floating labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pointer-events-none absolute -left-4 bottom-5 flex flex-col gap-2 text-[0.65rem]"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-slate-300/90 backdrop-blur-xl">
              <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Real‑time inference dashboards
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-slate-300/90 backdrop-blur-xl">
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              3D visual analytics
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

function NeuralNode() {
  // Simple animated neural node made from spheres & connecting lines
  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.8}
          roughness={0.1}
          emissive="#22d3ee"
          emissiveIntensity={0.9}
        />
      </mesh>

      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.3;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <group key={i} position={[x, y, Math.sin(angle) * 0.5]}>
            <mesh>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshStandardMaterial
                color="#a855f7"
                emissive="#a855f7"
                emissiveIntensity={0.75}
                metalness={0.9}
                roughness={0.15}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

