"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#ukazka", label: "Ukázka" },
  { href: "#jak-to-funguje", label: "Jak to funguje" },
  { href: "#situace", label: "Situace" },
  { href: "#profily", label: "Profily" },
  { href: "/mockup", label: "Mockup" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative md:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-full border border-line bg-surface"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Hlavní navigace"
          className="menu-panel absolute right-0 top-[calc(100%+8px)] z-40 w-[min(16rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-surface p-2 shadow-lg"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-3 font-bold hover:bg-info"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
