import Image from "next/image";
import { Logo } from "@/components/Logo";

const problems = [
  {
    title: "Příprava asistentů",
    text: "Asistent může nastupovat do třídy bez dostatečné praktické zkušenosti s konkrétními situacemi.",
    accent: "border-pas-ink",
  },
  {
    title: "Přetížení učitelů",
    text: "Během běžného provozu není čas vysvětlovat každý krizový scénář krok za krokem.",
    accent: "border-adhd-ink",
  },
  {
    title: "Různé potřeby dětí",
    text: "Stejná diagnóza neznamená stejnou reakci. Důležitý je konkrétní kontext dítěte.",
    accent: "border-warn-ink",
  },
];

const steps = [
  { n: "01", title: "Situace", text: "Krátký popis situace, jak ji znáte z praxe." },
  { n: "02", title: "Volba A / B / C / D", text: "Vyberete reakci, kterou byste zvolili." },
  { n: "03", title: "Zpětná vazba", text: "Hned uvidíte, jak se reakce projeví." },
  { n: "04", title: "Vysvětlení", text: "Krátké metodické vysvětlení a možnost zkusit znovu." },
];

const profiles = [
  {
    name: "PAS",
    text: "Jiný způsob vnímání světa, specifické potřeby a reakce na podněty.",
    img: "/img/profile-pas.webp",
    bg: "bg-pas",
    ink: "text-pas-ink",
  },
  {
    name: "Aspergerův syndrom",
    text: "Silné stránky, citlivost na změny a potřeba jasných pravidel.",
    img: "/img/profile-asperger.webp",
    bg: "bg-asp",
    ink: "text-asp-ink",
  },
  {
    name: "ADHD",
    text: "Impulzivita, neklid, obtížná regulace pozornosti a emocí.",
    img: "/img/profile-adhd.webp",
    bg: "bg-adhd",
    ink: "text-adhd-ink",
  },
];

const situations = [
  "Agresivita a frustrace",
  "Výbuch hněvu",
  "Impulzivita",
  "Posměch a vyčlenění",
  "Změna režimu",
  "Úzkost",
  "Odmítnutí úkolu",
  "Konflikt s vrstevníkem",
  "Senzorické přetížení",
  "Návrat do klidu",
];

const situationImages = [
  { src: "/img/situation-vybuch-hnevu.webp", label: "Výbuch hněvu" },
  { src: "/img/situation-uzkost.webp", label: "Úzkost" },
  { src: "/img/situation-zmena-rezimu.webp", label: "Změna režimu" },
  { src: "/img/situation-posmech-vycleneni.webp", label: "Posměch a vyčlenění" },
];

