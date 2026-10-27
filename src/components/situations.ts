export type Rating = "suitable" | "partial" | "unsuitable";

export const RATING_LABEL: Record<Rating, string> = {
  suitable: "Vhodná reakce",
  partial: "Částečně vhodná",
  unsuitable: "Nevhodná reakce",
};

export type Feedback = {
  /** Hodnocení a dopad pro každou z reakcí A až D. */
  outcomes: [Outcome, Outcome, Outcome, Outcome];
  /** Metodické vysvětlení společné pro situaci. */
  explanation: string;
};

export type Outcome = { rating: Rating; text: string };

export type Situation = {
  title: string;
  image: string;
  imageAlt: string;
  /** Text situace. Zástupný, dokud ho neschválí odborník. */
  text: string;
  options: [string, string, string, string];
  /** Zdrojový scénář z PDF (strana 4). Ostatní jsou jen zástupné. */
  fromPdf: boolean;
  /** Ukázková zpětná vazba. Zatím jen u první situace, texty čekají na odborníka. */
  feedback?: Feedback;
};

const placeholder = (letter: string) => `Reakce ${letter}, zástupný text.`;

const stub = (
  title: string,
  slug: string,
): Situation => ({
  title,
  image: `/img/situation-${slug}.webp`,
  imageAlt: `Ilustrace situace: ${title}.`,
  text: "Popis situace je zatím zástupný. Napíše ho odborník.",
  options: [placeholder("A"), placeholder("B"), placeholder("C"), placeholder("D")],
  fromPdf: false,
});

/** Deset situací v pořadí z PDF a mockupu. */
export const situations: Situation[] = [
  stub("Agresivita a frustrace", "agresivita-frustrace"),
  stub("Výbuch hněvu", "vybuch-hnevu"),
  stub("Impulzivita", "impulzivita"),
  stub("Posměch a vyčlenění", "posmech-vycleneni"),
  stub("Změna režimu", "zmena-rezimu"),
  stub("Úzkost", "uzkost"),
  {
    title: "Odmítnutí úkolu",
    image: "/img/hero-scenario.webp",
    imageAlt: "Dítě si u lavice zakrývá uši, vedle stojí dospělý.",
    text: "Dítě si zakryje uši, začne křičet a odmítá pokračovat v úkolu. V místnosti je rušno.",
    options: [
      "Přitlačit na dokončení úkolu.",
      "Ignorovat chování.",
      "Snížit podněty a dát prostor ke zklidnění.",
      "Poslat dítě ze třídy.",
    ],
    fromPdf: true,
    // Ukázkové texty, které dávají smysl při vyzkoušení. Metodicky je musí
    // schválit odborník (speciální pedagog), než půjdou do aplikace.
    feedback: {
      outcomes: [
        {
          rating: "unsuitable",
          text: "Tlak v hlučné třídě napětí zvýší. Dítě se může úplně zablokovat, křik zesílí a úkol se nesplní.",
        },
        {
          rating: "partial",
          text: "Napětí může časem opadnout, ale hluk ve třídě zůstává. Dítě tak zůstane samo s tím, co ho přetížilo.",
        },
        {
          rating: "suitable",
          text: "Méně hluku a chvíle klidu pomohou dítěti se uklidnit. Pak je snazší vrátit se k úkolu, třeba po menších krocích.",
        },
        {
          rating: "unsuitable",
          text: "Odchod může dítě vnímat jako trest. Klid jde zajistit i bez vyloučení, třeba klidným místem ve třídě.",
        },
      ],
      explanation:
        "Zakrývání uší a křik často znamenají, že je kolem příliš mnoho podnětů, ne že se dítě vzpírá. Proto se nejdřív sníží zátěž (hluk, nároky, počet lidí kolem) a k úkolu se dítě vrací až po zklidnění.",
    },
  },
  stub("Konflikt s vrstevníkem", "konflikt-s-vrstevnikem"),
  stub("Senzorické přetížení", "senzoricke-pretizeni"),
  stub("Návrat do klidu", "navrat-do-klidu"),
];

/**
 * Pořadí v ukázce je pevné: začíná scénářem z PDF jako situace 1 z 10, dál následují
 * ostatní v pořadí z PDF. Mozaika na stránce drží původní pořadí z PDF.
 */
export const demoSituations: Situation[] = [
  ...situations.filter((s) => s.fromPdf),
  ...situations.filter((s) => !s.fromPdf),
];
