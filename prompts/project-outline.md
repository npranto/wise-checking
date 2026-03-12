You are acting as a senior product engineer, staff-level Next.js architect, UX strategist, and pragmatic MVP builder.

Your job is to help me build a production-ready MVP web app in **2.5 hours** using:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Optional minimal backend/API routes
- Vercel-friendly architecture
- Stripe Payment Links or the easiest donation integration possible
- AI-powered recommendation output

## Product Goal

Build a web app that helps users find the **best checking account for their needs** through a structured questionnaire, with special attention to:

- halal / Muslim-friendly banking concerns
- avoiding fees
- convenience
- branch access
- ATM access
- overdraft preferences
- digital experience
- customer priorities

The user should answer questions mostly **one at a time**, with progress tracking, and then receive **Top 3 personalized account recommendations**.

The app should feel trustworthy, modern, clear, lightweight, and easy to share.

## App Purpose

I am a frontend engineer building a tool that helps Muslims and other users choose the best checking account using a research-driven and personalized quiz flow.

The app should:
- educate users
- personalize choices
- clearly explain tradeoffs
- make final recommendations easy to understand
- give users direct links to the bank account application pages
- allow the user to retake the quiz at any time
- optionally allow users to donate $1–$5 to a Muslim institution I support

## Donation Cause

Include an optional donation section for:

**Roots Community Space**  
4200 International Parkway  
Carrolton TX, 75007

About:
Community in Dallas, focused on spiritual-social programs for adults, couples & young families.

Position this honestly and respectfully:
- completely optional
- framed as support for a Muslim learning/community institution I personally value
- mention that I have benefited from the institution and want to support its work
- do not make the donation feel pushy
- do not block quiz results behind payment
- use the easiest and fastest payment implementation possible for MVP

## Success Criteria

By the end of the build, I want an MVP that includes:

1. A polished landing page
2. A quiz flow with one-question-at-a-time UX
3. Progress indicator showing current question and remaining questions
4. Ability to:
   - go to previous question
   - jump to a specific question number
   - skip a question and use a default answer
5. A final review page where users can inspect and quickly change answers
6. A results page showing:
   - Best overall checking account
   - Best halal-safe option
   - Best no-fee option
   - or other top 3 personalized categories if dynamic categorization is better
7. Recommendation cards that are visually easy to compare
8. Clear explanation of:
   - why each account was chosen
   - top pros
   - tradeoffs
   - fee risks
   - halal notes
   - exact account name
   - exact bank name
   - direct application link
9. Feedback capture after results
10. Optional donation section
11. Retake quiz CTA
12. Clean architecture that I can extend later

## Important Product Constraints

- I need to ship the MVP in **2.5 hours**
- Prioritize speed, clarity, and execution over overengineering
- Avoid unnecessary complexity
- Prefer simple, maintainable patterns
- Use mock bank data or seed data if necessary for MVP
- AI can be used to rank recommendations from user answers + curated bank/account dataset
- If live deep research is too slow for MVP, structure the app so that I can start with static JSON and later upgrade to live AI or research APIs

## Core UX Requirements

### Landing Page
Need a strong homepage that quickly communicates:
- what the tool does
- who it is for
- why it is useful
- that it is halal-aware but useful for everyone
- that it helps compare checking accounts based on real priorities
- that it takes only a few minutes

Landing page should include:
- hero section
- trust/value proposition section
- “How it works” section
- example output preview section
- CTA to start quiz
- optional donation mention near footer or after results, not too early

### Quiz Flow
Questions should be mostly multiple choice.
Each question should have:
- question number
- category label
- progress bar
- answer choices
- skip action
- back button
- next button
- optional “jump to question” drawer or review nav

Need questionnaire state management that is fast and easy to reason about.

### Review Answers Page
Before final results, show:
- all answers grouped by category
- quick edit buttons
- unanswered/skipped questions visibly marked
- button to generate recommendations

### Results Page
Top 3 recommendation cards should be visually strong and easy to compare.
Each card should show:
- badge/category
- bank logo or placeholder
- bank name
- exact account name
- short reason it fits
- estimated yearly cost
- halal classification
- key fee notes
- best-for label
- apply link
- expand for more detail

Need a clean comparison layout.

### Feedback
After results, capture lightweight feedback:
- Was this useful?
- Did the results feel accurate?
- Which bank did you prefer?
- Free text feedback
- Optional email field for updates

## Technical Direction

Recommend the fastest, cleanest architecture for this MVP using:
- Next.js App Router
- TypeScript
- Tailwind
- local mock JSON dataset for bank accounts
- optional server action or API route for AI recommendation generation
- optional localStorage or URL persistence for quiz progress
- simple analytics-friendly structure

## What I Want You To Produce

I want you to guide me step by step and generate exactly what I need to build this MVP quickly.

Please provide the following in order:

### 1. MVP feature scope
Decide what is essential for the 2.5 hour MVP and what should be deferred.

### 2. App architecture
Define the full project structure with folders and files.

Example expectation:
- app/
- components/
- lib/
- data/
- types/
- hooks/

