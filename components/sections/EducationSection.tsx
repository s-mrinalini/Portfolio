import { education } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[var(--accent-text)] font-syne text-xs tracking-[0.2em] uppercase mb-2">04 — EDUCATION</p>
          <h2 className="text-[var(--text-primary)] font-syne font-black text-4xl md:text-5xl mb-12">
            Education
          </h2>
        </ScrollReveal>

        <div className="space-y-0 max-w-4xl">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-t border-[var(--border)] py-8 grid md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <p className="text-[var(--text-muted)] font-syne text-xs tracking-widest mb-2">{edu.period}</p>
                  <p className="text-[var(--accent-text)] font-syne font-bold text-sm">{edu.institution}</p>
                </div>
                <div>
                  <h3 className="text-[var(--text-primary)] font-syne font-bold text-lg mb-3">{edu.degree}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{edu.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
