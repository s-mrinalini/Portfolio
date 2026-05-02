"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-2">01 — ABOUT</p>
          <h2 className="text-white font-syne font-black text-4xl md:text-5xl mb-12">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            {personalInfo.bio.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-[#999999] leading-relaxed mb-6">{para}</p>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex gap-4 flex-wrap">
                <a
                  href={personalInfo.resumeUrl}
                  className="border border-[#C8FF00] text-[#C8FF00] font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:bg-[#C8FF00] hover:text-black transition-colors"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Skills */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: { name: string; percentage: number }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-white font-syne text-sm">{skill.name}</span>
        <span className="text-[#C8FF00] font-syne text-sm font-bold">{skill.percentage}%</span>
      </div>
      <div className="h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.07, ease: "easeOut" }}
          className="h-full bg-[#C8FF00] rounded-full"
        />
      </div>
    </div>
  );
}
