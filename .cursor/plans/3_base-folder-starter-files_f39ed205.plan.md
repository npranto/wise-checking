---
name: base-folder-starter-files
overview: Create minimal starter files for each core folder (app, components, lib, data, types, hooks, constants) with basic exports and explanatory comments so the quiz + results MVP can grow on a clear structure.
todos:
  - id: create-app-subpages
    content: Add minimal lib helpers, localStorage hook, and route/copy/ui constants wired for later use.
    status: completed
isProject: false
---

### Scope

- **Goal**: Satisfy the `Set up base folders` checklist in `prompts/project-master-todo-list.md` by adding minimal, well-documented starter files in each core folder (`app/`, `components/`, `lib/`, `data/`, `types/`, `hooks/`, `constants/`).
- **Constraint**: Preserve existing implementations in `app/layout.tsx` and `app/page.tsx`; new files should complement, not replace, current behavior.

### Folder-by-folder plan

- `**app/` pages**
  - **Add** `app/quiz/page.tsx`:
    - Export a simple placeholder page component.
    - Include comments explaining intended one-question-at-a-time quiz flow, navigation (next/back/skip), and where quiz state will come from.
    - Mention that it will consume helpers from `lib/quiz` and data from `data/questions`.
  - **Add** `app/quiz/review/page.tsx`:
    - Export a placeholder review page component.
    - Comment that this page will show grouped answers, allow quick jumps back to questions, and trigger result generation.
  - **Add** `app/results/page.tsx`:
    - Export a placeholder results page component.
    - Comment that it will render top 3 recommendations, comparison, and CTAs, using data from `lib/quiz`/`data/banks`.
- `**components/` shared UI**
  - **Add** `components/LayoutShell.tsx`:
    - Simple wrapper component that enforces max-width, horizontal padding, and vertical spacing.
    - Comments describe when to wrap full pages vs sub-sections and how it relates to `RootLayout` in `app/layout.tsx`.
  - **Add** `components/PageHeader.tsx`:
    - Reusable header with `title` and `description` props.
    - Comments show example usage in landing, quiz, review, and results pages.
  - **Add** `components/Button.tsx`:
    - Generic button component supporting both `button` and anchor-like behavior (e.g., `asChild` or `href` prop) in a minimal way.
    - Comments clarify when to use this vs `next/link` directly and where primary/secondary styles would live.
- `**lib/` utilities**
  - **Add** `lib/quiz.ts`:
    - Export minimal helper stubs such as `getInitialQuizState`, `goToNextQuestion`, and `goToPreviousQuestion` with placeholder implementations.
    - Comments explain that these functions should be pure, operate on types from `types/quiz`, and not touch storage directly.
  - **Add** `lib/storage.ts`:
    - Export a tiny safe `getLocalStorageItem`/`setLocalStorageItem` wrapper that handles SSR (guards against `window`/`localStorage` not existing).
    - Comments document how quiz state pages/hooks should use this, and that it is intentionally minimal for MVP.
- `**data/` static data**
  - **Add** `data/questions.ts`:
    - Export a `QUESTIONS` array with 1–2 example question objects, using a shape aligned with `types/quiz` (e.g., id, prompt, options).
    - Comments explain how to extend this list and how categories map to scoring.
  - **Add** `data/banks.ts`:
    - Export a `BANK_ACCOUNTS` array with 1–2 example bank/account entries including halal flags and key attributes.
    - Comments describe how these fields will be used in scoring and results cards.
  - **Add** `data/categories.ts`:
    - Export a small list of category identifiers/labels used by both questions and recommendations.
    - Comments describe how these categories tie together quiz, scoring, and UI sections.
- `**types/` core models**
  - **Add** `types/quiz.ts`:
    - Define interfaces for `QuizQuestion`, `AnswerOption`, `UserAnswer`, and basic `QuizState`.
    - Comments clarify optional vs required fields and how they will be used by `lib/quiz` and `hooks`.
  - **Add** `types/bank.ts`:
    - Define types for `Bank`, `BankAccount`, halal flags, and a few scoring-related attributes (e.g., `monthlyFee`, `needsHalalReview`).
  - **Add** `types/results.ts`:
    - Define types for `ResultBucket` and `RecommendationResult` with fields like `label`, `account`, `reasons`, and `estimatedYearlyCost`.
  - **Add** `types/feedback.ts`:
    - Define a simple `FeedbackSubmission` type (e.g., `message`, `email?`, `createdAt`).
  - **Add** `types/index.ts`:
    - Re-export the main types from the above files.
    - Comments show example import patterns to keep other files’ imports tidy.
- `**hooks/`**
  - **Add** `hooks/useLocalStorage.ts`:
    - Implement a minimal generic hook `useLocalStorageState<T>` that syncs state to `localStorage` using the helpers from `lib/storage`.
    - Handle SSR by lazily reading initial value client-side.
    - Comments explain expected usage for quiz state and caveats (e.g., not for sensitive data).
- `**constants/`**
  - **Add** `constants/routes.ts`:
    - Export string constants for `/`, `/quiz`, `/quiz/review`, `/results`.
    - Comments suggest using these across `Link` and navigation helpers to avoid hard-coded paths.
  - **Add** `constants/copy.ts`:
    - Export a small `COPY` object with app name, tagline, and key repeated strings (e.g., quiz CTA text).
    - Comments explain that moving strings here supports later iteration and i18n.
  - **Add** `constants/ui.ts`:
    - Export design tokens such as `MAX_WIDTH`, spacing presets, and className snippets used by layout/components.
    - Comments show example usage in `LayoutShell` and pages.

### How this ties back to the TODO

- **Master TODO alignment**: Once these files exist with minimal exports and comments, you can check off the `Set up base folders` item in `prompts/project-master-todo-list.md` and reference these modules when implementing later phases (quiz engine, results page, feedback).
- **Risk management**: All new files are additive, small, and typed; they won’t change current homepage behavior and will make subsequent tasks more structured and discoverable.

