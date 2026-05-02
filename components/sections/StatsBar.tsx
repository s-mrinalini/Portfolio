import { stats } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function StatsBar() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-[var(--accent-text)] font-syne font-black text-5xl md:text-6xl mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--text-secondary)] font-syne text-xs tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
