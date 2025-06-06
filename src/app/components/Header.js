"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

// Header component displays the top navigation bar with search and profile link
export default function Header() {
  // Get theme from context
  const { isDark } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F0] dark:bg-slate-800 border-b border-[#E8E1D5] dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and search input */}
        <div className="flex items-center flex-1 max-w-lg space-x-4">
          {/* Library logo (open book SVG) */}
          <div className="hidden md:block">
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="10" fill="#0F766E" />
              <path
                d="M12 34V14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 18V36"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 34C16 32 20 32 24 34C28 32 32 32 36 34"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Search input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search the catalog..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
              aria-label="Search library catalog"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
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
        <button
          onClick={() => setIsProfileOpen(true)}
          className="flex items-center space-x-3 hover:bg-[#F0EBE1] dark:hover:bg-slate-700 active:bg-[#EDE8DE] dark:active:bg-slate-600 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          aria-label="Open profile menu"
        >
          {/* Library badge avatar */}
          <div className="h-10 w-10 rounded-lg bg-[#EDE8DE] dark:bg-teal-900/30 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
            </svg>
          </div>
          <div className="hidden sm:block text-left">
            <p
              className="text-sm font-medium text-slate-900 dark:text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Admin User
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Librarian
            </p>
          </div>
        </button>
      </div>

      {/* Profile Modal - appears when profile button is clicked */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 border border-slate-200 dark:border-slate-700">
            <div className="p-5">
              <div className="flex items-center justify-between mb-5">
                <h2
                  className="text-lg font-semibold text-slate-900 dark:text-white"
                  style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
                >
                  Profile
                </h2>
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
                  <div className="h-14 w-14 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center border border-teal-100 dark:border-teal-800">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold text-slate-900 dark:text-white"
                      style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
                    >
                      John Doe
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Librarian
                    </p>
                  </div>
                </div>

                {/* Profile details */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
