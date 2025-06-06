'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from './Header'
import { useTheme } from '../context/ThemeContext'

// Sidebar component provides navigation and wraps the main content area
export default function Sidebar({ children }) {
  // State to control sidebar open/collapse
  const [isOpen, setIsOpen] = useState(true)
  const [isProfileHovered, setIsProfileHovered] = useState(false)
  
  // Get current route for active nav highlighting
  const pathname = usePathname()

  // Get theme from context
  const { isDark, setIsDark } = useTheme()

  // Navigation items for the sidebar
  const navItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: (
        // Bookshelf icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
          <path d="M7 4v16M17 4v16" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Books',
      href: '/books',
      icon: (
        // Book icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Users',
      href: '/users',
      icon: (
        // User icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" strokeWidth="2"/>
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <div className="flex h-screen bg-[#F5F1E8] dark:bg-gray-900">
      {/* Sidebar navigation area */}
      <div 
        className={`${
          isOpen ? 'w-72' : 'w-20'
        } bg-[#FAF7F0] dark:bg-gray-800 border-r border-[#E8E1D5] dark:border-gray-700 shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header with logo and collapse button */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E1D5] dark:border-gray-700 bg-[#FAF7F0] dark:bg-gray-800">
            {isOpen && (
              <div className="flex items-center space-x-3">
                {/* Bookshelf logo */}
                <div className="p-2 rounded-xl bg-[#F0EBE1] dark:bg-gray-700">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <rect x="4" y="6" width="24" height="18" rx="4" fill="#0F766E" stroke="#0F766E" strokeWidth="2"/>
                    <rect x="8" y="10" width="4" height="10" rx="1" fill="#FFFFFF"/>
                    <rect x="14" y="10" width="4" height="10" rx="1" fill="#FFFFFF"/>
                    <rect x="20" y="10" width="4" height="10" rx="1" fill="#FFFFFF"/>
                  </svg>
                </div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Library System</h1>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-[#F0EBE1] dark:hover:bg-gray-700 active:bg-[#EDE8DE] dark:active:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <svg 
                className="w-5 h-5 text-gray-700 dark:text-gray-200 transform transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  pathname === item.href
                    ? 'bg-[#EDE8DE] dark:bg-teal-900/30 text-teal-700 dark:text-teal-200 shadow-sm'
                    : 'text-gray-700 dark:text-gray-100 hover:bg-[#F0EBE1] dark:hover:bg-gray-700/50'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                <span className={`mr-3 transition-colors duration-200 ${
                  pathname === item.href 
                    ? 'text-teal-700 dark:text-teal-200' 
                    : 'text-gray-600 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-white'
                }`}>
                  {item.icon}
                </span>
                <span className={`text-sm font-medium transition-all duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Theme toggle and user profile section */}
          <div className="p-4 border-t border-[#E8E1D5] dark:border-gray-700 bg-[#FAF7F0] dark:bg-gray-800 space-y-4">
            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`w-full flex items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                isOpen ? 'justify-start' : 'justify-center'
              } hover:bg-[#F0EBE1] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="p-2 rounded-lg bg-[#F0EBE1] dark:bg-gray-700">
                {isDark ? (
                  <svg className="w-5 h-5 text-teal-600 dark:text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-teal-600 dark:text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </div>
              {isOpen && (
                <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-100">
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </button>

            {/* User Profile section */}
            <Link
              href="/profile"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                isOpen ? 'justify-start' : 'justify-center'
              } hover:bg-[#F0EBE1] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
            >
              {/* Library card avatar */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-[#EDE8DE] dark:bg-teal-900/30 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800 transition-transform duration-200 ${
                isProfileHovered ? 'scale-105' : 'scale-100'
              }`}>
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              {isOpen && (
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate" style={{ fontFamily: 'Inter, sans-serif' }}>Admin User</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">admin@library.com</p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 