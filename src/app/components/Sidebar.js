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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar navigation area */}
      <div 
        className={`$
          isOpen ? 'w-72' : 'w-20'
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header with logo and collapse button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            {isOpen && (
              <div className="flex items-center space-x-3">
                {/* Bookshelf logo */}
                <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700">
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
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <svg 
                className="w-5 h-5 text-gray-700 dark:text-gray-200" 
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
          <nav className="flex-1 p-4 space-y-2" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  pathname === item.href
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                <span className={`mr-3 ${
                  pathname === item.href 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                }`}>
                  {item.icon}
                </span>
                {isOpen && (
                  <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile section at the bottom of the sidebar */}
          {isOpen && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-3">
                {/* Library card avatar */}
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600 shadow-sm">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate" style={{ fontFamily: 'Inter, sans-serif' }}>Admin User</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">admin@library.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content area with header and children */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1 overflow-auto">
          {pathname === '/' ? (
            // Dashboard Layout
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Dashboard Content Container */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                {/* Content Header */}
                <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    Library Overview
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Welcome to your library management system
                  </p>
                </div>

                {/* Main Content Area */}
                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Books Card */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                          <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Books</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">-</p>
                        </div>
                      </div>
                    </div>

                    {/* Total Users Card */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                          <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Users</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">-</p>
                        </div>
                      </div>
                    </div>

                    {/* Books Borrowed Card */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                          <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Books Borrowed</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">-</p>
                        </div>
                      </div>
                    </div>

                    {/* Due Returns Card */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                          <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Due Returns</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">-</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Navigation Section */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Navigation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Books Section Card */}
                      <div className="block">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150">
                          <div className="flex items-center">
                            <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                              <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">Books Management</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Manage your library's book collection</p>
                            </div>
                            <div className="flex space-x-3">
                              <a href="/books" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-150 flex items-center space-x-2">
                                <span>View Books</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Users Section Card */}
                      <div className="block">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150">
                          <div className="flex items-center">
                            <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                              <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">User Management</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Manage library members and their accounts</p>
                            </div>
                            <div className="flex space-x-3">
                              <a href="/users" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-150 flex items-center space-x-2">
                                <span>View Users</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Default Layout for other pages
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                {children}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
} 