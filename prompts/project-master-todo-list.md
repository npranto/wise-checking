# 📝 Master TODO List: Zero to Deployed MVP

## Phase 0 — Project Setup

- [x] Create the Next.js app (with TypeScript, Tailwind CSS, App Router)
- [x] Set up base folders:
  - [x] `app/`
  - [x] `components/`
  - [x] `lib/`
  - [x] `data/`
  - [x] `types/`
  - [x] `hooks/`
  - [x] `constants/`
- [x] Set up linting, formatting, and naming conventions
- [ ] Add base layout, container widths, spacing scale, color tokens
- [ ] Create a deploy target on Vercel

---

## Phase 1 — Product Foundation

- [ ] Define the MVP scope clearly
- [ ] Define the page map
- [ ] Define component map
- [ ] Define TypeScript data models
- [ ] Define questionnaire categories and questions
- [ ] Define recommendation categories:
  - [ ] Best Overall
  - [ ] Best Halal-Aware
  - [ ] Best No-Fee
- [ ] Define scoring logic and hard exclusions
- [ ] Create seed dataset for banks/accounts

---

## Phase 2 — Landing Page

- [ ] Build homepage hero
- [ ] Build "How it works" section
- [ ] Build trust/value proposition section
- [ ] Build sample recommendation preview section
- [ ] Add CTA to start quiz
- [ ] Add lightweight footer and donation mention

---

## Phase 3 — Quiz System

- [ ] Build quiz state model
- [ ] Implement question-by-question flow
- [ ] Add progress header with current question/total
- [ ] Add answer selection UI
- [ ] Add back / next / skip actions
- [ ] Add jump-to-question support
- [ ] Add default answer behavior for skipped questions
- [ ] Persist quiz progress locally

---

## Phase 4 — Review Experience

- [ ] Build review page grouped by category
- [ ] Show answered vs skipped
- [ ] Add quick edit links back to a specific question
- [ ] Add "generate results" action

---

## Phase 5 — Recommendation Engine

- [ ] Build deterministic scoring engine
- [ ] Apply hard exclusions
- [ ] Apply halal flags
- [ ] Rank all accounts
- [ ] Generate top 3 recommendation buckets
- [ ] Build explanation summaries per result
- [ ] Compute estimated yearly cost
- [ ] Add "why this matched" output

---

## Phase 6 — Results Page

- [ ] Build results summary header
- [ ] Build top 3 recommendation cards
- [ ] Add expandable details for each card
- [ ] Add comparison section
- [ ] Add apply links
- [ ] Add retake quiz CTA
- [ ] Add methodology / disclaimer section

---

## Phase 7 — Feedback + Donation

- [ ] Build simple feedback form
- [ ] Store feedback using fastest MVP method
- [ ] Add optional donation section
- [ ] Link donation to hosted payment page
- [ ] Add clear copy that donation is optional and unrelated to results

---

## Phase 8 — Polish + Deployment

- [ ] Test full quiz flow
- [ ] Test skipped-question behavior
- [ ] Test edit-from-review behavior
- [ ] Test results consistency
- [ ] Check mobile responsiveness
- [ ] Improve copy and spacing
- [ ] Add metadata / SEO basics
- [ ] Deploy to Vercel
- [ ] Run final smoke test in production
