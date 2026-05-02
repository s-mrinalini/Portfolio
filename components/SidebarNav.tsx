"use client";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

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
    <aside className="fixed top-0 left-0 h-full w-[220px] bg-[#0E0E0E] border-r border-[#2A2A2A] hidden md:flex flex-col z-40">
      {/* Logo / Name */}
      <div className="px-6 py-8 border-b border-[#2A2A2A]">
        <p className="text-xs text-[#999999] tracking-widest uppercase font-syne mb-1">Portfolio</p>
        <h2 className="text-white font-syne font-bold text-sm leading-tight">
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
            className="block px-3 py-2 text-xs font-syne font-semibold tracking-[0.12em] text-[#666666] hover:text-white hover:bg-[#1E1E1E] rounded transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hire Me */}
      <div className="px-4 py-6 border-t border-[#2A2A2A]">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="block w-full text-center bg-[#C8FF00] text-black font-syne font-bold text-xs tracking-widest px-4 py-3 rounded hover:bg-[#D4FF33] transition-colors duration-200"
        >
          HIRE ME
        </a>
        <p className="text-[#666666] text-[10px] text-center mt-3 font-syne tracking-wide">
          {personalInfo.location}
        </p>
      </div>
    </aside>
  );
}
