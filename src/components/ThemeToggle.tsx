"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const KEY = "inkluem-theme";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

// Zdroj pravdy je atribut na <html>, který nastaví skript v layoutu ještě před vykreslením.
function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0e1524" : "#f7f4ef");
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // Úložiště může být zablokované (soukromé okno). Volba pak platí jen do obnovení stránky.
  }
  listeners.forEach((cb) => cb());
}

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Světlý" },
  { value: "dark", label: "Tmavý" },
];

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      role="group"
      aria-label="Barevný režim"
      className="inline-flex rounded-full border border-line bg-surface p-1"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={theme === o.value}
          onClick={() => apply(o.value)}
          data-value={o.value}
          className="theme-btn min-h-11 rounded-full px-4 text-sm font-bold text-muted transition-colors hover:text-foreground"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
