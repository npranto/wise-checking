/**
 * Quiz page: one-question-at-a-time flow with next/back/skip.
 * Quiz state will come from hooks/useLocalStorage (persisted via lib/storage).
 * This page will consume helpers from lib/quiz and question data from @/data.
 * Placeholder for now; implement full UI in quiz phase.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
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
        <p className="mt-6 text-muted">
          Quiz UI will go here: one question at a time, next/back/skip, using lib/quiz
          and @/data.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            href={ROUTES.QUIZ_REVIEW}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Quiz.GoToReview",
              data: { location: "quiz-page" },
            }}
          >
            Go to review (placeholder)
          </Button>
          <span className="text-muted">{"·"}</span>
          <Button
            href={ROUTES.HOME}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Quiz.BackToHome",
              data: { location: "quiz-page" },
            }}
          >
            {COPY.APP_NAME} home
          </Button>
        </p>
      </LayoutShell>
    </div>
  );
}
