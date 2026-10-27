# INKLUEM

Mobilní nativní iOS-first aplikace. Trenažér krizových a každodenních situací pro učitele, asistenty pedagoga a rodiče. Princip jako Duolingo: krátký scénář → reakce A/B/C/D → okamžitá zpětná vazba a metodické vysvětlení → možnost zopakovat. Zdroj: `inkluem.pdf`.

## Role Clauda
Architekt a app designer. Navrhuje strukturu, flow a hrubé wireframes. Uživatelé jsou učitelé a rodiče v náročných situacích, takže priorita je jednoduchost a přehlednost. Odpovídat česky.

## Rozhodnutí pro MVP (potvrdil uživatel)
- Profily podle PDF: PAS, Aspergerův syndrom, ADHD, Jiná oblast.
- Jen režim učitel → dítě. Rodič/domov a samostatný dětský režim až později.
- „Mé výsledky“ patří do MVP: recap spuštěných scénářů.
- 10 situací podle PDF: Agresivita a frustrace, Výbuch hněvu, Impulzivita, Posměch a vyčlenění, Změna režimu, Úzkost, Odmítnutí úkolu, Konflikt s vrstevníkem, Senzorické přetížení, Návrat do klidu.
- Navigace v PDF mockupu: Domů, Scénáře, Mé výsledky, O aplikaci.
- Každý scénář: 10–15 vět situace, 3–4 reakce, zpětná vazba, metodické vysvětlení.

## Pravidla
- Profil není diagnóza a slouží jen k výběru scénáře. UI i texty to musí jasně říkat. Nepoužívat formulace typu „Dítě s ADHD je…“.
- Texty scénářů a metodická vysvětlení jsou zástupné, dokud je neschválí odborník. Nevymýšlet je jako odborný obsah.
- Wireframes a flow jen v hrubé podobě, budou se hodně měnit.
- Co je nejisté nebo chybí, označit jako otázku. Nerozhodovat za uživatele.

## Wireframy: pracovní postup
Wireframy se dělají v Canvasu = Artifact tool (jedna HTML stránka, přepublikovávat stejný soubor). Před psaním stránky načíst skill `artifact-design`.

Skilly (globální, `~/.claude/skills`) a kdy je použít:
1. `wireframe`: hlavní postup. Nejdřív potvrdit cíl a pojmenovat osu variací (3+ greyscale varianty, anotace trade-offů, po výběru zapsat rozhodnutí jako brief). Nehodnotí varianty, výběr patří uživateli.
2. `ios-hig-design`, `mobile-ios-design`: pravidla iOS (navigation stack, tab bar, sheets, safe areas, Dynamic Type, tap cíle 44 pt). Wireframe musí vypadat jako nativní iPhone, ne jako web.
3. `ux-heuristics`: audit hotových variant (Nielsen, Krug), než se uživateli ukážou.
4. `cognitive-accessibility`: kontrola textů, délky vět, počtu kroků a zátěže pozornosti. Důležité, protože uživatelé jsou ve stresu. Skill je psaný pro web, bere se jen jako zdroj principů.
5. `apple-design`, `mobile-native`: jen pro prototyp v Canvasu (safe area, dotyk). Jsou psané pro web.
6. `prototype`: až když chce uživatel porovnat několik variant jedné obrazovky vedle sebe.
7. `break-ui`: stresový test na dlouhé texty scénářů, prázdné stavy a nulové výsledky.
8. `impeccable`, `ui-ux-pro-max`: až po rozhodnutí o struktuře, při hi-fi.
9. `write-swift`: až při implementaci, ne při wireframech. Není globálně, je v `~/Git/zephyron-website/.claude/skills`.

Wireframe fáze: greyscale, systémový font, popisky místo reálných textů (žádné Lorem ipsum, žádné vymyšlené odborné texty). Wireframe se nepromuje do hi-fi úpravami, hi-fi se začíná znovu z capture rozhodnutí.

## Hledání dalších skillů
`npx skills find "<dotaz>"`, instalace `npx skills add <owner/repo@skill> -g -a claude-code -y --copy`. Před použitím přečíst SKILL.md celý (skilly běží s plnými právy agenta).

## Repozitář a hosting
- Next.js (App Router, TypeScript, Tailwind) v kořeni. Landing je `src/app/page.tsx`, mockup je statický v `public/mockup/` (rewrite `/mockup` v `next.config.ts`).
- Mockup se staví skriptem `mockup/build.py` ze `mockup/src/template.html`. Po úpravě ho spusť, jinak se změna neprojeví na webu.
- Remote: `git@github.com:Zephyron-Tech/INKLUEM.git`. `inkluem.pdf` se necommituje (obsahuje osobní kontakt).
