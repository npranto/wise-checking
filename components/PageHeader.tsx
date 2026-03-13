import type { ReactNode } from "react";

// Simple reusable header used on landing, quiz, review, and results pages.
// Keeps title / description styling consistent and leaves space for optional
// actions (e.g., buttons or links) to the right.
type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /**
   * Optional actions rendered to the right or below the title, such as
   * navigation buttons or secondary links.
   */
  actions?: ReactNode;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
}: PageHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={[
        "mb-10",
        isCentered ? "text-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
          {eyebrow}
        </p>
      ) : null}

      <div
        className={[
          "mt-2 flex flex-col gap-4",
          isCentered ? "items-center" : "items-start",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={isCentered ? "max-w-2xl" : "max-w-xl"}>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          ) : null}
        </div>

        {actions ? (
          <div
            className={[
              "flex flex-wrap gap-3",
              isCentered ? "justify-center" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}

