import Image from "next/image";
import { Logo } from "@/components/Logo";
import { ScenarioDemo } from "@/components/ScenarioDemo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { situations } from "@/components/situations";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

const steps = [
  {
    name: "Situace",
    text: "Pár vět o tom, co se právě ve třídě děje. Tak, jak ji znáte z praxe.",
  },
  {
    name: "Reakce",
    text: "Tři až čtyři možnosti, A až D. Vyberete tu, kterou byste zvolili.",
  },
  {
    name: "Zpětná vazba",
    text: "Aplikace hned ukáže, jak se vaše volba může ve třídě projevit.",
  },
  {
    name: "Vysvětlení",
    text: "Krátké metodické vysvětlení. Potom situaci zkusíte znovu, nebo půjdete na další.",
  },
];

const profiles = [
  {
    name: "PAS",
    text: "Jiný způsob vnímání světa, specifické potřeby a reakce na podněty.",
    img: "/img/profile-pas.webp",
    alt: "Ilustrace: chlapec se sluchátky na krku a puzzle.",
    box: "bg-pas",
    ink: "text-pas-ink",
  },
  {
    name: "Aspergerův syndrom",
    text: "Silné stránky, citlivost na změny a potřeba jasných pravidel.",
    img: "/img/profile-asperger.webp",
    alt: "Ilustrace: dívka s knihou a hvězdičkou.",
    box: "bg-asp",
    ink: "text-asp-ink",
  },
  {
    name: "ADHD",
    text: "Impulzivita, neklid, obtížná regulace pozornosti a emocí.",
    img: "/img/profile-adhd.webp",
    alt: "Ilustrace: veselé dítě s blesky energie kolem.",
    box: "bg-adhd",
    ink: "text-adhd-ink",
  },
];

// Mozaika: dvě velké ilustrace (první a poslední situace), osm malých mezi nimi.
const tilePlacement = [
  "col-span-2 row-span-2",
  "",
  "",
  "",
  "",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-2 lg:row-start-3",
  "lg:col-start-1 lg:row-start-4",
  "lg:col-start-2 lg:row-start-4",
  "col-span-2 row-span-2 lg:col-start-3 lg:row-start-3",
];

const navLink =
  "rounded-md py-2 transition-colors hover:text-foreground";

