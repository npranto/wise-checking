/**
 * Card component for recommendation blocks, preview sections, and content panels.
 * Surface background, subtle border, softer radius (rounded-xl), optional shadow.
 * See DESIGN-SYSTEM.md.
 */

import { RADIUS } from "@/constants/ui";

interface CardProps {
  children: React.ReactNode;
  /** Optional extra className. */
  className?: string;
  /** Optional shadow (card or none). */
  shadow?: "none" | "card";
}

const baseClass = "border border-border bg-surface " + RADIUS.LG;

export function Card({ children, className = "", shadow = "card" }: CardProps) {
  const shadowClass = shadow === "card" ? "shadow-[var(--shadow-card)]" : "";
  const combined = [baseClass, shadowClass, className].filter(Boolean).join(" ").trim();

  return <div className={combined}>{children}</div>;
}
