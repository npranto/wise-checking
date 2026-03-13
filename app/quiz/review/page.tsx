/**
 * Review page: show answers grouped (e.g. by category), allow quick jumps
 * back to a question, and trigger result generation. Will consume quiz state
 * from storage and lib/quiz; results generation will navigate to /results.
 * Placeholder for now.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
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
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Review UI will show grouped answers and links back to each question;
          {COPY.GENERATE_RESULTS} will run scoring and go to {ROUTES.RESULTS}.
        </p>
        <p className="mt-4">
          <a
            href={ROUTES.QUIZ}
            className="text-foreground underline hover:no-underline"
          >
            Back to quiz
          </a>
          {" · "}
          <a
            href={ROUTES.RESULTS}
            className="text-foreground underline hover:no-underline"
          >
            Results (placeholder)
          </a>
        </p>
      </LayoutShell>
    </div>
  );
}
