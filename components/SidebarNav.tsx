"use client";
import { personalInfo } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "WRITING", href: "#writing" },
  { label: "CONTACT", href: "#contact" },
];

export default function SidebarNav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-[220px] border-r border-[var(--border)] hidden lg:flex flex-col z-40 bg-[var(--bg-primary)]">
      {/* Logo / Name */}
      <div className="px-6 py-8 border-b border-[var(--border)]">
        <p className="text-[var(--text-muted)] font-syne text-xs tracking-widest uppercase mb-1">Portfolio</p>
        <h2 className="text-[var(--text-primary)] font-syne font-bold text-sm leading-tight">
          {personalInfo.firstName}<br />{personalInfo.lastName}
        </h2>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="block px-3 py-2 text-xs font-syne font-semibold tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] rounded transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Bottom: theme toggle + Hire Me */}
      <div className="px-4 py-6 border-t border-[var(--border)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[var(--text-muted)] font-syne text-[10px] tracking-widest">APPEARANCE</span>
          <ThemeToggle />
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="block w-full text-center bg-[var(--accent)] text-black font-syne font-bold text-xs tracking-widest px-4 py-3 rounded hover:bg-[var(--accent-hover)] transition-colors duration-200"
        >
          HIRE ME
        </a>
        <p className="text-[var(--text-muted)] text-[10px] text-center font-syne tracking-wide">
          {personalInfo.location}
        </p>
      </div>
    </aside>
  );
}
