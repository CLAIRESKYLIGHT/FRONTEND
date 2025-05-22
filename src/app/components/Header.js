"use client";

import { useState } from "react";
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'

// Header component displays the top navigation bar with search and profile modal
export default function Header() {
  // State to control the visibility of the profile modal
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Get theme from context
  const { isDark } = useTheme();

  return (
    <>
      {/* Main header bar with logo, search, and profile button */}
      <header className="bg-[#FAF7F0] dark:bg-slate-800 border-b border-[#E8E1D5] dark:border-slate-700 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and search input */}
          <div className="flex items-center flex-1 max-w-lg space-x-4">
            {/* Library logo (open book SVG) */}
            <div className="hidden md:block">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="10" fill="#0F766E"/>
                <path d="M12 34V14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 18V36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 34C16 32 20 32 24 34C28 32 32 32 36 34" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search the catalog..."
                className="input pl-10 pr-4 py-2.5 bg-[#F0EBE1] dark:bg-slate-700 border-[#E8E1D5] dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 rounded-lg transition-all duration-200 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="Search library catalog"
              />
              <div className="absolute left-3 top-2.5">
                {/* Search icon */}
                <svg
                  className="h-4 w-4 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Profile Button */}
          <Link
            href="/profile"
            className="flex items-center space-x-3 hover:bg-[#F0EBE1] dark:hover:bg-slate-700 active:bg-[#EDE8DE] dark:active:bg-slate-600 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            aria-label="View profile"
          >
            {/* Library badge avatar */}
            <div className="h-10 w-10 rounded-lg bg-[#EDE8DE] dark:bg-teal-900/30 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="M16 2v4"/>
                <path d="M8 2v4"/>
              </svg>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-slate-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Admin User</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Librarian</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Profile Modal - appears when profile button is clicked */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-[#FAF7F0] dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 border border-[#E8E1D5] dark:border-slate-700">
            <div className="p-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Profile</h2>
                {/* Close modal button */}
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 rounded-lg p-1"
                  aria-label="Close profile menu"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-5">
                {/* Profile avatar and info */}
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-lg bg-[#EDE8DE] dark:bg-teal-900/30 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      John Doe
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Librarian</p>
                  </div>
                </div>

                {/* Profile details */}
                <div className="border-t border-[#E8E1D5] dark:border-slate-700 pt-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                        Email
                      </label>
                      <p className="mt-1 text-sm text-slate-900 dark:text-white">
                        john.doe@example.com
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                        Role
                      </label>
                      <p className="mt-1 text-sm text-slate-900 dark:text-white">
                        Librarian
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                        Last Login
                      </label>
                      <p className="mt-1 text-sm text-slate-900 dark:text-white">
                        Today at 9:30 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile actions */}
                <div className="border-t border-[#E8E1D5] dark:border-slate-700 pt-4">
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-300 hover:bg-[#F0EBE1] dark:hover:bg-teal-900/20 rounded-lg transition-colors duration-200 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                      {/* Edit profile icon */}
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Edit Profile
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 flex items-center justify-center border border-red-100 dark:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                      {/* Sign out icon */}
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
