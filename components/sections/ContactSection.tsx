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
    <section id="contact" className="py-24 px-6 md:px-12 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-[#C8FF00] font-syne text-xs tracking-[0.2em] uppercase mb-2">06 — CONTACT</p>
          <h2 className="text-white font-syne font-black text-4xl md:text-5xl mb-12">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <ScrollReveal>
              <p className="text-[#999999] leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s build something great together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C8FF00]" />
                  <a href={`mailto:${personalInfo.email}`} className="text-[#999999] hover:text-white transition-colors text-sm">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#C8FF00]" />
                  <span className="text-[#999999] text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[#C8FF00]" />
                  <a href={personalInfo.website} className="text-[#999999] hover:text-white transition-colors text-sm">
                    {personalInfo.website}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-[#666666] font-syne text-xs tracking-widest uppercase mb-4">FIND ME ON</p>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#2A2A2A] rounded flex items-center justify-center text-[#666666] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                  >
                    <span className="text-xs font-syne font-bold">in</span>
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#2A2A2A] rounded flex items-center justify-center text-[#666666] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                  >
                    <span className="text-xs font-syne font-bold">gh</span>
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#2A2A2A] rounded flex items-center justify-center text-[#666666] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
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
                <label className="block text-[#666666] font-syne text-xs tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2A2A2A] rounded px-4 py-3 text-white placeholder-[#444] font-syne text-sm focus:outline-none focus:border-[#C8FF00] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[#666666] font-syne text-xs tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2A2A2A] rounded px-4 py-3 text-white placeholder-[#444] font-syne text-sm focus:outline-none focus:border-[#C8FF00] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[#666666] font-syne text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2A2A2A] rounded px-4 py-3 text-white placeholder-[#444] font-syne text-sm focus:outline-none focus:border-[#C8FF00] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8FF00] text-black font-syne font-bold text-sm tracking-widest py-4 rounded hover:bg-[#D4FF33] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] font-syne text-xs">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[#666666] font-syne text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
