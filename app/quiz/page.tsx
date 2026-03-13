import Link from "next/link";

// This is the entry point into the quiz flow.
// Later, this page will:
// - Render one question at a time
// - Persist partial answers
// - Let the user move forward/backward through questions
// For now, it is a simple placeholder with copy that explains what will happen.
export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <header className="mb-10">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Quiz
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Answer a few questions about how you use your checking account
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            This will eventually show one question at a time and save your
            progress as you go. For now, it is only a structural placeholder so
            the rest of the app can be wired up.
          </p>
        </header>

        <section className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            In the full implementation, this page will:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Show the current question with multiple-choice answers.</li>
            <li>Let you skip or change answers before moving on.</li>
            <li>Display a lightweight progress indicator (e.g., “Question 2 of 7”).</li>
          </ul>
        </section>

        <footer className="mt-10 flex items-center justify-between border-t border-black/8 dark:border-white/8 pt-6">
          <Link
            href="/"
            className="text-sm text-zinc-600 dark:text-zinc-400 underline-offset-4 hover:underline"
          >
            Back to landing page
          </Link>
          <Link
            href="/quiz/review"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-background text-sm font-medium transition-colors hover:opacity-90"
          >
            Continue to review
          </Link>
        </footer>
      </div>
    </main>
  );
}

