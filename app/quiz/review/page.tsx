import Link from "next/link";

// This page will summarize all answers before generating results.
// The eventual behavior:
// - Show each question with the user’s current answer
// - Allow quick edits (jump back into the quiz or inline changes)
// - Confirm before moving on to the results page
// Right now, it just describes that future flow so other parts of the app
// can safely link to it.
export default function QuizReviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <header className="mb-10">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Review
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Review your answers before seeing recommendations
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Later, this page will list all of your responses in one place so you
            can quickly spot anything that looks off before we score your quiz
            and generate bank recommendations.
          </p>
        </header>

        <section className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            In the full build, expect to see:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Each quiz question with your current answer.</li>
            <li>Links or controls to jump back and change any answer.</li>
            <li>A clear button to generate your top recommendations.</li>
          </ul>
        </section>

        <footer className="mt-10 flex items-center justify-between border-t border-black/8 dark:border-white/8 pt-6">
          <Link
            href="/quiz"
            className="text-sm text-zinc-600 dark:text-zinc-400 underline-offset-4 hover:underline"
          >
            Back to quiz
          </Link>
          <Link
            href="/results"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-background text-sm font-medium transition-colors hover:opacity-90"
          >
            See placeholder results
          </Link>
        </footer>
      </div>
    </main>
  );
}

