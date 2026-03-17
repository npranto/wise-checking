# Design System — Wise Checking

Airbnb-style design system for the Wise Checking app. Built with **Tailwind CSS v4**, **Next.js App Router**, and **data-theme** for light/dark mode. Softer radius only (no pill/rounded-full).

---

## 1. Color palette

Tokens are defined in `app/globals.css` and exposed to Tailwind via `@theme inline`. Use semantic class names (e.g. `bg-primary`, `text-muted`) so themes switch correctly.

### Light theme (`[data-theme="light"]` or default)

| Token            | Hex (light) | Usage                          |
|------------------|-------------|---------------------------------|
| primary          | `#FF5A5F`   | Main CTA, links, key highlights |
| primary-hover    | `#E04A4F`   | Primary hover state             |
| secondary        | `#00A699`   | Trust, secondary actions        |
| accent           | `#FC642D`   | Badges, promotions              |
| background       | `#FFFFFF`   | Page background                 |
| surface          | `#F7F7F7`   | Cards, panels                   |
| border           | `#EBEBEB`   | Borders                         |
| text-primary     | `#222222`   | Headings, body                  |
| text-secondary   | `#717171`   | Secondary copy                  |
| text-muted       | `#B0B0B0`   | Captions, placeholders          |
| success          | `#008A05`   | Success states                  |
| warning          | `#FFB400`   | Warnings                        |
| error            | `#C13515`   | Errors, danger                  |
| info             | `#428BFF`   | Info                            |
| link             | `#FF5A5F`   | Links                           |
| muted            | alias of text-muted | Use `text-muted` for muted text |

### Dark theme (`[data-theme="dark"]`)

Dark values are set in `[data-theme="dark"]` in `app/globals.css` (e.g. `--color-background: #0A0A0A`, `--color-surface: #171717`, adjusted text and borders). The same Tailwind classes apply; switch theme by setting `data-theme` on `<html>` (future toggle).

---

## 2. Typography

- **Fonts**: Geist Sans (body/UI), Geist Mono (code). Loaded in `app/layout.tsx` and exposed as `--font-sans` / `--font-mono` in `@theme`.
- **Scale**: Use Tailwind’s type scale: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`. Headings: `font-semibold` or `font-bold`, `tracking-tight`.
- **Weights**: `font-normal`, `font-medium`, `font-semibold`, `font-bold`.
- **Usage**: Large hero titles (`text-3xl sm:text-4xl`), section titles (`text-xl`), body (`text-base`), captions (`text-sm text-muted`), code (`font-mono`).

---

## 3. Spacing and layout

- **Spacing scale**: Tailwind default (4–96). Use `gap-*`, `p-*`, `m-*`, `space-y-*` for consistency.
- **Layout constants** (`app/constants/ui.ts`):
  - `UI.MAX_WIDTH`: `max-w-3xl`
  - `UI.CONTAINER_PADDING`: `px-6`
  - `UI.SECTION_SPACING`: `py-12 sm:py-16`
  - `UI.BLOCK_SPACING`: `py-8`
  - `UI_CONTAINER_CLASS`: `mx-auto` + max-width + padding
- **When to use LayoutShell**: Full-page content (quiz, review, results). Use `LayoutShell` with optional `className` (e.g. `SECTION_SPACING`). For one-off sections, use `UI_CONTAINER_CLASS` or `UI.*` constants directly.

---

## 4. Radius (softer only)

No `rounded-full` for buttons or cards. Use:

- **Small** (`RADIUS.SM` / `rounded-md`): badges, small chips.
- **Medium** (`RADIUS.MD` / `rounded-lg`): buttons, inputs.
- **Large** (`RADIUS.LG` / `rounded-xl`): cards, panels.

Defined in `app/constants/ui.ts` as `RADIUS.SM`, `RADIUS.MD`, `RADIUS.LG`.

---

## 5. Dark mode

Implemented via **data-theme** on `<html>`:

- `data-theme="light"` — light palette (default in `app/layout.tsx`).
- `data-theme="dark"` — dark palette.

A future theme toggle can set `data-theme` from user preference (e.g. localStorage). All components use theme tokens, so no class changes are needed.

---

## 6. Components

| Component   | Location                    | Usage |
|------------|-----------------------------|--------|
| **Button** | `app/components/Button.tsx` | Variants: `primary`, `secondary`, `ghost`, `danger`. Sizes: `sm`, `md`, `lg`. Softer radius. Pass `href` for Next.js `Link`. |
| **Card**   | `app/components/Card.tsx`   | Surface, border, `rounded-xl`, optional shadow. Use for recommendation blocks, previews, panels. |
| **Input**  | `app/components/Input.tsx`   | Text input with label, error state, focus ring. Use for feedback and forms. |
| **Badge**  | `app/components/Badge.tsx`  | Variants: `primary`, `secondary`, `success`, `muted`, `accent`. For categories (e.g. “Best Halal-Aware”, “No-Fee”). |
| **TextLink** | `app/components/TextLink.tsx` | Inline/standalone links. Props: `href`, `underline`, `external`. Use for “edit”, “apply”, “retake quiz”. |
| **PageHeader** | `app/components/PageHeader.tsx` | Page title + optional description. Uses `text-muted` for description. |
| **LayoutShell** | `app/components/LayoutShell.tsx` | Max-width container + padding. Use for full-page content; see constants above. |

Form controls (Select, Checkbox, Radio) and ProgressBar are not yet implemented; when added, they should use the same palette, radius, and focus ring from this system.

---

## 7. Motion and accessibility

- **Transitions**: `transition-colors` (or theme `--duration-default`, `--ease-default`) for hover/focus.
- **Focus**: Visible focus ring via `:focus-visible` in `app/globals.css` and component-level `focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2` where needed.
- **Reduced motion**: `prefers-reduced-motion: reduce` in `app/globals.css` shortens animations and transitions.
