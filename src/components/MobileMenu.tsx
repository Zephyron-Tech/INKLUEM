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
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        onClick={() => setOpen((v) => !v)}
        className="menu-btn grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface"
      >
        <span className="burger" data-open={open} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      {/* Panel je v DOM vždy, aby šel animovat i při zavření. Zavřený je inert a skrytý. */}
      <nav
        id="mobile-menu"
        aria-label="Hlavní navigace"
        data-open={open}
        inert={!open}
        className="menu-panel absolute right-0 top-[calc(100%+8px)] z-40 w-[min(16rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-surface p-2 shadow-lg"
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ "--i": i } as React.CSSProperties}
            className="flex min-h-11 cursor-pointer items-center rounded-xl px-3 font-bold hover:bg-info"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
