"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const gradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #11998e 100%)",
  "linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #0d6e6e 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 50%, #4a2c00 100%)",
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-2">02 — PROJECTS</p>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-white font-syne font-black text-4xl md:text-5xl">
              Selected Work
            </h2>
            <span className="text-[#666666] font-syne text-xs tracking-widest hidden md:block">
              {projects.length} PROJECTS
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="bg-[#161616] border border-[#2A2A2A] rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Image placeholder */}
                <div
                  className="aspect-video relative overflow-hidden"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 font-syne font-black text-5xl">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0E0E0E]/80 text-[#C8FF00] font-syne text-xs tracking-widest px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-[#C8FF00] rounded-full flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-syne font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#999999] font-syne text-xs border border-[#2A2A2A] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
