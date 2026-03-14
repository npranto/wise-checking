/**
 * Generic button component. Supports button element and optional anchor-like
 * behavior (e.g. pass href to render as next/link or <a>). Use for primary
 * and secondary CTAs; primary/secondary styles can live here or in callers
 * via className. For internal app routes, prefer next/link with this
 * component's styles or use asChild pattern when needed.
 */

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const baseClass =
  "inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-colors";

export function Button({
  children,
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const combined = `${baseClass} ${className}`.trim();

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
