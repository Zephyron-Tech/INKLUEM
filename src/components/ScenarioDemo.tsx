"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { situations, startIndex } from "./situations";

const LETTERS = ["A", "B", "C", "D"] as const;
const LETTER_CLASS = ["l-a", "l-b", "l-c", "l-d"] as const;
const PRESS_MS = 220;

function Chevron() {
  return (
    <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Retry() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" />
    </svg>
  );
}

export function ScenarioDemo() {
  const [index, setIndex] = useState(startIndex);
  const [view, setView] = useState<"scenario" | "feedback">("scenario");
  const [choice, setChoice] = useState<number | null>(null);
  const [pending, setPending] = useState<number | null>(null);
  const [enter, setEnter] = useState<"next" | null>(null);
  const [announce, setAnnounce] = useState("");

  const scenarioHeading = useRef<HTMLHeadingElement>(null);
  const feedbackHeading = useRef<HTMLHeadingElement>(null);
  const firstOption = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | null>(null);
  const moveFocus = useRef<"feedback" | "option" | "scenario" | null>(null);

  const situation = situations[index];

  // Fokus se přesouvá až po vykreslení, aby čtečky i klávesnice navázaly na nový obsah.
  useEffect(() => {
    const target = moveFocus.current;
    if (!target) return;
    moveFocus.current = null;
    const el =
      target === "feedback"
        ? feedbackHeading.current
        : target === "option"
          ? firstOption.current
          : scenarioHeading.current;
    el?.focus({ preventScroll: true });
  }, [view, index]);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  function choose(i: number) {
    if (pending !== null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const go = () => {
      setChoice(i);
      setPending(null);
      setView("feedback");
      setAnnounce(`Zpětná vazba k reakci ${LETTERS[i]}. Ukázka, zástupný text.`);
      moveFocus.current = "feedback";
    };
    if (reduce) {
      go();
      return;
    }
    setPending(i);
    timer.current = window.setTimeout(go, PRESS_MS);
  }

  function retry() {
    setEnter(null);
    setView("scenario");
    setAnnounce(`Situace ${index + 1} z 10, ${situation.title}. Zkuste to znovu.`);
    moveFocus.current = "option";
  }

  function next() {
    const n = (index + 1) % situations.length;
    setEnter("next");
    setIndex(n);
    setView("scenario");
    setChoice(null);
    setAnnounce(`Situace ${n + 1} z 10, ${situations[n].title}.`);
    moveFocus.current = "scenario";
  }

  const inScenario = view === "scenario";

  return (
    <div className="phone" role="group" aria-label="Interaktivní ukázka scénáře v telefonu">
      <div className="phone-screen">
        <span className="phone-island" aria-hidden="true" />
        <div className="phone-status" aria-hidden="true">
          <span>9:41</span>
        </div>

        <div className="panes">
          <section
            key={index}
            className="pane pane-scenario"
            data-active={inScenario}
            data-enter={enter ?? undefined}
            aria-hidden={!inScenario}
            inert={!inScenario}
          >
            <div className="flex items-center gap-3">
              <div className="progress" aria-hidden="true">
                {situations.map((s, i) => (
                  <i key={s.title} data-on={i <= index} />
                ))}
              </div>
              <span className="text-[13px] font-bold whitespace-nowrap">
                Situace {index + 1} z 10
              </span>
            </div>

            <div className="scene">
              <Image
                src={situation.image}
                alt={situation.imageAlt}
                width={800}
                height={448}
                sizes="320px"
                priority={index === startIndex}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2">
              <h3
                ref={scenarioHeading}
                tabIndex={-1}
                className="text-[17px] font-extrabold outline-none"
              >
                {situation.title}
              </h3>
              {!situation.fromPdf && <span className="tag">Zástupný text</span>}
            </div>
            <p className="-mt-1.5 text-[15px] leading-snug">{situation.text}</p>

            <p className="mt-1 text-[17px] font-extrabold">Co uděláte?</p>
            <div className="flex flex-col gap-2">
              {situation.options.map((text, i) => (
                <button
                  key={LETTERS[i]}
                  ref={i === 0 ? firstOption : undefined}
                  type="button"
                  className="opt"
                  data-state={
                    pending === null ? undefined : pending === i ? "picked" : "dim"
                  }
                  onClick={() => choose(i)}
                >
                  <span className={`letter ${LETTER_CLASS[i]}`} aria-hidden="true">
                    {LETTERS[i]}
                  </span>
                  <span>
                    <span className="sr-only">Reakce {LETTERS[i]}: </span>
                    {text}
                  </span>
                  <Chevron />
                </button>
              ))}
            </div>
          </section>

          <section
            className="pane pane-feedback"
            data-active={!inScenario}
            aria-hidden={inScenario}
            inert={inScenario}
          >
            <h3
              ref={feedbackHeading}
              tabIndex={-1}
              className="pt-1 text-center text-[17px] font-extrabold outline-none"
            >
              Zpětná vazba
            </h3>

            {choice !== null && (
              <div className="rise flex items-center gap-3 rounded-2xl border border-line bg-surface p-2 pr-3" style={{ "--i": 0 } as React.CSSProperties}>
                <span className={`letter ${LETTER_CLASS[choice]}`} aria-hidden="true">
                  {LETTERS[choice]}
                </span>
                <div className="text-[15px] leading-snug">
                  <p className="text-[12px] font-bold text-muted">Vaše volba</p>
                  <p className="font-semibold">{situation.options[choice]}</p>
                </div>
              </div>
            )}

            <div className="fb-box rise" style={{ "--i": 1 } as React.CSSProperties}>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[15px] font-extrabold">Co se stane</h4>
                <span className="tag">Ukázka, zástupný text</span>
              </div>
              <p className="mt-1.5 text-[15px] leading-snug">
                Sem přijde zpětná vazba k vybrané reakci. Text napíše odborník.
              </p>
            </div>

            <div className="fb-box info rise" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[15px] font-extrabold">Metodické vysvětlení</h4>
                <span className="tag" style={{ background: "var(--surface)" }}>
                  Ukázka
                </span>
              </div>
              <p className="mt-1.5 text-[15px] leading-snug">
                Sem přijde krátké vysvětlení, proč reakce funguje nebo nefunguje. Odborný
                text zatím neexistuje, tohle je jen zástupná věta.
              </p>
            </div>

            <div className="rise mt-auto flex flex-col gap-2" style={{ "--i": 3 } as React.CSSProperties}>
              <button type="button" className="btn-phone primary" onClick={next}>
                Další situace
                <Arrow />
              </button>
              <button type="button" className="btn-phone secondary" onClick={retry}>
                <Retry />
                Zkusit znovu
              </button>
            </div>
          </section>
        </div>

        <span className="phone-home" aria-hidden="true" />
      </div>

      <p className="sr-only" aria-live="polite" role="status">
        {announce}
      </p>
    </div>
  );
}
