---
name: Rename to wise-checking
overview: Update all project name references from "checking-account-finder" / "Checking Account Finder" to "wise-checking" / "Wise Checking" in package identity, app metadata, and any in-repo documentation.
todos: []
isProject: false
---

# Rename project to "wise-checking"

## Scope

- **Package name** (npm/source): `checking-account-finder` → `wise-checking`
- **Display/brand name** (user-facing): `Checking Account Finder` → `Wise Checking`
- **In scope**: Source files and version-controlled config/docs that reference the project by name. Exclude build output (`.next/`) and lockfile copies under `node_modules/` (they follow `package-lock.json` or are regenerated).

## Files to update

### 1. Package identity

- **[package.json](package.json)**  
  - Change `"name": "checking-account-finder"` to `"name": "wise-checking"`.
- **[package-lock.json](package-lock.json)**  
  - Root: line 2 — `"name": "checking-account-finder"` → `"name": "wise-checking"`.
  - Root package (empty key): lines 7–8 — same change for the `"name"` field inside `"packages": { "": { ... } }`.

### 2. App metadata (user-facing brand)

- **[app/layout.tsx](app/layout.tsx)**  
  - `metadata.title`: `"Checking Account Finder | Find the Best Account for You"` → `"Wise Checking | Find the Best Account for You"`.
  - Optionally update `metadata.description` to start with “Wise Checking helps you find…” for brand consistency; otherwise leave as-is (it still describes the product).

### 3. In-repo documentation (optional but consistent)

- **[.cursor/plans/1_next.js_app_setup_eaad6918.plan.md](.cursor/plans/1_next.js_app_setup_eaad6918.plan.md)**  
  - Replace references to “checking-account finder” / “checking-account-finder” with “wise-checking” where they denote the project name (e.g. “Target: … (wise-checking quiz app)”, “your existing wise-checking folder”, “Run the command from …/wise-checking”).  
  - Note: The workspace path on disk remains `/Users/shakib/_workspace/projects/checking-account-finder` unless you rename the folder; the plan can still refer to the project as “wise-checking”.

No changes needed in:

- **app/page.tsx** — “Find the best checking account for your needs” and similar lines are product/value copy, not the project or app name.
- **next.config.ts** — No project name.
- **prompts/*.md** — They describe the product (“checking account recommendation app”), not the project name “checking-account-finder”; only change if you want those docs to say “Wise Checking” as the app name.
- **.next/** and **node_modules/** — Build and dependency artifacts; do not edit.

## Summary


| Location                  | Current                               | New             |
| ------------------------- | ------------------------------------- | --------------- |
| package.json              | `checking-account-finder`             | `wise-checking` |
| package-lock.json         | `checking-account-finder` (2 places)  | `wise-checking` |
| layout.tsx metadata.title | Checking Account Finder               | ...             |
| .cursor/plans (optional)  | checking-account-finder / folder name | wise-checking   |


After edits, run `npm install` (or nothing if you only touch metadata/layout) so the lockfile is still valid and any tooling that reads `package.json` name sees `wise-checking`. Renaming the project directory on disk is separate and optional.