import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeColorContext = createContext()

export const useThemeColor = () => {
  const context = useContext(ThemeColorContext)
  if (!context) {
    throw new Error('useThemeColor must be used within a ThemeColorProvider')
  }
  return context
}

export const ThemeColorProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(() => {
    const saved = localStorage.getItem('allocuba-theme-color')
    return saved || '#0A84FF' // Default iOS blue
  })

  useEffect(() => {
    localStorage.setItem('allocuba-theme-color', themeColor)
    // Update CSS custom property
    document.documentElement.style.setProperty('--ios-blue', themeColor)
    document.documentElement.style.setProperty('--primary-color', themeColor)
    document.documentElement.style.setProperty('--accent-blue', themeColor)
  }, [themeColor])

  const value = {
    themeColor,
    setThemeColor
  }

  return (
    <ThemeColorContext.Provider value={value}>
      {children}
    </ThemeColorContext.Provider>
  )
}

