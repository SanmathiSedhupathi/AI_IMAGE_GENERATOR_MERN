import React, { createContext, useContext, useEffect, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme]=useState(()=>{
         return localStorage.getItem('theme') || 'light';
    });
    useEffect(() => {
        localStorage.setItem('theme',theme);
        document.body.className=theme;
    }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);