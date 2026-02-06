"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

type Status = "idle" | "loading" | "success" | "error";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = String(formData.get("user_name") || "").trim();
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMessage(
        "Email service is not configured yet. Please add your EmailJS keys."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 space-y-8 pb-4 md:space-y-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title text-[0.7rem] font-semibold uppercase text-cyan-300/80">
            Contact
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Let&apos;s build something intelligent together.
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card relative space-y-4 p-5 sm:p-6"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="user_name"
                className="text-[0.75rem] font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                className="h-10 w-full rounded-xl border border-slate-600/80 bg-slate-950/70 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="user_email"
                className="text-[0.75rem] font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="h-10 w-full rounded-xl border border-slate-600/80 bg-slate-950/70 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>
          </div>
          <div className="space-y-1.5 text-sm">
            <label
              htmlFor="message"
              className="text-[0.75rem] font-medium text-slate-200"
            >
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-xl border border-slate-600/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-500/40"
            />
          </div>

          {errorMessage && (
            <p className="text-xs text-rose-400">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-xs text-emerald-400">
              Message sent successfully. I&apos;ll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex flex-col gap-4 rounded-3xl border border-slate-700/80 bg-slate-950/90 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
        >
          <p className="text-sm text-slate-300/90">
            Prefer async communication first. Share as much context as possible
            about your product, research, or idea — I&apos;ll respond with
            concrete next steps, not just a hello.
          </p>

          <div className="mt-1 space-y-2 text-sm text-slate-300/90">
            <p>
              <span className="text-slate-400">Response time:</span> within{" "}
              <span className="font-medium text-slate-100">
                24–48 hours
              </span>
            </p>
            <p>
              <span className="text-slate-400">Available for:</span>{" "}
              <span className="font-medium text-slate-100">
                freelance, collaborations & research‑driven work
              </span>
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-[0.8rem]">
            <a
              href="mailto:mdsakibhasan960@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 transition hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" />
              mdsakibhasan960@gmail.com
            </a>
          </div>

          <div className="mt-3 flex gap-2">
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
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

