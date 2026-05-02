import { marqueeTools } from "@/data/portfolio";

export default function MarqueeTicker() {
  const doubled = [...marqueeTools, ...marqueeTools];

  return (
    <section className="py-6 border-t border-b border-[#2A2A2A] overflow-hidden bg-[#0E0E0E]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tool, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-[#C8FF00] font-syne font-bold text-xs tracking-[0.2em]">
              {tool}
            </span>
            <span className="text-[#2A2A2A] text-xs">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
