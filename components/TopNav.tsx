"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "WRITING", href: "#writing" },
  { label: "CONTACT", href: "#contact" },
];

function PillToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-16 h-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex items-center w-16 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-1 transition-colors duration-300"
    >
      {/* Icons */}
      <Sun size={12} className="absolute left-1.5 text-[var(--text-muted)]" />
      <Moon size={12} className="absolute right-1.5 text-[var(--text-muted)]" />
      {/* Sliding circle */}
      <motion.div
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center z-10"
      >
        {isDark
          ? <Moon size={11} className="text-black" />
          : <Sun size={11} className="text-black" />
        }
      </motion.div>
    </button>
  );
}

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <>
      {/* Top bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[5px] group"
          >
            <span className="w-6 h-[1.5px] bg-[var(--text-primary)] transition-colors group-hover:bg-[var(--accent-text)]" />
            <span className="w-4 h-[1.5px] bg-[var(--text-primary)] transition-colors group-hover:bg-[var(--accent-text)]" />
            <span className="w-6 h-[1.5px] bg-[var(--text-primary)] transition-colors group-hover:bg-[var(--accent-text)]" />
          </button>

          {/* Center: logo / initials */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, "#home")}
            className="font-syne font-black text-lg tracking-widest text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
          >
            MS
          </a>

          {/* Right: pill toggle */}
          <PillToggle />
        </div>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col px-8 md:px-16 pt-24 pb-12 bg-[var(--bg-primary)]"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.15 }}
                  onClick={(e) => handleNav(e, link.href)}
                  className="group flex items-baseline gap-4 py-3 border-b border-[var(--border)]"
                >
                  <span className="text-[var(--text-muted)] font-syne text-xs w-6">
                    0{i + 1}
                  </span>
                  <span className="text-[var(--text-primary)] font-syne font-black text-4xl md:text-6xl leading-none group-hover:text-[var(--accent-text)] transition-colors duration-200">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between"
            >
              <p className="text-[var(--text-muted)] font-syne text-xs tracking-widest">
                MRINALINI S — PORTFOLIO
              </p>
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "#contact")}
                className="bg-[var(--accent)] text-black font-syne font-bold text-xs tracking-widest px-6 py-3 rounded hover:bg-[var(--accent-hover)] transition-colors"
              >
                HIRE ME
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
