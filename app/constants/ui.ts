/**
 * Design tokens and shared className snippets for layout and components.
 * Use in LayoutShell, PageHeader, and pages for consistent spacing and width.
 *
 * Example in LayoutShell:
 *   <div className={cn("mx-auto", UI_CONTAINER_MAX_WIDTH, UI_CONTAINER_PADDING)}>
 */

export const UI = {
  /** Max width for main content (align with app/page.tsx). */
  MAX_WIDTH: "max-w-3xl",
  /** Horizontal padding for containers. */
  CONTAINER_PADDING: "px-6",
  /** Vertical spacing between sections. */
  SECTION_SPACING: "py-12 sm:py-16",
  /** Vertical spacing for smaller blocks. */
  BLOCK_SPACING: "py-8",
} as const;

/** Convenience: full container class string. */
export const UI_CONTAINER_CLASS =
  "mx-auto " + UI.MAX_WIDTH + " " + UI.CONTAINER_PADDING;
