/**
 * Wrapper that enforces max-width, horizontal padding, and vertical spacing.
 * Use for full-page content (e.g. quiz, review, results) or for sub-sections.
 * RootLayout in app/layout.tsx provides font and body; this component
 * constrains content width and padding. See constants/ui and DESIGN-SYSTEM.md
 * for when to use LayoutShell vs raw container classes.
 */

import { UI_CONTAINER_CLASS } from "@/constants/ui";

interface LayoutShellProps {
  children: React.ReactNode;
  /** Optional extra className (e.g. section spacing). */
  className?: string;
}

export function LayoutShell({ children, className = "" }: LayoutShellProps) {
  return <div className={`${UI_CONTAINER_CLASS} ${className}`.trim()}>{children}</div>;
}
