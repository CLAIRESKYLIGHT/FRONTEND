"use client";

import { useState } from "react";

// Header component displays the top navigation bar with search and profile modal
export default function Header() {
  // State to control the visibility of the profile modal
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      {/* Main header bar with logo, search, and profile button */}
      <header className="bg-library-beige dark:bg-[#2B1515]/80 backdrop-blur-sm border-b border-library-brown/20 dark:border-library-brown/30">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo and search input */}
          <div className="flex items-center flex-1 max-w-lg space-x-4">
            {/* Library logo (open book SVG) */}
            <div className="hidden md:block">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#C9A14A"/>
                <path d="M12 34V14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34" stroke="#355C3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 18V36" stroke="#7C5C38" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 34C16 32 20 32 24 34C28 32 32 32 36 34" stroke="#7C5C38" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search the catalog..."
                className="input pl-12 pr-4 py-2 bg-library-beige border-library-brown text-library-brown placeholder-library-brown/60 focus:ring-library-green focus:border-library-green"
                style={{ fontFamily: 'Merriweather, serif' }}
              />
              <div className="absolute left-4 top-2.5">
                {/* Search icon */}
                <svg
                  className="h-5 w-5 text-library-brown"
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

          <div className="flex items-center">
            {/* Profile Button */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center space-x-3 hover:bg-library-gold/10 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
            >
              {/* Library badge avatar */}
              <div className="h-10 w-10 rounded-full bg-library-green flex items-center justify-center border-2 border-library-gold shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/></svg>
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-library-green" style={{ fontFamily: 'Merriweather, serif' }}>Admin User</p>
                <p className="text-xs text-library-brown">Librarian</p>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Profile Modal - appears when profile button is clicked */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-library-beige/95 dark:bg-[#2B1515]/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 border border-library-brown/30">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-library-green" style={{ fontFamily: 'Merriweather, serif' }}>Profile</h2>
                {/* Close modal button */}
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="text-library-brown hover:text-library-red transition-colors duration-200"
                >
                  <svg
                    className="h-6 w-6"
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

              <div className="space-y-6">
                {/* Profile avatar and info */}
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-library-green flex items-center justify-center border-2 border-library-gold shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-library-green" style={{ fontFamily: 'Merriweather, serif' }}>
                      John Doe
                    </h3>
                    <p className="text-sm text-library-brown">Librarian</p>
                  </div>
                </div>

                {/* Profile details */}
                <div className="border-t border-library-brown pt-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-library-brown">
                        Email
                      </label>
                      <p className="mt-1 text-sm text-library-green">
                        john.doe@example.com
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-library-brown">
                        Role
                      </label>
                      <p className="mt-1 text-sm text-library-green">
                        Librarian
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-library-brown">
                        Last Login
                      </label>
                      <p className="mt-1 text-sm text-library-green">
                        Today at 9:30 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile actions */}
                <div className="border-t border-library-brown pt-4">
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 text-sm font-bold text-library-green hover:bg-library-gold/20 rounded-lg transition-colors duration-200 flex items-center justify-center border border-library-gold">
                      {/* Edit profile icon */}
                      <svg
                        className="w-5 h-5 mr-2"
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
                    <button className="w-full px-4 py-2 text-sm font-bold text-library-red hover:bg-library-red/10 rounded-lg transition-colors duration-200 flex items-center justify-center border border-library-red">
                      {/* Sign out icon */}
                      <svg
                        className="w-5 h-5 mr-2"
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
