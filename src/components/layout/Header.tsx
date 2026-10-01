"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { NAV_ITEMS, PRIMARY_CTA, TEACHER_CTA } from "@/lib/navData";
import { whatsappLink } from "@/lib/contact";
import Logo from "@/components/ui/Logo";

const SUBJECT_LINKS = [
  "Maths", "English", "Science", "Health Education",
  "Languages", "Creative Arts", "Coding", "and more",
];

function ProgrammesMenu() {
  return (
    <div className="group relative">
      <Link
        href="/programmes"
        className="flex items-center gap-1 rounded px-3 py-2 font-display text-[1.0625rem] font-medium text-ink transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2"
      >
        Programmes
        <FiChevronDown
          aria-hidden="true"
          size={15}
          className="transition-transform group-hover:rotate-180"
        />
      </Link>
      {/* Dropdown: border only, no shadow */}
      <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 rounded-xl border border-border bg-white p-5 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <p className="text-xs font-bold uppercase tracking-widest text-link">
          Subjects include
        </p>
        <div className="mt-3 grid grid-cols-2 gap-1">
          {SUBJECT_LINKS.map((subject) => (
            <Link
              key={subject}
              href="/programmes"
              className="rounded px-2 py-2 text-sm text-muted transition-colors hover:bg-bg hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-1"
            >
              {subject}
            </Link>
          ))}
        </div>
        <Link
          href="/programmes"
          className="mt-4 inline-block text-sm font-bold text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link"
        >
          Explore all programmes →
        </Link>
      </div>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.22 }}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <Logo onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link"
        >
          <FiX size={22} aria-hidden="true" />
        </button>
      </div>

      <nav className="flex-1 px-5 py-4" aria-label="Main">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="border-b border-border">
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-4 font-display text-lg font-semibold text-ink transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link"
              >
                {item.label}
              </Link>
              {item.label === "Programmes" && (
                <div className="-mt-1 flex flex-wrap gap-x-4 gap-y-2 pb-4">
                  {SUBJECT_LINKS.map((subject) => (
                    <Link
                      key={subject}
                      href="/programmes"
                      onClick={onClose}
                      className="text-sm text-muted hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link"
                    >
                      {subject}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-3 border-t border-border px-5 py-5">
        <Link
          href={PRIMARY_CTA.href}
          onClick={onClose}
          className="flex h-12 items-center justify-center rounded bg-yellow text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          {PRIMARY_CTA.label}
        </Link>
        <Link
          href={TEACHER_CTA.href}
          onClick={onClose}
          className="flex h-12 items-center justify-center rounded border border-navy text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          {TEACHER_CTA.label}
        </Link>
      </div>
    </motion.div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Border thickens on scroll — no shadow */}
      <header
        className={`sticky top-0 z-40 bg-white transition-colors duration-200 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex items-center justify-between gap-4 py-3.5">
          <Logo priority />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) =>
              item.label === "Programmes" ? (
                <ProgrammesMenu key={item.href} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 font-display text-[1.0625rem] font-medium text-ink transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={TEACHER_CTA.href}
              className="rounded border border-navy px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              {TEACHER_CTA.label}
            </Link>
            <Link
              href={PRIMARY_CTA.href}
              className="rounded bg-yellow px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              {PRIMARY_CTA.label}
            </Link>
          </div>

          {/* Mobile hamburger — min 44×44 tap target */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link lg:hidden"
          >
            <FiMenu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileDrawer onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>

      {/* WhatsApp FAB — shadow kept because it's floating */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Bridge Online Academy on WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <FaWhatsapp aria-hidden="true" className="text-2xl text-white" />
      </a>
    </>
  );
}
