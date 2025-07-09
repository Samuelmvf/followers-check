/**
 * Application routes enum
 * Centralizes all route definitions to avoid hardcoded strings throughout the app
 */
export const AppRoutes = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ANALYZE: "/analyze",
  FORGOT_PASSWORD: "/forgot-password",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  SIGNIN: "/signin", // Alternative signin route found in SignUpPage
} as const;

export type RouteValues = (typeof AppRoutes)[keyof typeof AppRoutes];
