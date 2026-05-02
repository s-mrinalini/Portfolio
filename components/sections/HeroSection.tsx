"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 md:py-0 px-6 md:px-12"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-6"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-syne font-black text-white leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {personalInfo.firstName}
            </motion.h1>
            <motion.h1
              variants={item}
              className="font-syne font-black leading-none mb-8"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                WebkitTextStroke: "1px #2A2A2A",
                color: "transparent",
              }}
            >
              {personalInfo.lastName}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[#999999] font-syne text-sm tracking-widest uppercase mb-8"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div variants={item} className="flex gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#C8FF00] text-black font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:bg-[#D4FF33] transition-colors"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#2A2A2A] text-white font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ background: "linear-gradient(135deg, #1E1E1E 0%, #161616 50%, #0E1A00 100%)" }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8FF00]/10 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#C8FF00]/20 flex items-center justify-center mb-4">
                  <span className="text-[#C8FF00] font-syne font-black text-3xl">MS</span>
                </div>
                <p className="text-[#666666] text-xs font-syne tracking-widest">MRINALINI S</p>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-6 right-6 bg-[#C8FF00] text-black font-syne font-bold text-xs px-3 py-1.5 rounded">
                AVAILABLE FOR HIRE
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-6 bottom-16 bg-[#161616] border border-[#2A2A2A] rounded-xl px-5 py-4"
            >
              <p className="text-[#C8FF00] font-syne font-black text-2xl">5+</p>
              <p className="text-[#999999] text-xs font-syne tracking-wide">Years Experience</p>
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
            <ArrowDown size={16} className="text-[#666666]" />
          </motion.div>
          <span className="text-[#666666] text-xs font-syne tracking-widest">SCROLL TO EXPLORE</span>
        </motion.div>
      </div>
    </section>
  );
}
