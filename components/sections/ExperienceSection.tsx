import { experience } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-2">03 — EXPERIENCE</p>
          <h2 className="text-white font-syne font-black text-4xl md:text-5xl mb-12">
            Work History
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-t border-[#2A2A2A] py-8 grid md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <p className="text-[#666666] font-syne text-xs tracking-widest mb-2">{exp.period}</p>
                  <p className="text-[#C8FF00] font-syne font-bold text-sm">{exp.company}</p>
                </div>
                <div>
                  <h3 className="text-white font-syne font-bold text-lg mb-3">{exp.title}</h3>
                  <p className="text-[#999999] leading-relaxed text-sm">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
