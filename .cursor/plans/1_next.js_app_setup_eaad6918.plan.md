---
name: Next.js app setup
overview: Create a new Next.js application with TypeScript, Tailwind CSS, and App Router in the existing project directory, aligned with the project outline's tech stack and the folder layout expected in the master todo (app/, components/, lib/, etc. at project root).
todos: []
isProject: false
---

# Plan: Create Next.js App (Phase 0 — Project Setup)

Scope: **Only** the first checkbox in Phase 0 — *"Create the Next.js app (with TypeScript, Tailwind CSS, App Router)"*. Folder scaffolding, linting, base layout, and Vercel deploy are separate items in the todo and are out of scope for this plan.

---

## Context from project outline

From [prompts/project-outline.md](prompts/project-outline.md):

- **Stack**: Next.js App Router, React, TypeScript, Tailwind CSS, optional API routes, Vercel-friendly.
- **Target**: Production-ready MVP (wise-checking quiz app) with a 2.5-hour build window.
- **Architecture**: App at root with `app/`, `components/`, `lib/`, `data/`, `types/`, `hooks/` (and later `constants/`). No `src/` in the outline, so the app should be generated with **no** `src` directory so these folders live at the repo root.

---

## Approach

Use **Create Next App** (official scaffold) so you get:

- App Router by default (Next.js 13+).
- TypeScript and Tailwind via prompts or flags.
- ESLint, optional Turbopack, and a Vercel-ready config.

**Recommended command** (run from project root):

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

Using `.` installs into the current directory (your existing `wise-checking` folder). You will be prompted for Turbopack; choosing **No** is fine for MVP and avoids extra moving parts.

**Alternative (interactive):**  
Run `npx create-next-app@latest .` and when prompted:

- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **No**
- App Router: **Yes**
- Import alias: **@/** (default) or **@/***

---

## What this produces

- `**app/`** — App Router routes (e.g. `app/layout.tsx`, `app/page.tsx`, `app/globals.css`).
- `**public/`** — Static assets.
- `**package.json`** — Next.js, React, TypeScript, Tailwind, ESLint deps and scripts.
- `**tsconfig.json`** — TypeScript + `@/*` path alias.
- `**tailwind.config.ts**` (or `.js`) — Tailwind config.
- `**postcss.config.mjs**` — PostCSS for Tailwind.
- `**next.config.ts**` (or `.js`) — Next config (Vercel-compatible by default).
- `**.eslintrc.json**` — ESLint for Next.

No `components/`, `lib/`, `data/`, `types/`, `hooks/`, or `constants/` yet; those are covered by the next todo items (“Set up base folders”).

---

## Pre-flight

- **Node**: Ensure Node 18.17+ (or 20+) is installed (`node -v`).
- **Directory**: Run the command from the project root (e.g. `/Users/shakib/_workspace/projects/checking-account-finder` or your `wise-checking` project directory).
- **Empty directory**: Create Next App works best in an empty directory. You already have only `prompts/` and `README.md`; the scaffolder may warn about existing files. If it refuses to run, create the app in a temp dir and move the generated files (except `prompts/` and any docs you keep) into the project root, or remove/move non-essential files temporarily.

---

## Verification

After the command completes:

1. Run `npm run dev` and open `http://localhost:3000` — you should see the default Next.js page.
2. Confirm **App Router**: `app/layout.tsx` and `app/page.tsx` exist.
3. Confirm **TypeScript**: `tsconfig.json` exists and `app/page.tsx` has no `.js` extension.
4. Confirm **Tailwind**: `app/globals.css` uses `@tailwind` directives; changing a class in `app/page.tsx` should affect styles.

---

## Summary


| Item      | Action                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Tool      | `npx create-next-app@latest .`                                                                              |
| Flags     | `--typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"`                                  |
| Directory | Project root (current folder)                                                                               |
| Outcome   | App Router + TypeScript + Tailwind + ESLint, `app/` at root, ready for Phase 0 folder and layout setup next |


