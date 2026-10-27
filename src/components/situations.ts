export type Situation = {
  title: string;
  image: string;
  imageAlt: string;
  /** Text situace. Zástupný, dokud ho neschválí odborník. */
  text: string;
  options: [string, string, string, string];
  /** Zdrojový scénář z PDF (strana 4). Ostatní jsou jen zástupné. */
  fromPdf: boolean;
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
