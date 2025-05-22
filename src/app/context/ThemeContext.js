'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Effect to initialize theme from localStorage and system preferences
  useEffect(() => {
    // Set mounted state
    setMounted(true)
    
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Get theme from localStorage or system preference
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      // Set initial theme
      const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark)
      setIsDark(initialTheme)
      
      // Apply theme to document
      if (initialTheme) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  // Effect to handle theme changes
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      console.log('Theme updated:', isDark ? 'dark' : 'light'); // Debug log
    }
  }, [isDark, mounted])

  // Prevent flash of wrong theme
  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 