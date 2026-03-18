/**
 * Review page: show answers grouped (e.g. by category), allow quick jumps
 * back to a question, and trigger result generation. Will consume quiz state
 * from storage and lib/quiz; results generation will navigate to /results.
 * Placeholder for now.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { COPY } from "@/constants/copy";
import { ROUTES } from "@/constants/routes";

export default function QuizReviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <LayoutShell className="py-12 sm:py-16">
        <PageHeader
          title={COPY.REVIEW_TITLE}
          description="Edit any answer, then generate your top 3 recommendations."
        />
        <p className="mt-6 text-muted">
          Review UI will show grouped answers and links back to each question;
          {COPY.GENERATE_RESULTS} will run scoring and go to {ROUTES.RESULTS}.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            href={ROUTES.QUIZ}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Review.BackToQuiz",
              data: { location: "review-page" },
            }}
          >
            Back to quiz
          </Button>
          <span className="text-muted">{"·"}</span>
          <Button
            href={ROUTES.RESULTS}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Review.GoToResults",
              data: { location: "review-page" },
            }}
          >
            Results (placeholder)
          </Button>
        </p>
      </LayoutShell>
    </div>
  );
}
