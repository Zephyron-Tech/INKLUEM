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

function commit(theme: Theme) {
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

function apply(theme: Theme) {
  if (getSnapshot() === theme) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // View Transitions udělají krátké prolnutí celé stránky. Bez nich nebo při omezeném
  // pohybu se barvy přepnou hned.
  if (!reduce && "startViewTransition" in document) {
    (document as Document & { startViewTransition: (cb: () => void) => unknown }).startViewTransition(
      () => commit(theme),
    );
  } else {
    commit(theme);
  }
}

function Sun() {
  return (
    <svg className="tt-icon tt-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
    </svg>
  );
}

function Moon() {
  return (
    <svg className="tt-icon tt-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  );
}

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Světlý režim", icon: <Sun /> },
  { value: "dark", label: "Tmavý režim", icon: <Moon /> },
];

export function ThemeToggle() {
  // Čtečka dostane stav z aria-pressed. Vzhled (palec, ikony) řídí atribut na <html>,
  // takže je správný už při prvním vykreslení.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div role="group" aria-label="Barevný režim" className="tt">
      <span className="tt-thumb" aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={theme === o.value}
          aria-label={o.label}
          title={o.label}
          data-value={o.value}
          onClick={() => apply(o.value)}
          className="tt-btn"
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}
