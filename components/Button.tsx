"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";

// Reusable button component that can render either:
// - a semantic <button> for in-place actions, or
// - a Next.js <Link> when you pass an `href` for navigation.
// Prefer this over styling raw <button>/<a> elements so primary actions
// look and feel consistent across the app.
type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps =
  | (CommonProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
      })
  | (CommonProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

function baseClasses(variant: ButtonProps["variant"]) {
  const common =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-foreground";

  switch (variant) {
    case "secondary":
      return `${common} border border-black/10 dark:border-white/15 bg-background text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900 px-4 h-9`;
    case "ghost":
      return `${common} text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/60 px-3 h-9`;
    case "primary":
    default:
      return `${common} bg-foreground text-background hover:opacity-90 px-5 h-10`;
  }
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, ...rest } = props as any;
  const classes = [baseClasses(variant), className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    // Navigation-style button that renders a Next.js <Link>.
    const { href, ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Default: semantic button for forms or in-place actions.
  return (
    <button className={classes} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

