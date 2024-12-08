import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme in localStorage on initial load
    const savedTheme = localStorage.getItem('app-theme')
    
    if (savedTheme) {
      // If theme was previously saved, use it
      setTheme(savedTheme)
      document.documentElement.className = savedTheme
    } else {
      // Check user's system preference if no saved theme
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      const initialTheme = prefersDarkMode.matches ? 'dark' : 'light'
      setTheme(initialTheme)
      document.documentElement.className = initialTheme
      localStorage.setItem('app-theme', initialTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    
    // Update state
    setTheme(newTheme)
    
    // Apply theme to document
    document.documentElement.className = newTheme
    
    // Save to localStorage
    localStorage.setItem('app-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}