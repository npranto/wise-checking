# Wise Checking

Web app that helps users find the **best checking account for their needs** through a structured questionnaire. Outputs **top 3 personalized recommendations** with attention to halal-friendly options, fees, and user priorities.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Vercel-friendly

---

## Product (high level)

- **Quiz flow:** Mostly one question at a time, with progress, back/skip, and optional jump-to-question.
- **Review:** Before results—inspect and edit answers by category.
- **Results:** Recommendation cards (compare bank name, account name, reasons, fees, halal notes, apply links).
- **Feedback:** Lightweight capture after results (useful? accurate? preferred bank? optional email).
- **Donations (optional):** Stripe Payment Links (or similar)—never block results behind payment; optional support for **Roots Community Space** (Dallas), framed honestly and non-pushy.

Design goals: trustworthy, modern, clear, lightweight, easy to share.

Detailed scope, UX, data models, and build order live in **[`prompts/project-outline.md`](prompts/project-outline.md)**.

---

## Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or pnpm / yarn)

---

## Developer setup

```bash
# Install dependencies
npm install
```

---

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start dev server (App Router + HMR)  |
| `npm run build`| Production build                     |
| `npm run start`| Run production server after build    |
| `npm run lint` | ESLint (Next.js config)              |

**Local dev (default):** [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

---

## Project layout (typical for this app)

- `app/` — App Router routes and layouts
- `components/` — UI and feature components
- `lib/` — helpers, clients
- `data/` — mock/seed bank & account data
- `types/` — shared TypeScript types
- `public/` — static assets
- `prompts/` — product/engineering prompts and build blueprint

---

## Environment

When you add API keys or payment links, use **`.env.local`** (gitignored by default). Do not commit secrets.

---

## Deploy

- **Vercel:** Connect repo → deploy; set env vars in the dashboard.
- Build command: `npm run build` · Output: Next.js default.

---

## Related prompts

- **[`prompts/project-outline.md`](prompts/project-outline.md)** — Full MVP scope, architecture, questionnaire, scoring, donation/feedback.
- **`prompts/git/`** — Branch naming and commit/push workflows.

---

## License

Private (`"private": true` in `package.json`).
