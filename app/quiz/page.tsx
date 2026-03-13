/**
 * Quiz page: one-question-at-a-time flow with next/back/skip.
 * Quiz state will come from hooks/useLocalStorage (persisted via lib/storage).
 * This page will consume helpers from lib/quiz and question data from @/data.
 * Placeholder for now; implement full UI in quiz phase.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
import { COPY } from "@/constants/copy";
import { ROUTES } from "@/constants/routes";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <LayoutShell className="py-12 sm:py-16">
        <PageHeader
          title="Quiz"
          description="Answer a few questions to get personalized recommendations."
        />
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Quiz UI will go here: one question at a time, next/back/skip, using
          lib/quiz and @/data.
        </p>
        <p className="mt-4">
          <a
            href={ROUTES.QUIZ_REVIEW}
            className="text-foreground underline hover:no-underline"
          >
            Go to review (placeholder)
          </a>
          {" · "}
          <a
            href={ROUTES.HOME}
            className="text-foreground underline hover:no-underline"
          >
            {COPY.APP_NAME} home
          </a>
        </p>
      </LayoutShell>
    </div>
  );
}
