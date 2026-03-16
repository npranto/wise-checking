/**
 * Badge for categories and status (e.g. "Best Halal-Aware", "No-Fee").
 * Softer radius (rounded-md), variant by color. See DESIGN-SYSTEM.md.
 */

import { RADIUS } from "@/constants/ui";

type BadgeVariant = "primary" | "secondary" | "success" | "muted" | "accent";

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary/12 text-primary",
  secondary: "bg-secondary/12 text-secondary",
  success: "bg-success/12 text-success",
  muted: "bg-surface text-text-secondary border border-border",
  accent: "bg-accent/12 text-accent",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const baseClass =
  "inline-flex items-center px-2.5 py-0.5 text-xs font-medium " + RADIUS.SM;

export function Badge({ children, variant = "muted", className = "" }: BadgeProps) {
  const combined = [baseClass, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ")
    .trim();

  return <span className={combined}>{children}</span>;
}
