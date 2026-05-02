"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Top bar visible on mobile/tablet only */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-primary)]">
        <div>
          <p className="text-[var(--text-muted)] font-syne text-[10px] tracking-widest uppercase">Portfolio</p>
          <p className="text-[var(--text-primary)] font-syne font-bold text-sm leading-tight">{personalInfo.firstName} {personalInfo.lastName}</p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="bg-[var(--bg-surface)] border border-[var(--border)] rounded p-2.5 text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind the top bar */}
      <div className="h-[57px] lg:hidden" />

      {/* Full-screen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col px-8 py-16 lg:hidden bg-[var(--bg-primary)]"
          >
            <p className="text-[var(--text-muted)] text-xs tracking-widest font-syne mb-8">NAVIGATION</p>
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={(e) => handleNav(e, link.href)}
                  className="block text-3xl font-syne font-bold text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "#contact")}
                className="inline-block bg-[var(--accent)] text-black font-syne font-bold text-sm tracking-widest px-8 py-3 rounded hover:bg-[var(--accent-hover)] transition-colors"
              >
                HIRE ME
              </a>
              <p className="text-[var(--text-muted)] text-xs mt-4 font-syne">{personalInfo.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
