# INKLUEM

Landing page a hi-fi mockup trenažéru krizových a každodenních situací pro učitele, asistenty pedagoga a rodiče. Profil dítěte není diagnóza, texty scénářů jsou zástupné do schválení odborníkem.

## Struktura

- `src/` landing page (Next.js, TypeScript, Tailwind)
- `public/mockup/` hi-fi mockup (statická stránka, dostupná na `/mockup`)
- `mockup/` zdroje mockupu (`src/template.html`, `build.py`, ilustrace v `assets/illustrations/`)
- `wireframes/` greyscale wireframy

## Vývoj

```bash
npm install
npm run dev
```

Po úpravě `mockup/src/template.html` spusťte `python3 mockup/build.py`. Vznikne `mockup/inkluem-mockup.html` (samostatný soubor) a `public/mockup/index.html` (pro web).
