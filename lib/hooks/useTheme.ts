import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = (initialTheme?: Theme) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme || 
    (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};