/**
 * Button component. Supports primary, secondary, ghost, and danger variants;
 * sizes sm, md, lg. Softer radius only (rounded-lg). Use href for Next.js Link.
 * See DESIGN-SYSTEM.md.
 */

"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { RADIUS } from "@/constants/ui";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type AnalyticsPrimitive = string | number | boolean | null;
type AnalyticsEventData = Record<string, AnalyticsPrimitive>;

export interface ButtonAnalyticsConfig {
  event: string;
  data?: AnalyticsEventData;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
  secondary:
    "border-2 border-border bg-transparent text-foreground hover:bg-surface focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-foreground hover:bg-surface focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
  danger:
    "bg-error text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-8 text-base",
  lg: "h-14 px-10 text-lg",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  /**
   * Optional Vercel Web Analytics custom event tracking.
   * When provided, clicking this button/link fires `track(event, data)`.
   */
  analytics?: ButtonAnalyticsConfig;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const baseClass =
  "inline-flex items-center justify-center font-medium transition-colors " + RADIUS.MD;

export function Button({
  children,
  href,
  type = "button",
  onClick,
  analytics,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const combined = [baseClass, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ")
    .trim();

  const handleClick = () => {
    if (analytics?.event) {
      track(analytics.event, analytics.data);
    }
    onClick?.();
  };

  if (href != null && href !== "") {
    return (
      <Link href={href} className={combined} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={combined}>
      {children}
    </button>
  );
}
