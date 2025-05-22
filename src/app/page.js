import Link from "next/link";

// HomePage component renders the main dashboard page for the Library Management System
export default function HomePage() {
  return (
    // Main container with background color and min height
    <div className="min-h-screen bg-[#F8EFEF] dark:bg-[#1F0F0F]">
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

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Books Card */}
          <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                {/* Book Icon */}
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Books</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </div>

          {/* Total Users Card */}
          <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                {/* User Icon */}
                <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </div>

          {/* Books Borrowed Card */}
          <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                {/* Clock Icon */}
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Books Borrowed</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </div>

          {/* Due Returns Card */}
          <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                {/* Book Return Icon */}
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Due Returns</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manage Books Action */}
          <Link href="/books" className="group">
            <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Manage Books
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Add, edit, or remove books from your library catalog
                  </p>
                </div>
                <div className="text-primary group-hover:translate-x-2 transition-transform duration-200">
                  {/* Arrow Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Manage Users Action */}
          <Link href="/users" className="group">
            <div className="bg-white/70 dark:bg-[#2B1515]/70 backdrop-blur-sm shadow-lg rounded-xl p-6 transition-all duration-200 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Manage Users
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    View and manage library members and their borrowing history
                  </p>
                </div>
                <div className="text-secondary group-hover:translate-x-2 transition-transform duration-200">
                  {/* Arrow Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
