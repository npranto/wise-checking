/**
 * Inline or standalone link with design system colors (primary, hover).
 * Wraps Next.js Link for internal routes; use for "edit", "apply", "retake quiz", etc.
 * See DESIGN-SYSTEM.md.
 */

import Link from "next/link";

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  /** Optional underline style. */
  underline?: boolean;
  /** Optional className. */
  className?: string;
  /** External link (opens in new tab, uses <a>). */
  external?: boolean;
}

const baseClass =
  "text-link hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded";

export function TextLink({
  children,
  href,
  underline = false,
  className = "",
  external = false,
}: TextLinkProps) {
  const combined = [
    baseClass,
    underline ? "underline hover:no-underline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
