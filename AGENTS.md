# AGENTS.md

## Cursor Cloud specific instructions

**Wise Checking** is a single-service Next.js 16 web app (App Router, React 19, TypeScript, Tailwind CSS 4). There is no database, no Docker, and no external service dependencies.

### Running the app

See `README.md` for the full script table. Key commands:

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Notes

- The quiz route (`/quiz`) is not yet implemented; clicking "Start the quiz" on the landing page will show a 404. This is expected.
- No `.env.local` or secrets are required for the current MVP scope.
- Node.js 22.x works fine despite the README recommending 20 LTS.
