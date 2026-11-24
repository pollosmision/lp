# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Link-in-bio landing page for "Pollos Misión" (Bolivia). The repo holds **two independent implementations of the same UI**, each with its own `package.json` / `node_modules` (there is no root package.json):

- `angular/` — the original, deployed site (Angular 12, Bootstrap 5 + bootstrap-icons).
- `react/` — an in-progress replica (React 18 + TypeScript + Vite, Tailwind).

The content is just a list of links (Menú, WhatsApp, Facebook, Instagram, TikTok). It lives in `angular/src/app/core/link.service.ts` and is duplicated in `react/src/data/content.ts` — **update both when changing links**. Icons are bootstrap-icons class names (e.g. `bi-whatsapp`); `highlight` marks the primary button and `social` marks social buttons.

## Angular (`angular/`)

```bash
cd angular
npm install
npm start          # ng serve
npm test           # karma/jasmine (needs Chrome); single spec: npx ng test --include='**/link.service.spec.ts'
npm run build
```

Deploy: the compiled output is committed in `angular/docs/` (served by GitHub Pages at `https://pollosmision.github.io/lp/`). Regenerate with:

```bash
ng build --prod=true --outputPath=docs --baseHref='https://pollosmision.github.io/lp/'
```

Structure: `app.component` hosts `pages/link-bio` (the page), which renders `shared/button-link` per `Link` from `core/link.service`; model in `models/link.model.ts`. Old toolchain (Angular 12, TS 4.3, rxjs 6) — use a compatible Node version.

## React (`react/`)

```bash
cd react
npm install
npm run dev         # vite
npm run build
npm run typecheck   # tsc --noEmit
```

No test runner is configured; `eslint.config.js` exists but there is no lint script.

Structure: `src/App.tsx` composes `components/LinkBio` + `components/Stats` and a dark/light toggle (`hooks/useTheme`); other hooks are `useCountUp` and `useInView`. Types in `src/types`, link data in `src/data/content.ts`.

Gotchas (scaffold is still messy):
- **`src/main.tsx` and `src/App.tsx` may contain leftover Vite-template code** (counter/"Get started" page, `./App.tsx` import) alongside the replica code; verify which version is actually in the file before editing, and check that `index.html` points at the right entry.
- Duplicate Vite configs (`vite.config.ts` and `vite.config.mjs`, identical).
- Tailwind: `package.json` has Tailwind v4, but `tailwind.config.js` / `postcss.config.cjs` use the v3-style setup (`tailwindcss` as a PostCSS plugin, which v4 doesn't support). Custom brand colors are `pm-yellow`, `pm-red`, `pm-orange`, `pm-blue`, `pm-dark`, `pm-darkred`; dark mode is class-based. Expect to fix this (e.g. `@tailwindcss/postcss` or `@tailwindcss/vite`) if the build fails.
