"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://lmsystem-pga4.onrender.com/api";

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE}/dashboard/stats`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.status === 'success') {
        setStats(data.data);
      } else {
        throw new Error(data.message || "Invalid response from server");
      }
    } catch (err) {
      console.error("Failed to fetch dashboard stats:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error loading dashboard: {error}</p>
            <button 
              onClick={fetchStats}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Library Management System
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Efficiently manage your library's books and users with our modern dashboard
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {/* Total Books Card */}
        <div className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-library-green/10">
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
              <p className="text-sm font-medium text-library-brown dark:text-gray-300">
                Total Books
              </p>
              <p className="text-2xl font-semibold text-library-green dark:text-green-400">
                {loading ? (
                  <span className="inline-block h-8 w-8 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600" />
                ) : (
                  stats.totalBooks
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-library-gold/10">
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
              <p className="text-sm font-medium text-library-brown dark:text-gray-300">
                Total Users
              </p>
              <p className="text-2xl font-semibold text-library-gold dark:text-yellow-400">
                {loading ? (
                  <span className="inline-block h-8 w-8 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600" />
                ) : (
                  stats.totalUsers
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-6">
        {/* Manage Books Action */}
        <Link href="/books" className="group">
          <div className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-200 hover:shadow-xl cursor-pointer flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-library-green dark:text-green-400 mb-2">
                Manage Books
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add, edit, or remove books from your library catalog
              </p>
            </div>
            <div className="text-gray-400 group-hover:text-library-green dark:group-hover:text-green-400 group-hover:translate-x-2 transition-transform duration-200">
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
          <div className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-200 hover:shadow-xl cursor-pointer flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-library-gold dark:text-yellow-400 mb-2">
                Manage Users
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                View and manage library members and their borrowing history
              </p>
            </div>
            <div className="text-gray-400 group-hover:text-library-gold dark:group-hover:text-yellow-400 group-hover:translate-x-2 transition-transform duration-200">
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
  );
}