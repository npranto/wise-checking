import type { ReactNode } from "react";

// Generic layout shell that pages can use to get:
// - A consistent max-width
// - Horizontal padding
// - Vertical spacing from the viewport edges
// The goal is to keep page components focused on content rather than layout.
type LayoutShellProps = {
  children: ReactNode;
  /**
   * Optional extra classes for special layouts (e.g., wider results page).
   */
  className?: string;
};

export function LayoutShell({ children, className }: LayoutShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div
        className={[
          "mx-auto max-w-3xl px-6 py-12 sm:py-16",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </main>
  );
}

