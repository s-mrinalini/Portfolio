"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-syne text-[var(--text-muted)] text-[11px] tracking-[0.3em] uppercase mb-6 text-center z-10"
      >
        {personalInfo.tagline}
      </motion.p>

      {/* Name + photo overlap container */}
      <div className="relative flex flex-col items-center select-none">
        {/* Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-syne font-black uppercase leading-[0.88] text-center tracking-tight"
          style={{
            fontSize: "clamp(64px, 12vw, 180px)",
            color: "var(--hero-name)",
          }}
        >
          {personalInfo.firstName}
        </motion.h1>

        {/* Line 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-syne font-black uppercase leading-[0.88] text-center tracking-tight"
          style={{
            fontSize: "clamp(64px, 12vw, 180px)",
            color: "var(--hero-name)",
          }}
        >
          {personalInfo.lastName}
        </motion.h1>

        {/* Photo overlapping the name — centered absolutely */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            className="overflow-hidden shadow-2xl"
            style={{
              width: "clamp(160px, 18vw, 260px)",
              height: "clamp(220px, 25vw, 360px)",
              borderRadius: "50%",
            }}
          >
            {/* Photo placeholder — replace src with actual image */}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #1E1E1E 0%, #111 60%, #0a1a00 100%)",
              }}
            >
              <span
                className="font-syne font-black text-[var(--accent)] select-none"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                MS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[var(--text-muted)]" />
        </motion.div>
        <span className="text-[var(--text-muted)] text-[10px] font-syne tracking-[0.25em]">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
