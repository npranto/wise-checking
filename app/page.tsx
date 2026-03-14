import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <header className="border-b border-black/8 dark:border-white/8">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the best checking account for your needs
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            A short quiz, then your top 3 personalized recommendations—with attention to
            halal-friendly options, fees, and what you care about most. Useful for
            everyone; built with Muslim-friendly banking in mind.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Takes only a few minutes.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background font-medium transition-colors hover:opacity-90"
          >
            Start the quiz
          </Link>
        </div>
      </header>

      {/* Value proposition / trust */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h2 className="text-xl font-semibold tracking-tight">Why use this tool?</h2>
        <ul className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="text-foreground">Personalized.</strong> Answers drive
            real recommendations—not a one-size-fits-all list.
          </li>
          <li>
            <strong className="text-foreground">Halal-aware.</strong> We factor in
            Muslim-friendly banking concerns so you can choose with confidence.
          </li>
          <li>
            <strong className="text-foreground">Clear tradeoffs.</strong> See fees,
            perks, and tradeoffs in plain language before you apply.
          </li>
          <li>
            <strong className="text-foreground">Direct links.</strong> Go straight to
            each bank’s application page when you’re ready.
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="border-t border-black/8 dark:border-white/8">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-medium text-foreground">
                1
              </span>
              <div>
                <span className="font-medium text-foreground">Answer the quiz</span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  Mostly multiple choice. You can skip questions or go back and change
                  answers.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-medium text-foreground">
                2
              </span>
              <div>
                <span className="font-medium text-foreground">Review your answers</span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  See everything in one place and edit any answer before generating
                  results.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-medium text-foreground">
                3
              </span>
              <div>
                <span className="font-medium text-foreground">
                  Get your top 3 recommendations
                </span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  Best overall, best halal-safe, best no-fee—or other categories that
                  fit your profile. With clear reasons and apply links.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Example output preview */}
      <section className="border-t border-black/8 dark:border-white/8">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <h2 className="text-xl font-semibold tracking-tight">What you’ll see</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
            Recommendation cards you can compare side by side: bank name, account name,
            why it fits, fees, halal notes, and a direct apply link.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {["Best overall", "Best halal-safe", "Best no-fee"].map((label) => (
              <div
                key={label}
                className="flex-1 rounded-lg border border-black/8 dark:border-white/8 bg-zinc-50/50 dark:bg-zinc-900/30 px-4 py-3"
              >
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
                  {label}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Bank name · Account name · Apply →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA again */}
      <section className="border-t border-black/8 dark:border-white/8">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 text-center">
          <Link
            href="/quiz"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background font-medium transition-colors hover:opacity-90"
          >
            Start the quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/8 dark:border-white/8">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Built to help you compare checking accounts based on your real priorities.
            You can retake the quiz anytime.
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
            Optional: support a Muslim community space I value—donation is completely
            optional and never required for your results.
          </p>
        </div>
      </footer>
    </div>
  );
}
