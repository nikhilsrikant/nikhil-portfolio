export const THEME_KEY = "theme"; // "light" | "dark"

export function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;

  // fallback to system preference
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

export function applyThemeToBody(theme) {
  document.documentElement.dataset.theme = theme;
}