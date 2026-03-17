/**
 * Text input for forms (e.g. feedback). Design tokens: border, rounded-lg, focus ring, error state.
 * See DESIGN-SYSTEM.md.
 */

import { RADIUS } from "@/constants/ui";

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  /** Optional error state (red border + message). */
  error?: string;
  /** Optional className for the wrapper (includes label/error). */
  className?: string;
  /** Optional label. */
  label?: string;
}

const inputBaseClass =
  "w-full border border-border bg-background px-4 py-3 text-foreground " +
  "placeholder:text-muted " +
  "focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 " +
  "transition-colors " +
  RADIUS.MD;

export function Input({ error, className = "", label, id, ...rest }: InputProps) {
  const inputId =
    id ?? (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const hasError = Boolean(error);

  return (
    <div className={className.trim() || undefined}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[inputBaseClass, hasError ? "border-error focus:ring-error" : ""]
          .filter(Boolean)
          .join(" ")
          .trim()}
        aria-invalid={hasError}
        aria-describedby={hasError && inputId ? `${inputId}-error` : undefined}
        {...rest}
      />
      {hasError && (
        <p
          id={inputId ? `${inputId}-error` : undefined}
          className="mt-1 text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
