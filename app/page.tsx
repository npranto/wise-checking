import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { UI, RADIUS } from "@/constants/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <header className="border-b border-border">
        <div
          className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} ${UI.SECTION_SPACING} text-center`}
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the best checking account for your needs
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            A short quiz, then your top 3 personalized recommendations—with attention to
            halal-friendly options, fees, and what you care about most. Useful for
            everyone; built with Muslim-friendly banking in mind.
          </p>
          <p className="mt-2 text-sm text-muted">Takes only a few minutes.</p>
          <Button
            href="/quiz"
            variant="primary"
            size="md"
            className="mt-8"
            analytics={{
              event: "Home.StartQuiz",
              data: { location: "hero" },
            }}
          >
            Start the quiz
          </Button>
        </div>
      </header>

      {/* Value proposition / trust */}
      <section
        className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} ${UI.SECTION_SPACING}`}
      >
        <h2 className="text-xl font-semibold tracking-tight">Why use this tool?</h2>
        <ul className="mt-6 space-y-4 text-muted">
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
            each bank&apos;s application page when you&apos;re ready.
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div
          className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} ${UI.SECTION_SPACING}`}
        >
          <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center ${RADIUS.MD} bg-surface text-sm font-medium text-foreground`}
              >
                1
              </span>
              <div>
                <span className="font-medium text-foreground">Answer the quiz</span>
                <p className="mt-1 text-muted text-sm">
                  Mostly multiple choice. You can skip questions or go back and change
                  answers.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center ${RADIUS.MD} bg-surface text-sm font-medium text-foreground`}
              >
                2
              </span>
              <div>
                <span className="font-medium text-foreground">Review your answers</span>
                <p className="mt-1 text-muted text-sm">
                  See everything in one place and edit any answer before generating
                  results.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center ${RADIUS.MD} bg-surface text-sm font-medium text-foreground`}
              >
                3
              </span>
              <div>
                <span className="font-medium text-foreground">
                  Get your top 3 recommendations
                </span>
                <p className="mt-1 text-muted text-sm">
                  Best overall, best halal-safe, best no-fee—or other categories that
                  fit your profile. With clear reasons and apply links.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Example output preview */}
      <section className="border-t border-border">
        <div
          className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} ${UI.SECTION_SPACING}`}
        >
          <h2 className="text-xl font-semibold tracking-tight">What you&apos;ll see</h2>
          <p className="mt-2 text-muted text-sm">
            Recommendation cards you can compare side by side: bank name, account name,
            why it fits, fees, halal notes, and a direct apply link.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {[
              { label: "Best overall", variant: "primary" as const },
              { label: "Best halal-safe", variant: "secondary" as const },
              { label: "Best no-fee", variant: "accent" as const },
            ].map(({ label, variant }) => (
              <Card key={label} className="flex-1 px-4 py-3">
                <Badge variant={variant} className="mb-1">
                  {label}
                </Badge>
                <p className="mt-1 text-sm text-muted">
                  Bank name · Account name · Apply →
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA again */}
      <section className="border-t border-border">
        <div
          className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} ${UI.SECTION_SPACING} text-center`}
        >
          <Button
            href="/quiz"
            variant="primary"
            size="md"
            analytics={{
              event: "Home.StartQuiz",
              data: { location: "footer-cta" },
            }}
          >
            Start the quiz
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className={`mx-auto ${UI.MAX_WIDTH} ${UI.CONTAINER_PADDING} py-8`}>
          <p className="text-sm text-muted">
            Built to help you compare checking accounts based on your real priorities.
            You can retake the quiz anytime.
          </p>
          <p className="mt-3 text-sm text-muted">
            Optional: support a Muslim community space I value—donation is completely
            optional and never required for your results.
          </p>
        </div>
      </footer>
    </div>
  );
}
