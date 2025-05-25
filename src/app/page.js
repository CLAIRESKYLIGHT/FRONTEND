"use client";

import Link from "next/link";

// HomePage component renders the main dashboard page for the Library Management System
export default function HomePage() {
  return (
    // Main container with library-themed background color
    <div className="min-h-screen bg-library-beige dark:bg-[#1F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Library Management System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Efficiently manage your library's books and users with our modern
            dashboard
          </p>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Books Card */}
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-library-green/10">
                {/* Book Icon */}
                <svg
                  className="w-6 h-6 text-library-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-library-brown">
                  Total Books
                </p>
                <p className="text-2xl font-semibold text-library-green">0</p>
              </div>
            </div>
          </div>

          {/* Total Users Card */}
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-library-gold/10">
                {/* User Icon */}
                <svg
                  className="w-6 h-6 text-library-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-library-brown">
                  Total Users
                </p>
                <p className="text-2xl font-semibold text-library-gold">0</p>
              </div>
            </div>
          </div>

          {/* Books Borrowed Card */}
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-library-brown/10">
                {/* Clock Icon */}
                <svg
                  className="w-6 h-6 text-library-brown"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-library-brown">
                  Books Borrowed
                </p>
                <p className="text-2xl font-semibold text-library-brown">0</p>
              </div>
            </div>
          </div>

          {/* Due Returns Card */}
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-library-red/10">
                {/* Book Return Icon */}
                <svg
                  className="w-6 h-6 text-library-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-library-brown">
                  Due Returns
                </p>
                <p className="text-2xl font-semibold text-library-red">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manage Books Action */}
          <Link href="/books" className="group">
            <div className="card transition-all duration-200 hover:shadow-xl cursor-pointer flex items-center justify-between">
              <div>
                <h3
                  className="text-xl font-semibold text-library-green mb-2"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Manage Books
                </h3>
                <p className="text-library-brown">
                  Add, edit, or remove books from your library catalog
                </p>
              </div>
              <div className="text-library-gold group-hover:translate-x-2 transition-transform duration-200">
                {/* Arrow Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>

          {/* Manage Users Action */}
          <Link href="/users" className="group">
            <div className="card transition-all duration-200 hover:shadow-xl cursor-pointer flex items-center justify-between">
              <div>
                <h3
                  className="text-xl font-semibold text-library-gold mb-2"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Manage Users
                </h3>
                <p className="text-library-brown">
                  View and manage library members and their borrowing history
                </p>
              </div>
              <div className="text-library-gold group-hover:translate-x-2 transition-transform duration-200">
                {/* Arrow Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
