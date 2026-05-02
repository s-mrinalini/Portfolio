"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 md:hidden bg-[#161616] border border-[#2A2A2A] rounded p-2.5 text-white"
        aria-label="Toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Full-screen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0E0E0E] flex flex-col px-8 py-16 md:hidden"
          >
            <p className="text-[#666666] text-xs tracking-widest font-syne mb-8">NAVIGATION</p>
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={(e) => handleNav(e, link.href)}
                  className="block text-3xl font-syne font-bold text-white hover:text-[#C8FF00] transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "#contact")}
                className="inline-block bg-[#C8FF00] text-black font-syne font-bold text-sm tracking-widest px-8 py-3 rounded hover:bg-[#D4FF33] transition-colors"
              >
                HIRE ME
              </a>
              <p className="text-[#666666] text-xs mt-4 font-syne">{personalInfo.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
