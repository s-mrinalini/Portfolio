import { writing, skills } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function WritingSection() {
  const featuredSkills = skills.slice(0, 4);

  return (
    <section id="writing" className="py-24 px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[var(--accent-text)] font-syne text-xs tracking-[0.2em] uppercase mb-2">05 — WRITING</p>
          <h2 className="text-[var(--text-primary)] font-syne font-black text-4xl md:text-5xl mb-12">
            Articles & Thoughts
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Articles */}
          <div className="space-y-0">
            {writing.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.08}>
                <a
                  href={`/writing/${article.slug}`}
                  className="group block border-t border-[var(--border)] py-6 hover:bg-[var(--bg-surface)] -mx-4 px-4 rounded transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`font-syne text-xs px-2 py-0.5 rounded ${
                            article.category === "Design"
                              ? "bg-[var(--accent)]/10 text-[var(--accent-text)]"
                              : "bg-[var(--bg-surface-hover)] text-[var(--text-secondary)]"
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className="text-[var(--text-muted)] font-syne text-xs">{article.date}</span>
                      </div>
                      <h3 className="text-[var(--text-primary)] font-syne font-bold text-base group-hover:text-[var(--accent-text)] transition-colors mb-1">
                        {article.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">{article.excerpt}</p>
                    </div>
                    <div className="text-[var(--text-muted)] group-hover:text-[var(--accent-text)] transition-colors text-lg mt-1">
                      →
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal>
              <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-8">
                <h3 className="text-[var(--text-primary)] font-syne font-bold text-lg mb-2">Core Skills</h3>
                <p className="text-[var(--text-muted)] text-sm mb-6">Technologies I work with daily</p>
                <div className="space-y-4">
                  {featuredSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[var(--text-secondary)] font-syne text-xs">{skill.name}</span>
                        <span className="text-[var(--accent-text)] font-syne text-xs">{skill.percentage}%</span>
                      </div>
                      <div className="h-1 rounded-full" style={{ background: "var(--skill-track)" }}>
                        <div
                          className="h-full bg-[var(--accent)] rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-8">
                <p className="text-[var(--accent-text)] font-syne font-black text-4xl mb-1">4</p>
                <p className="text-[var(--text-secondary)] font-syne text-xs tracking-widest">ARTICLES PUBLISHED</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
