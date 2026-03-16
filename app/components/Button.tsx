/**
 * Button component. Supports primary, secondary, ghost, and danger variants;
 * sizes sm, md, lg. Softer radius only (rounded-lg). Use href for Next.js Link.
 * See DESIGN-SYSTEM.md.
 */

import Link from "next/link";
import { RADIUS } from "@/constants/ui";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

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
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const combined = [baseClass, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (href != null && href !== "") {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