### 3. Page breakdown
List the exact pages/routes to build first.

For example:
- /
- /quiz
- /quiz/review
- /results
- /feedback
- /about or /methodology if needed

For each page include:
- purpose
- must-have UI
- optional UI
- data needs
- implementation priority

### 4. Component breakdown
List the exact components needed for MVP.

For each component include:
- responsibility
- props
- whether server or client
- implementation priority

Examples:
- HeroSection
- ValueProps
- QuizShell
- ProgressHeader
- QuestionCard
- AnswerOptionGroup
- QuizNavigator
- ReviewAnswerGroup
- RecommendationCard
- ComparisonTable
- FeedbackForm
- DonationCard
- Footer

### 5. Data model design
Define the TypeScript types I need for:
- quiz question
- answer option
- user answer
- result profile
- bank account
- recommendation result
- feedback submission

Keep it practical and easy to implement.

### 6. Questionnaire structure
Create the MVP version of the questionnaire.
Use mostly multiple choice.
Group the questions into logical categories.
Keep enough questions to create meaningful recommendations, but not so many that MVP becomes too slow to build.

For each question provide:
- id
- category
- prompt
- answer options
- default skipped behavior
- optional scoring tags

### 7. Scoring / recommendation logic
Design the fastest practical recommendation system for MVP.

Need:
- weighted scoring model
- hard exclusions
- halal flags
- category-based ranking
- method for producing top 3 recommendations

Explain:
- how to map answers to weights
- how to exclude accounts
- how to produce:
  - best overall
  - best halal-safe
  - best no-fee
  - or better dynamic top 3 categories if that is smarter

If AI should be used, explain exactly where.
If AI is unnecessary for MVP, say so clearly and recommend a better approach.

### 8. Bank dataset strategy
Recommend how to structure a static dataset for MVP.
Include the exact fields each bank/account entry should have, such as:
- bankName
- accountName
- monthlyFee
- feeWaiverRule
- minBalance
- directDepositRequired
- zelle
- mobileDeposit
- branchesAvailable
- statesSupported
- halalFlags
- overdraftPolicy
- atmFeePolicy
- atmReimbursement
- applePay
- googlePay
- cashDeposit
- notes
- applyUrl
- categoryTags

Also tell me the minimum number of banks/accounts I need in seed data for a convincing MVP.

### 9. State management approach
Recommend the simplest state management for:
- answers
- progress
- skipped questions
- edit mode
- results payload

Prefer simple solutions suitable for quick implementation.

### 10. Persistence
Recommend the fastest way to save progress:
- localStorage
- sessionStorage
- URL params
- database only if absolutely needed

### 11. Donation integration
Recommend the easiest MVP donation setup.
Prefer:
- Stripe Payment Link
- or similarly fast hosted option

Need:
- implementation approach
- UX copy
- disclaimer copy
- where to place it in the experience

### 12. Feedback collection
Recommend the easiest MVP feedback solution.
Possible options:
- simple API route + JSON storage pattern
- Google Forms embed
- Airtable form
- Notion form
- Supabase if truly necessary

Pick the fastest and most realistic option.

### 13. UI design direction
Give a clean visual direction for the app:
- trustworthy fintech + warm community feel
- halal-aware but not overly niche
- modern and simple
- easy to scan

Specify:
- layout approach
- card design
- spacing
- typography hierarchy
- badge styles
- progress styles
- results comparison style

### 14. Build order for 2.5 hours
Give me the exact implementation sequence in time blocks.

For example:
- 0:00–0:20 setup
- 0:20–0:50 landing page
- 0:50–1:30 quiz flow
- 1:30–1:50 review page
- 1:50–2:10 results logic
- 2:10–2:25 feedback + donation
- 2:25–2:30 polish and deploy

Make this brutally practical.

### 15. Starter code generation plan
After all planning, generate the code in the best sequence.
Do not dump everything at once.
Generate code file by file in the order I should build.

For each step:
- tell me which file to create
- provide the code
- explain where it connects

### 16. Quality bar
All code and structure should follow senior frontend engineering standards:
- scalable Next.js patterns
- clear naming
- reusable components
- maintainable architecture
- minimal but thoughtful UX
- no unnecessary libraries unless they clearly speed up MVP

### 17. Important guardrails
Do not overcomplicate.
Do not suggest enterprise auth unless absolutely necessary.
Do not require a DB unless truly needed.
Do not create complexity that slows MVP.
Favor “working polished MVP” over “perfect architecture”.

## Output Format

Respond in this order:

1. MVP scope
2. Page map
3. Component map
4. Data model
5. Questionnaire design
6. Recommendation logic
7. Dataset structure
8. State management
9. Donation integration
10. Feedback integration
11. UI direction
12. 2.5-hour build plan
13. File-by-file implementation order

Be concrete, practical, and biased toward speed.
Whenever there are multiple options, choose the fastest strong option and explain why.

Assume I am capable of building quickly and do not need beginner explanations.
Treat me like a mid-to-senior frontend engineer who wants an execution-ready build blueprint.