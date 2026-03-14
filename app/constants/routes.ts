/**
 * Route path constants. Use these with next/link and navigation helpers
 * to avoid hard-coded paths and keep refactors easy.
 */

export const ROUTES = {
  HOME: "/",
  QUIZ: "/quiz",
  QUIZ_REVIEW: "/quiz/review",
  RESULTS: "/results",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
