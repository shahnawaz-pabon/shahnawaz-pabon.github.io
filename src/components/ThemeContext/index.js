import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
  isDark: false,
  setIsDark: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to false (light mode)
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === "true"; // Convert string to boolean
  });

  useEffect(() => {
    // Store theme in localStorage whenever it changes
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prevMode) => !prevMode); // Toggle the theme
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
