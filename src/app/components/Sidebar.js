'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from './Header'

// Sidebar component provides navigation and wraps the main content area
export default function Sidebar({ children }) {
  // State to control sidebar open/collapse
  const [isOpen, setIsOpen] = useState(true)
  // Get current route for active nav highlighting
  const pathname = usePathname()

  // Navigation items for the sidebar
  const navItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: (
        // Bookshelf icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#C9A14A" strokeWidth="2"/>
          <path d="M7 4v16M17 4v16" stroke="#355C3A" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Books',
      href: '/books',
      icon: (
        // Book icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="#355C3A"/>
        </svg>
      )
    },
    {
      name: 'Users',
      href: '/users',
      icon: (
        // User icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" stroke="#7C5C38" strokeWidth="2"/>
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#355C3A" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <div className="flex h-screen bg-library-green dark:bg-[#1F0F0F]">
      {/* Sidebar navigation area */}
      <div 
        className={`$
          isOpen ? 'w-64' : 'w-20'
        } bg-library-green dark:bg-[#2B1515]/80 backdrop-blur-sm border-r border-library-brown/30 dark:border-library-brown/40 transition-all duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header with logo and collapse button */}
          <div className="flex items-center justify-between p-4 border-b border-library-brown/30 dark:border-library-brown/40">
            {isOpen && (
              <div className="flex items-center space-x-3">
                {/* Bookshelf logo */}
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <rect x="4" y="6" width="24" height="18" rx="4" fill="#C9A14A" stroke="#7C5C38" strokeWidth="2"/>
                  <rect x="8" y="10" width="4" height="10" rx="1" fill="#355C3A"/>
                  <rect x="14" y="10" width="4" height="10" rx="1" fill="#7C5C38"/>
                  <rect x="20" y="10" width="4" height="10" rx="1" fill="#355C3A"/>
                </svg>
                <h1 className="text-lg font-bold text-library-beige" style={{ fontFamily: 'Merriweather, serif' }}>Library System</h1>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-library-gold/10 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5 text-library-gold" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 p-4 space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  pathname === item.href
                    ? 'bg-library-gold/20 text-library-gold font-bold shadow-md'
                    : 'text-library-beige hover:bg-library-gold/10'
                }`}
              >
                <span className={`mr-2 ${
                  pathname === item.href 
                    ? 'text-library-gold' 
                    : 'text-library-beige group-hover:text-library-gold'
                }`}>
                  {item.icon}
                </span>
                {isOpen && (
                  <span className="ml-1 font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile section at the bottom of the sidebar */}
          {isOpen && (
            <div className="p-4 border-t border-library-brown/30 dark:border-library-brown/40">
              <div className="flex items-center space-x-3">
                {/* Library card avatar */}
                <div className="w-10 h-10 rounded-full bg-library-gold flex items-center justify-center border-2 border-library-beige shadow-md">
                  <svg className="w-5 h-5 text-library-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke="#355C3A" strokeWidth="2"/>
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#7C5C38" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-library-beige" style={{ fontFamily: 'Merriweather, serif' }}>Admin User</p>
                  <p className="text-xs text-library-green">admin@library.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content area with header and children */}
      <div className="flex-1 flex flex-col overflow-hidden bg-library-beige dark:bg-[#1F0F0F]">
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
} 