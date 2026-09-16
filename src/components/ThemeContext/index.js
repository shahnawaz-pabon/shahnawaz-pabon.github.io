import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const THEME_STORAGE_KEY = "theme";

const ThemeContext = createContext({
  theme: "light",
  isReady: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

const isTheme = (value) => value === "light" || value === "dark";

/**
 * Reads the theme the `gatsby-ssr.js` bootstrap script already resolved.
 *
 * Setting the theme from a React effect instead would mean a dark-mode visitor
 * sees a white flash on every page load, so the attribute is written before
 * paint and React only reads it back.
 *
 * During SSR there is no DOM: the server renders "light", and the state
 * catches up in the effects below without any markup depending on it.
 */
function readTheme() {
  if (typeof document === "undefined") return "light";

  const fromDom = document.documentElement.getAttribute("data-theme");
  if (isTheme(fromDom)) return fromDom;

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) return stored;
  } catch (error) {
    // Storage can throw in private mode; fall through to the system setting.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(readTheme);
  const [isReady, setIsReady] = useState(false);

  // Keep the document in sync with the state and remember the choice.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Not fatal: the theme just will not persist between visits.
    }
  }, [theme]);

  // `isReady` lets client-only widgets (the comments iframe) wait until after
  // hydration, so the server and client markup always agree.
  useEffect(() => {
    setIsReady(true);
  }, []);

  /**
   * Follow the OS while the visitor has never made an explicit choice. Once the
   * toggle has been used, `localStorage` holds a value and this stops.
   */
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      try {
        if (isTheme(window.localStorage.getItem(THEME_STORAGE_KEY))) return;
      } catch (error) {
        return;
      }
      setThemeState(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((next) => {
    if (isTheme(next)) setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, isReady, setTheme, toggleTheme }),
    [theme, isReady, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
