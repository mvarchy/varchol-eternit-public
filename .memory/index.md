# INDEX: mapa paměti

Čti jako první v každé session, před jakoukoli prací. Tento soubor sám nemá žádný obsah, jen ukazuje, kde co je a v jakém stavu projekt je.

## 1. Stav projektu (jedna řádka)
**Fáze:** Kostra hotová; fotky, reference, statistiky a kontakty doplněny či potvrzeny 2026-10-19. Probíhá nasazení na Vercel; čeká se na pravopis jména a doménu. Brief je v `web-project-brief.md` v kořeni.
Detail je vždy v `memory.md`, sekce „Aktuální stav“.

## 2. Systémové soubory
| Soubor | Obsahuje | Sahej na něj, když |
|---|---|---|
| `.memory/index.md` (tento) | Mapa, stav v jedné řádce | Vznikne nový systémový soubor nebo se změní fáze |
| `.memory/pravidla.md` | Pravidla, jak se paměť vede | Jen na výslovný pokyn uživatele |
| `.memory/memory.md` | Stav, rozhodnutí, changelog, otevřené otázky | Po každé změně projektu |
| `AGENTS.md` | Jediný zdroj pravidel pro všechny agenty: chování, kontext, konvence, lokální skills | Změní-li se pravidla, stack, struktura nebo konvence |
| `.security/` | Bezpečnostní paměť (STATE, DECISIONS, CSP-LOG, AUDIT-LOG) | Při změně čehokoli bezpečnostního, viz skill `web-security-memory` |

## 3. Přednost při rozporu
Živý prompt uživatele → `AGENTS.md` → `.memory/pravidla.md` → `.memory/memory.md` (u živého stavu a rozhodnutí má `memory.md` přednost před sekcí 6 v `AGENTS.md`). Rozpor se nikdy nevyřeší potichu, vždy se nahlásí před akcí.

## 4. Mapa projektu
```
/
├── AGENTS.md                 pravidla, kontext, konvence (jediný zdroj)
├── .memory/                  index.md, pravidla.md, memory.md
├── .agents/skills/           lokální skills (pro Codex, Cursor a další)
├── .security/                bezpečnostní paměť
└── .codex/                   zatím prázdné
```

## 5. Rychlý start session
1. Přečti `AGENTS.md` → `.memory/index.md` → `.memory/pravidla.md` → `.memory/memory.md`.
2. V `memory.md` zjisti, kde se skončilo a co je otevřené.
3. Pracuj.
4. Každou změnu zapiš do `memory.md` ve stejném tahu, kdy vznikla.