export default function Home() {
  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
      >
        Přeskočit na obsah
      </a>

      <header className={`${container} flex items-center justify-between gap-4 py-4`}>
        <a href="#" className="flex items-center gap-3 text-lg font-extrabold tracking-wide">
          <Logo size={40} />
          INKLUEM
        </a>
        <div className="flex items-center gap-6">
          <nav aria-label="Hlavní navigace" className="hidden gap-6 text-sm font-bold text-muted md:flex">
            <a className={navLink} href="#jak-to-funguje">Jak to funguje</a>
            <a className={navLink} href="#situace">Situace</a>
            <a className={navLink} href="#profily">Profily</a>
            <a className={navLink} href="/mockup">Mockup</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="obsah" className="flex-1">
        {/* Úvod s funkční ukázkou */}
        <section className={`${container} grid items-center gap-10 pb-16 pt-6 lg:grid-cols-[1fr_400px] lg:gap-16 lg:pb-24 lg:pt-12`}>
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
              Co uděláte, když dítě začne křičet a odmítne úkol?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              INKLUEM je trenažér pro učitele a asistenty pedagoga. Přečtete si
              krátkou situaci ze třídy, vyberete, jak byste zareagovali, a hned
              dostanete zpětnou vazbu s metodickým vysvětlením.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ukazka"
                className="inline-flex min-h-12 items-center rounded-2xl bg-navy px-6 font-bold text-on-navy transition-opacity hover:opacity-90"
              >
                Zkusit ukázku
              </a>
              <a
                href="/mockup"
                className="inline-flex min-h-12 items-center rounded-2xl border border-line bg-surface px-6 font-bold transition-colors hover:border-navy"
              >
                Mockup aplikace
              </a>
            </div>
            <p className="mt-6 max-w-md text-muted">
              Ukázka vedle je funkční. Klepněte na reakci a uvidíte, jak bude
              aplikace odpovídat.
            </p>
          </div>

          <div id="ukazka" className="rounded-[28px] bg-info p-3 sm:p-8">
            <ScenarioDemo />
          </div>
        </section>

        {/* Problém */}
        <section className={`${container} grid gap-10 py-16 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:py-24`}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
            Teorii většina lidí zná. Chybí místo, kde si ji zkusit.
          </h2>
          <div className="divide-y divide-line border-y border-line text-lg leading-relaxed">
            <p className="py-5">
              <strong className="font-extrabold">Asistenti nastupují bez praxe.</strong>{" "}
              Do třídy může přijít člověk, který konkrétní situace ještě nezažil.
            </p>
            <p className="py-5">
              <strong className="font-extrabold">Učitelé nemají čas.</strong>{" "}
              Během provozu školy se nedá každý krizový scénář probrat krok za krokem.
            </p>
            <p className="py-5">
              <strong className="font-extrabold">Každé dítě je jiné.</strong>{" "}
              Stejný profil neznamená stejnou reakci, vždycky záleží na kontextu.
            </p>
          </div>
        </section>

        {/* Jak to funguje */}
        <section id="jak-to-funguje" className="bg-surface py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20`}>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                Jako Duolingo, jen pro situace ve škole
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Cílem není najít správnou odpověď z učebnice. Cílem je rozpoznat
                situaci a její možné důsledky.
              </p>
            </div>
            <ol className="divide-y divide-line border-y border-line">
              {steps.map((s) => (
                <li key={s.name} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <h3 className="text-xl font-extrabold">{s.name}</h3>
                  <p className="text-lg leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Situace */}
        <section id="situace" className={`${container} py-16 lg:py-24`}>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
              Deset situací z každodenní školy
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              První pilot pokrývá deset situací. U každé jsou tři až čtyři
              možné reakce, zpětná vazba a krátké vysvětlení. Texty zatím píšeme
              jako zástupné, finální verzi připraví odborník.
            </p>
          </div>
          <ul className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:grid-cols-4">
            {situations.map((s, i) => (
              <li
                key={s.title}
                className={`tile relative overflow-hidden rounded-2xl bg-info ${tilePlacement[i]}`}
              >
                <Image
                  src={s.image}
                  alt=""
                  width={800}
                  height={448}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 right-2 w-fit max-w-full rounded-full bg-surface px-3 py-1 text-sm font-bold sm:bottom-3 sm:left-3">
                  {s.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Profily */}
        <section id="profily" className="bg-surface py-16 lg:py-24">
          <div className={`${container} grid items-start gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20`}>
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                Profil vybírá situace, nic víc
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Zvolíte profil a aplikace nabídne situace, které k němu často
                patří. INKLUEM žádné dítě nehodnotí ani nezařazuje a diagnózu
                nestanovuje. Čtvrtá volba, Jiná oblast, je pro všechno ostatní.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {profiles.map((p) => (
                <li
                  key={p.name}
                  className={`grid overflow-hidden rounded-2xl sm:grid-cols-[1fr_1.2fr] ${p.box}`}
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    width={800}
                    height={603}
                    sizes="(min-width: 640px) 25vw, 100vw"
                    className="h-full max-h-56 w-full object-cover sm:max-h-none"
                  />
                  <div className="flex flex-col justify-center p-6">
                    <h3 className={`text-xl font-extrabold ${p.ink}`}>{p.name}</h3>
                    <p className="mt-2 text-lg leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Škola a domov */}
        <section id="vize" className={`${container} py-16 lg:py-24`}>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
            Nejdřív škola, později domov
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-0">
            <div className="md:pr-12">
              <h3 className="text-xl font-extrabold">Škola</h3>
              <p className="mt-1 font-bold text-muted">Teď. Trénuje učitel nebo asistent.</p>
              <p className="mt-4 text-lg leading-relaxed">
                Scénáře pro práci ve třídě: přestávky, změny režimu, konflikty a
                regulace emocí.
              </p>
            </div>
            <div className="border-line md:border-l md:pl-12">
              <h3 className="text-xl font-extrabold">Domov</h3>
              <p className="mt-1 font-bold text-muted">Později. Trénuje rodič.</p>
              <p className="mt-4 text-lg leading-relaxed">
                Ranní odchod do školy, změny plánů, frustrace, konflikty a
                večerní rutina.
              </p>
            </div>
          </div>
        </section>

        {/* Výzva */}
        <section className="bg-band text-on-band">
          <div className={`${container} py-16 lg:py-24`}>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
              Pojďme INKLUEM otestovat ve skutečné třídě
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">
              Hledáme školy pro pilotní testování a lidi, kteří chtějí stavět
              nástroj pro chvíli, kdy člověk neví, co dělat.
            </p>
            <a
              href="/mockup"
              className="mt-8 inline-flex min-h-12 items-center rounded-2xl bg-on-band px-6 font-bold text-band transition-opacity hover:opacity-90"
            >
              Prohlédnout mockup
            </a>
          </div>
        </section>
      </main>

      <footer className={`${container} flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-start sm:justify-between`}>
        <p className="flex items-center gap-2 font-extrabold text-foreground">
          <Logo size={24} />
          INKLUEM
        </p>
        <p className="max-w-xl">
          Koncept ve vývoji. Texty scénářů a metodická vysvětlení jsou zatím
          zástupné a před spuštěním je projde odborník. Aplikace nediagnostikuje,
          profil jen pomáhá vybrat situace.
        </p>
      </footer>
    </>
  );
}
