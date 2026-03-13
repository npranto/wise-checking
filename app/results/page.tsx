import Link from "next/link";

// This page will eventually show the scored results from the quiz:
// - A small set of top recommendation cards (e.g., 3 accounts)
// - Clear labels like “Best overall”, “Best halal-safe”, “Best no-fee”
// - Plain-language reasoning for each recommendation
// For now, it is a static placeholder that describes the future layout.
export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <header className="mb-10 text-center">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Results
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Your checking account recommendations (placeholder)
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Once the scoring engine and dataset are wired up, this page will
            show your personalized top picks, with clear explanations and apply
            links for each bank.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          {["Best overall", "Best halal-safe", "Best no-fee"].map((label) => (
            <article
              key={label}
              className="rounded-lg border border-black/8 dark:border-white/8 bg-zinc-50/50 dark:bg-zinc-900/30 px-4 py-3 text-sm"
            >
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
                {label}
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Placeholder bank name · Placeholder account name
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                This will eventually summarize why this account is a good fit
                for your answers (fees, halal-friendly notes, priorities, etc.).
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/8 dark:border-white/8 pt-6 text-sm">
          <Link
            href="/quiz/review"
            className="text-zinc-600 dark:text-zinc-400 underline-offset-4 hover:underline"
          >
            Back to review
          </Link>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-background font-medium transition-colors hover:opacity-90"
          >
            Start over
          </Link>
        </footer>
      </div>
    </main>
  );
}