export default function Home() {
  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
      >
        Přeskočit na obsah
      </a>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-3 font-extrabold tracking-wide text-lg">
          <Logo size={40} />
          INKLUEM
        </a>
        <nav aria-label="Hlavní navigace" className="hidden gap-6 text-sm font-semibold text-muted sm:flex">
          <a className="hover:text-foreground" href="#jak-to-funguje">Jak to funguje</a>
          <a className="hover:text-foreground" href="#situace">Situace</a>
          <a className="hover:text-foreground" href="#vize">Vize</a>
          <a className="hover:text-foreground" href="/mockup">Mockup</a>
        </nav>
      </header>

      <main id="obsah" className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 md:grid-cols-2 md:pt-10">
          <div>
            <p className="mb-4 inline-block rounded-full bg-info px-3 py-1 text-sm font-bold text-navy">
              Inkluze + emoce · ve vývoji
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Trénuj reakce na situace ve třídě, dřív než nastanou.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              INKLUEM je trenažér krizových a každodenních situací pro učitele,
              asistenty pedagoga, rodiče a děti. Krátký scénář, volba reakce,
              okamžitá zpětná vazba.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/mockup"
                className="inline-flex min-h-12 items-center rounded-2xl bg-navy px-6 font-bold text-background transition-opacity hover:opacity-90"
              >
                Prohlédnout mockup aplikace
              </a>
              <a
                href="#jak-to-funguje"
                className="inline-flex min-h-12 items-center rounded-2xl border border-line bg-surface px-6 font-bold transition-colors hover:bg-info"
              >
                Jak to funguje
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
            <Image
              src="/img/hero-scenario.webp"
              alt="Ilustrace: dítě si zakrývá uši ve třídě, učitelka stojí zády."
              width={800}
              height={448}
              priority
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Upozornění */}
        <section className="mx-auto w-full max-w-6xl px-5 sm:px-8" aria-label="Důležité upozornění">
          <div className="rounded-2xl bg-warn px-5 py-4 text-warn-ink">
            <p className="font-bold">Profil není diagnóza.</p>
            <p className="mt-1">
              Aplikace nediagnostikuje žádné dítě. Profil slouží jen k výběru
              scénářů, které se vám mohou hodit. Cílem je trénovat rozhodování.
            </p>
          </div>
        </section>

        {/* Problém */}
        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-navy">Problém</p>
          <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
            Co dělat, když situace eskaluje?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            V krizové chvíli nestačí znát teorii. Je potřeba vědět, co udělat
            právě teď.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <li
                key={p.title}
                className={`rounded-2xl border border-line border-l-8 bg-surface p-6 ${p.accent}`}
              >
                <h3 className="text-lg font-extrabold uppercase tracking-wide">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-balance">
            Dnes chybí praktický <strong>trenažér</strong>, kde si člověk{" "}
            <strong>bezpečně vyzkouší</strong> rozhodování ještě před skutečnou
            krizí.
          </p>
        </section>

        {/* Jak to funguje */}
        <section id="jak-to-funguje" className="bg-surface py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-wider text-navy">Řešení</p>
            <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
              „Duolingo“ pro školy
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              Krátké scénáře. Volba reakce. Okamžitá zpětná vazba.
            </p>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl border border-line bg-background p-6">
                  <span className="text-sm font-bold text-navy">{s.n}</span>
                  <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-line bg-background p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-muted">
                Ukázka scénáře
              </p>
              <p className="mt-2 text-lg">
                Dítě si zakryje uši, začne křičet a odmítá pokračovat v úkolu.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["A", "Přitlačit na dokončení", "bg-[#F9D3CD] text-[#8A2A1D]"],
                  ["B", "Ignorovat", "bg-[#FBE6BA] text-[#704B00]"],
                  ["C", "Snížit podněty", "bg-[#CDEBD8] text-[#1B6139]"],
                  ["D", "Poslat ze třídy", "bg-[#DFD7F5] text-[#55399E]"],
                ].map(([k, t, c]) => (
                  <li key={k} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full font-extrabold ${c}`}>
                      {k}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-bold">
                Uživatel se nerozhoduje podle správné odpovědi v učebnici. Učí
                se rozpoznat situaci a její možné důsledky.
              </p>
            </div>
          </div>
        </section>

        {/* Profily */}
        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-navy">Profily</p>
          <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
            S kým chcete trénovat?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Profil vybírá relevantní scénáře. Není to diagnóza a nepopisuje
            konkrétní dítě.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {profiles.map((p) => (
              <li key={p.name} className={`overflow-hidden rounded-3xl ${p.bg}`}>
                <Image
                  src={p.img}
                  alt=""
                  width={800}
                  height={603}
                  className="h-auto w-full"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-extrabold ${p.ink}`}>{p.name}</h3>
                  <p className="mt-2 leading-relaxed">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Situace */}
        <section id="situace" className="bg-surface py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-wider text-navy">První pilot</p>
            <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
              10 reálných situací
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              MVP má být malé, testovatelné a postavené na skutečných potřebách
              škol. Každý scénář má 3–4 možné reakce, okamžitou zpětnou vazbu a
              krátké metodické vysvětlení.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {situationImages.map((s) => (
                <li key={s.label} className="overflow-hidden rounded-2xl border border-line bg-background">
                  <Image src={s.src} alt="" width={800} height={448} className="h-auto w-full" />
                  <p className="px-4 py-3 font-bold">{s.label}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Všech 10 situací">
              {situations.map((s) => (
                <li key={s} className="rounded-full border border-line bg-background px-4 py-2 text-sm font-semibold">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vize */}
        <section id="vize" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-navy">Vize</p>
          <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
            Škola ↔ Domov
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Stejný princip může pomoci dospělým na obou stranách.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line border-l-8 border-l-pas-ink bg-surface p-6">
              <h3 className="text-xl font-extrabold">Škola</h3>
              <p className="mt-1 font-semibold text-muted">Učitel → asistent → dítě</p>
              <p className="mt-3 leading-relaxed">
                Scénáře pro práci ve třídě, přestávky, změny režimu, konflikty a
                regulaci emocí.
              </p>
            </div>
            <div className="rounded-2xl border border-line border-l-8 border-l-adhd-ink bg-surface p-6">
              <h3 className="text-xl font-extrabold">Domov</h3>
              <p className="mt-1 font-semibold text-muted">Rodič → dítě</p>
              <p className="mt-3 leading-relaxed">
                Ranní odchod do školy, změny plánů, frustrace, konflikty a
                večerní rutina.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-2xl font-extrabold tracking-wide text-balance">
            Cílem je pomoc inkluzi.
          </p>
        </section>

        {/* Výzva */}
        <section className="bg-navy py-20 text-background">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="text-3xl font-extrabold text-balance sm:text-4xl">
              Pojďme INKLUEM otestovat.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
              Nechceme vytvořit další aplikaci o inkluzi. Chceme vytvořit nástroj
              pro chvíli, kdy člověk neví, co dělat. Hledáme školy pro pilotní
              testování a lidi, kteří chtějí vytvořit něco užitečného.
            </p>
            <a
              href="/mockup"
              className="mt-8 inline-flex min-h-12 items-center rounded-2xl bg-background px-6 font-bold text-foreground transition-opacity hover:opacity-90"
            >
              Prohlédnout mockup
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          INKLUEM · koncept ve vývoji. Texty scénářů a metodická vysvětlení jsou
          zástupné, dokud je neschválí odborník. Aplikace nediagnostikuje.
        </p>
      </footer>
    </>
  );
}
