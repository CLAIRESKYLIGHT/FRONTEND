'use client'

import { ThemeProvider } from '../context/ThemeContext'
import Sidebar from "./Sidebar"

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider>
      <Sidebar>{children}</Sidebar>
    </ThemeProvider>
  )
} 