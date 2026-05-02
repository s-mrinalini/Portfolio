"use client";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Mail, MapPin, Globe } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[var(--accent-text)] font-syne text-xs tracking-[0.2em] uppercase mb-2">06 — CONTACT</p>
          <h2 className="text-[var(--text-primary)] font-syne font-black text-4xl md:text-5xl mb-12">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <ScrollReveal>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s build something great together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[var(--accent-text)]" />
                  <a href={`mailto:${personalInfo.email}`} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[var(--accent-text)]" />
                  <span className="text-[var(--text-secondary)] text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[var(--accent-text)]" />
                  <a href={personalInfo.website} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
                    {personalInfo.website}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-[var(--text-muted)] font-syne text-xs tracking-widest uppercase mb-4">FIND ME ON</p>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[var(--border)] rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-text)] hover:border-[var(--accent-text)] transition-colors"
                  >
                    <span className="text-xs font-syne font-bold">in</span>
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[var(--border)] rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-text)] hover:border-[var(--accent-text)] transition-colors"
                  >
                    <span className="text-xs font-syne font-bold">gh</span>
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[var(--border)] rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-text)] hover:border-[var(--accent-text)] transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[var(--text-muted)] font-syne text-xs tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] font-syne text-sm focus:outline-none focus:border-[var(--accent-text)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[var(--text-muted)] font-syne text-xs tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] font-syne text-sm focus:outline-none focus:border-[var(--accent-text)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[var(--text-muted)] font-syne text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] font-syne text-sm focus:outline-none focus:border-[var(--accent-text)] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-black font-syne font-bold text-sm tracking-widest py-4 rounded hover:bg-[var(--accent-hover)] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] font-syne text-xs">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] font-syne text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
