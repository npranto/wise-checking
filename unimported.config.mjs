/* eslint-disable import/no-anonymous-default-export */
export default {
  // Root of the Next.js app
  rootDir: ".",

  // Entrypoints for the app router and API routes
  entryFiles: [
    "app/**/page.{ts,tsx,js,jsx}",
    "app/**/layout.{ts,tsx,js,jsx}",
    "app/**/template.{ts,tsx,js,jsx}",
    "app/api/**/*.{ts,tsx,js,jsx}",
  ],

  // Reuse your TS project config for path aliases and module resolution
  tsconfig: "./tsconfig.json",

  // Common places and patterns we don't want to report on
  ignorePatterns: [
    "node_modules/**",
    ".next/**",
    "public/**",
    "prompts/**",
    "**/*.test.{ts,tsx,js,jsx}",
    "**/__tests__/**",
  ],
};
