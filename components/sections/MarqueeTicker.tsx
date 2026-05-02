import { marqueeTools } from "@/data/portfolio";

export default function MarqueeTicker() {
  const doubled = [...marqueeTools, ...marqueeTools];

  return (
    <section className="py-6 border-t border-b border-[var(--border)] overflow-hidden bg-[var(--bg-primary)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tool, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-[var(--accent-text)] font-syne font-bold text-xs tracking-[0.2em]">
              {tool}
            </span>
            <span className="text-[var(--border)] text-xs">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
