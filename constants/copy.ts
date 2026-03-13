/**
 * Centralized copy for the app. Moving strings here supports
 * later iteration and i18n. Use COPY.* in components and pages.
 */

export const COPY = {
  APP_NAME: "Wise Checking",
  TAGLINE: "Find the best checking account for your needs",
  QUIZ_CTA: "Start the quiz",
  QUIZ_CTA_AGAIN: "Start the quiz",
  /** Key repeated strings; extend as needed for quiz, review, results. */
  BUTTON_NEXT: "Next",
  BUTTON_BACK: "Back",
  BUTTON_SKIP: "Skip",
  REVIEW_TITLE: "Review your answers",
  RESULTS_TITLE: "Your top 3 recommendations",
  GENERATE_RESULTS: "Generate results",
} as const;
