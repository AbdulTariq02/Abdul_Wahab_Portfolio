"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const navigationLinks = (mobile = false) =>
    links.map(({ href, label }) => {
      const isActive = pathname === href;

      return (
        <Link
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          aria-current={isActive ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
            isActive ? "bg-white/10 text-emerald-300" : "text-slate-200"
          } ${mobile ? "w-full text-center text-base" : ""}`}
        >
          {label}
        </Link>
      );
    });

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="logo text-2xl font-bold tracking-tight text-white"
        >
          Port<span className="text-emerald-300">folio</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks()}
        </div>

        <a
          href="/AbdulWahab_Resume.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex"
        >
          <Download size={16} aria-hidden="true" />
          Download CV
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            className="mx-auto mt-2 flex max-w-7xl flex-col items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            {navigationLinks(true)}
            <a
              href="/AbdulWahab_Resume.pdf"
              download
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
