import React, { useState } from "react"

export const ThemeContext = React.createContext({
  name: "light",
  updateTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
  
    return (
      <ThemeContext.Provider
        value={{
          name: theme,
          updateTheme: setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }