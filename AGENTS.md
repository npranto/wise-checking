# AGENTS.md

## Cursor Cloud specific instructions

**Wise Checking** is a single Next.js (App Router) web app. No databases, Docker, or external services are required.

### Running the app

- `npm run dev` starts the dev server on port 3000 with HMR (Turbopack).
- See `README.md` for the full scripts table (`dev`, `build`, `start`, `lint`).

### Lint / Test / Build

- **Lint:** `npm run lint` (ESLint 9 with `eslint-config-next`).
- **Build:** `npm run build` (production build via Turbopack).
- There are no automated tests configured yet.

### Notes

- The app is in early development; only the landing page (`/`) is implemented. The quiz flow (`/quiz`) and other routes are planned but not yet built, so navigating to `/quiz` returns a 404.
- No `.env.local` is required to run the dev server. Environment variables are only needed for optional future integrations (Stripe, AI).
- Node.js v22+ works fine despite the README suggesting v20 LTS.
