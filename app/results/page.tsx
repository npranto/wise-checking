/**
 * Results page: render top 3 recommendations (ResultBucket), comparison,
 * and CTAs. Data will come from lib/quiz (or scoring module) and @/data.
 * Placeholder for now.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { COPY } from "@/constants/copy";
import { ROUTES } from "@/constants/routes";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <LayoutShell className="py-12 sm:py-16">
        <PageHeader
          title={COPY.RESULTS_TITLE}
          description="Compare and apply; retake the quiz anytime."
        />
        <p className="mt-6 text-muted">
          Results UI will show recommendation cards (label, account, reasons,
          estimatedYearlyCost), comparison section, and apply links using @/data.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            href={ROUTES.QUIZ}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Results.BackToQuiz",
              data: { location: "results-page" },
            }}
          >
            {COPY.QUIZ_CTA}
          </Button>
          <span className="text-muted">{"·"}</span>
          <Button
            href={ROUTES.HOME}
            variant="ghost"
            size="sm"
            className="underline"
            analytics={{
              event: "Results.Home",
              data: { location: "results-page" },
            }}
          >
            {COPY.APP_NAME} home
          </Button>
        </p>
      </LayoutShell>
    </div>
  );
}
