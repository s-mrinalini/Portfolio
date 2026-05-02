"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-8 lg:py-0 px-6 md:px-12"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="text-[var(--accent-text)] font-syne text-xs tracking-[0.2em] uppercase mb-6"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-syne font-black text-[var(--text-primary)] leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {personalInfo.firstName}
            </motion.h1>
            <motion.h1
              variants={item}
              className="font-syne font-black leading-none mb-8"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                WebkitTextStroke: "1px var(--border)",
                color: "transparent",
              }}
            >
              {personalInfo.lastName}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[var(--text-secondary)] font-syne text-sm tracking-widest uppercase mb-8"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div variants={item} className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[var(--accent)] text-black font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:bg-[var(--accent-hover)] transition-colors"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[var(--border)] text-[var(--text-primary)] font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:border-[var(--accent-text)] hover:text-[var(--accent-text)] transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ background: "linear-gradient(135deg, var(--bg-surface-hover) 0%, var(--bg-surface) 50%, #0E1A00 100%)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
                  <span className="text-[var(--accent-text)] font-syne font-black text-3xl">MS</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs font-syne tracking-widest">MRINALINI S</p>
              </div>
              <div className="absolute bottom-6 right-6 bg-[var(--accent)] text-black font-syne font-bold text-xs px-3 py-1.5 rounded">
                AVAILABLE FOR HIRE
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-6 bottom-16 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-5 py-4"
            >
              <p className="text-[var(--accent-text)] font-syne font-black text-2xl">5+</p>
              <p className="text-[var(--text-secondary)] text-xs font-syne tracking-wide">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="text-[var(--text-muted)]" />
          </motion.div>
          <span className="text-[var(--text-muted)] text-xs font-syne tracking-widest">SCROLL TO EXPLORE</span>
        </motion.div>
      </div>
    </section>
  );
}
