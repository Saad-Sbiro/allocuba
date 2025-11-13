import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {isDark ? (
            <Moon size={16} className="theme-icon" />
          ) : (
            <Sun size={16} className="theme-icon" />
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle






















