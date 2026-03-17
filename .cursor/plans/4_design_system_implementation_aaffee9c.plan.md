---
name: Design System Implementation
overview: Implement an Airbnb-style design system inside app/ with CSS variables and @theme for light/dark (data-theme), extend layout/typography/spacing constants, refactor Button and add atomic components (Card, Input, Badge, Link), then update existing pages and add DESIGN-SYSTEM.md.
todos: []
isProject: false
---

# Design System Implementation Plan

## Scope (aligned with master todo)

The [project-master-todo-list](prompts/project-master-todo-list.md) implies these atomic components across phases:

- **Phase 2 (Landing)**: Hero, sections, CTAs, footer → Button, Card (preview), Link
- **Phase 3–4 (Quiz/Review)**: Progress header, answer selection, actions → Button, form controls (Input, Radio/Checkbox), optional ProgressBar
- **Phase 6 (Results)**: Recommendation cards, expandable details, comparison, apply/retake → Card, Button, Link, Badge (e.g. "Best Halal-Aware", "No-Fee")
- **Phase 7 (Feedback)**: Form → Input, Button

The design system will introduce tokens and primitives so these features can be built consistently.

---

## 1. CSS tokens and theme (Tailwind v4)

**File:** [app/globals.css](app/globals.css)

- **Color variables** (Airbnb-inspired):
  - Primary: coral `#FF5A5F` / `#FF385C`; secondary: teal `#00A699`; accent: orange `#FC642D`.
  - Background, surface (`#F7F7F7` light), border (`#EBEBEB` light).
  - Text: primary `#222222`, secondary `#717171`, muted `#B0B0B0`.
  - Semantic: success, warning, error, info (e.g. success green, error red).
- **Theme strategy**: Use `[data-theme="light"]` and `[data-theme="dark"]` on `<html>`. When `data-theme` is not set, fall back to `prefers-color-scheme` so future toggle only needs to set `data-theme`.
- **@theme inline**: Expose all colors as `--color-`* (e.g. `--color-primary`, `--color-surface`, `--color-text-primary`) and any custom radius/shadows so Tailwind utilities (e.g. `bg-primary`, `text-text-secondary`) work.
- **Radius**: Define tokens for softer radius only (e.g. `--radius-md`, `--radius-lg`, `--radius-xl`) and map to Tailwind if needed; no `rounded-full` in tokens.
- **Shadows**: Optional `--shadow-card`, `--shadow-dropdown` for elevation.
- **Transitions**: Default duration/easing; focus ring variables. Add a `prefers-reduced-motion` block that shortens or disables transitions.
- **Body**: Use `var(--color-background)` and `var(--color-foreground)` (or equivalent), and `var(--font-sans)` so Geist is applied.

**File:** [app/layout.tsx](app/layout.tsx)

- Set default theme on `<html>`: e.g. `data-theme="light"` (or read from cookie/localStorage later for toggle). Ensure `data-theme` is set so CSS selectors work; optional small script to sync `prefers-color-scheme` when `data-theme` is unset.

---

## 2. Design constants (layout, spacing, radius)

**File:** [app/constants/ui.ts](app/constants/ui.ts)

- Keep and document: `MAX_WIDTH`, `CONTAINER_PADDING`, `SECTION_SPACING`, `BLOCK_SPACING`, `UI_CONTAINER_CLASS`.
- Optionally add: `RADIUS_BUTTON`, `RADIUS_CARD`, `RADIUS_INPUT` as class strings (e.g. `rounded-lg`, `rounded-xl`) for consistency in components.

**Optional file:** `app/constants/design-tokens.ts`

- Export semantic token names (e.g. `COLORS`, `RADIUS`, `SHADOW`) as class-name strings or references for use in components and docs. If kept minimal, this can live inside `ui.ts` as a `TOKENS` or `RADIUS` object.

---

## 3. Atomic components (all under [app/components/](app/components))


| Component             | Purpose                                                       | Key design choices                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button** (refactor) | Primary, secondary, ghost, danger; link-like navigation       | Softer radius (`rounded-lg` or `rounded-xl`), sizes sm/md/lg. Remove `rounded-full`. Use design tokens for colors (primary coral, secondary outline/muted). Keep `href` + Next.js `Link` behavior. |
| **Card**              | Recommendation cards, preview blocks, “How it works” steps    | Surface background, subtle border, `rounded-xl`, optional shadow. Slot for header/body/footer or single `children`.                                                                                |
| **Input**             | Feedback form, any text field                                 | Border from tokens, `rounded-lg`, focus ring, error state (border + optional message).                                                                                                             |
| **Badge**             | “Best Halal-Aware”, “No-Fee”, category labels                 | Small padding, softer radius (`rounded-md`/`rounded-lg`), variant by color (primary, secondary, success, etc.).                                                                                    |
| **Link**              | Inline/standalone links (e.g. “edit”, “apply”, “retake quiz”) | Primary color, hover state, optional underline. Can be a wrapper around Next.js `Link` with consistent styling.                                                                                    |


**Deferred (can add when building quiz/feedback):** Select, Checkbox, Radio, ProgressBar — design system can document intended styles and tokens so they’re implemented later with the same palette and radius.

