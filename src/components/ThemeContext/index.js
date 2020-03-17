import React, { useState } from "react"

export const ThemeContext = React.createContext({
  isDark: false,
  setIsDark: () => { },
});

export const ThemeProvider = ({ children }) => {

  // if(typeof window !== 'undefined'){
    const [isDark, setIsDark] = useState(localStorage.getItem('isDark'));
  // }

  function toggleDark() {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark: toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}