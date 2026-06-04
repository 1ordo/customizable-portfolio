import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initial value matches the server-rendered default ("dark") so hydration is
  // stable; the no-flash script in _document already set the real attribute.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const fromDom = (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(fromDom);
  }, []);

  const toggle = () =>
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
