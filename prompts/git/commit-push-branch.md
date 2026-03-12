# Save, auto-commit, and push to GitHub

Act as a careful Git operator. I want to **save all current work locally**, **commit with an auto-generated message**, and **push** to GitHub.

## Preconditions (state what you did)
- Repo is a git repo with `origin` pointing at GitHub (or tell me if not).
- I’m on a branch I intend to push (name the branch).

## Steps to perform
1. **Status** — Show short `git status` so I see what’s staged/untracked.
2. **Stage everything** — Stage all changes I care about (typically `git add -A` or equivalent). If there are files I should *not* commit (e.g. `.env`, secrets), **stop** and list them instead of staging.
3. **Commit message** — Generate a **conventional** message:
   - Format: `type(scope): short imperative description`
   - Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
   - Body optional: bullet list of what changed if diff is large.
   - Derive the message from **actual diff/staged content**, not generic text.
4. **Commit** — Create the commit with that message.
5. **Push** — Push current branch to `origin` (set upstream if needed). Use the safe flow: `git push -u origin <branch>` when branch is new.

## If something blocks you
- Merge conflicts → tell me and suggest next steps.
- No upstream / auth failure → give exact commands to fix (no secrets).
- Empty commit / nothing to commit → say so clearly.

## Output
- Commands you ran (or would run) in order.
- Final commit hash and message.
- Confirmation that push succeeded (or the error to fix).