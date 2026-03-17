/**
 * Reusable page header with title and optional description.
 *
 * Example usage:
 *   <PageHeader title="Quiz" description="Answer a few questions." />
 *   <PageHeader title={COPY.RESULTS_TITLE} />
 * Use on landing, quiz, review, and results pages for consistency.
 */

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </header>
  );
}