- **Shared**: All components use CSS variables / Tailwind theme colors and radius tokens; no hardcoded hex or `rounded-full`. Prefer `className` merge (e.g. `cn()` or simple template string) for overrides.

---

## 4. Refactors to existing components and pages

- **[app/components/Button.tsx](app/components/Button.tsx)**: Replace `rounded-full` with softer radius constant; add `variant` (primary | secondary | ghost | danger) and `size` (sm | md | lg); apply token-based background/border/text for each variant.
- **[app/components/PageHeader.tsx](app/components/PageHeader.tsx)**: Use design-system text tokens (e.g. `text-text-primary`, `text-text-secondary`) instead of `text-zinc-600` / `text-zinc-400` so it respects theme.
- **[app/components/LayoutShell.tsx](app/components/LayoutShell.tsx)**: No structural change; ensure it uses `UI_CONTAINER_CLASS` (already does). Optionally add a short JSDoc that points to DESIGN-SYSTEM for when to use LayoutShell vs raw container.
- **[app/page.tsx](app/page.tsx)**: (1) Replace inline button classes with `<Button>` and new variants. (2) Replace `rounded-full` on step indicators (e.g. “1”, “2”, “3”) with softer radius (e.g. `rounded-lg`). (3) Replace `border-black/8`, `text-zinc-`*, `bg-foreground` with design tokens (e.g. `border-border`, `text-text-secondary`, `bg-primary` where appropriate). (4) Use semantic tokens for “What you’ll see” preview cards so they align with Card component styling.
- **Quiz/Review/Results pages** ([app/quiz/page.tsx](app/quiz/page.tsx), [app/quiz/review/page.tsx](app/quiz/review/page.tsx), [app/results/page.tsx](app/results/page.tsx)): Replace ad-hoc link/button classes with `Button` and `Link` from the design system where applicable; use `text-text-secondary` (or equivalent) for muted text.

---

## 5. Documentation

**File:** `DESIGN-SYSTEM.md` (project root or `app/DESIGN-SYSTEM.md`)

- **Palette**: Table or list of color tokens with hex values for light/dark (e.g. primary, surface, text-primary, text-secondary, semantic).
- **Typography**: Scale (xs–2xl or equivalent), weights, usage (headings, body, caption, code); reference Geist Sans/Mono.
- **Spacing**: Scale (e.g. 4–96); layout (container max-width, padding, section/block spacing); point to `app/constants/ui.ts`.
- **Radius**: Softer only — small/medium/large (e.g. `rounded-md`, `rounded-lg`, `rounded-xl`); no pill for buttons/cards.
- **Dark mode**: Implemented via `data-theme="light"` / `data-theme="dark"`; note future toggle.
- **Component usage**: When to use LayoutShell; Button variants and sizes; Card, Input, Badge, Link; where form controls and ProgressBar will align when added.

---

## 6. File and dependency summary


| Action         | File                                                                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edit           | [app/globals.css](app/globals.css) — full tokens, data-theme, @theme, focus, reduced-motion                                                                                       |
| Edit           | [app/layout.tsx](app/layout.tsx) — set `data-theme` on `<html>`                                                                                                                   |
| Edit           | [app/constants/ui.ts](app/constants/ui.ts) — optional radius/layout tokens                                                                                                        |
| Add (optional) | `app/constants/design-tokens.ts` — semantic token exports                                                                                                                         |
| Edit           | [app/components/Button.tsx](app/components/Button.tsx) — variants, sizes, softer radius                                                                                           |
| Add            | `app/components/Card.tsx`                                                                                                                                                         |
| Add            | `app/components/Input.tsx`                                                                                                                                                        |
| Add            | `app/components/Badge.tsx`                                                                                                                                                        |
| Add            | `app/components/Link.tsx` (or `TextLink.tsx`)                                                                                                                                     |
| Edit           | [app/components/PageHeader.tsx](app/components/PageHeader.tsx) — use text tokens                                                                                                  |
| Edit           | [app/page.tsx](app/page.tsx) — Button, tokens, softer radius, Card where relevant                                                                                                 |
| Edit           | [app/quiz/page.tsx](app/quiz/page.tsx), [app/quiz/review/page.tsx](app/quiz/review/page.tsx), [app/results/page.tsx](app/results/page.tsx) — use design system Button/Link/tokens |
| Add            | `DESIGN-SYSTEM.md`                                                                                                                                                                |


No new npm dependencies required; use existing Tailwind v4 and Next.js. Use `clsx` or `cn` (if already in project) for className merging in new components; if not present, add `clsx` or keep simple string concatenation.

---

## 7. Implementation order

1. **Tokens and theme** — globals.css + layout.tsx `data-theme`.
2. **Constants** — ui.ts (and optional design-tokens.ts).
3. **Button** — refactor then use on homepage and other pages.
4. **Card, Input, Badge, Link** — implement in app/components.
5. **PageHeader + LayoutShell** — switch to tokens.
6. **Pages** — app/page.tsx first (hero, CTAs, step indicators, preview cards), then quiz, review, results.
7. **DESIGN-SYSTEM.md** — write last so it reflects final tokens and components.

This order keeps a single source of truth (CSS + constants) before components, and components before page-level refactors and documentation.