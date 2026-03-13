/**
 * Results page: render top 3 recommendations (ResultBucket), comparison,
 * and CTAs. Data will come from lib/quiz (or scoring module) and @/data.
 * Placeholder for now.
 */

import { LayoutShell } from "@/components/LayoutShell";
import { PageHeader } from "@/components/PageHeader";
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
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Results UI will show recommendation cards (label, account, reasons,
          estimatedYearlyCost), comparison section, and apply links using
          @/data.
        </p>
        <p className="mt-4">
          <a
            href={ROUTES.QUIZ}
            className="text-foreground underline hover:no-underline"
          >
            {COPY.QUIZ_CTA}
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
