import { writing, skills } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function WritingSection() {
  const featuredSkills = skills.slice(0, 4);

  return (
    <section id="writing" className="py-24 px-6 md:px-12 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-2">05 — WRITING</p>
          <h2 className="text-white font-syne font-black text-4xl md:text-5xl mb-12">
            Articles & Thoughts
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Articles */}
          <div className="space-y-0">
            {writing.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.08}>
                <a
                  href={`/writing/${article.slug}`}
                  className="group block border-t border-[#2A2A2A] py-6 hover:bg-[#161616] -mx-4 px-4 rounded transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`font-syne text-xs px-2 py-0.5 rounded ${
                            article.category === "Design"
                              ? "bg-[#C8FF00]/10 text-[#C8FF00]"
                              : "bg-[#1E1E1E] text-[#999999]"
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className="text-[#666666] font-syne text-xs">{article.date}</span>
                      </div>
                      <h3 className="text-white font-syne font-bold text-base group-hover:text-[#C8FF00] transition-colors mb-1">
                        {article.title}
                      </h3>
                      <p className="text-[#666666] text-sm leading-relaxed">{article.excerpt}</p>
                    </div>
                    <div className="text-[#666666] group-hover:text-[#C8FF00] transition-colors text-lg mt-1">
                      →
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar info */}
          <div>
            <ScrollReveal>
              <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8">
                <h3 className="text-white font-syne font-bold text-lg mb-2">Core Skills</h3>
                <p className="text-[#666666] text-sm mb-6">Technologies I work with daily</p>
                <div className="space-y-4">
                  {featuredSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#999999] font-syne text-xs">{skill.name}</span>
                        <span className="text-[#C8FF00] font-syne text-xs">{skill.percentage}%</span>
                      </div>
                      <div className="h-1 bg-[#2A2A2A] rounded-full">
                        <div
                          className="h-full bg-[#C8FF00] rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-6 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8">
                <p className="text-[#C8FF00] font-syne font-black text-4xl mb-1">4</p>
                <p className="text-[#999999] font-syne text-xs tracking-widest">ARTICLES PUBLISHED</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
