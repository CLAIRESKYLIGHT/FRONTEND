import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Library Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">
          Welcome to our library management system
        </p>
      </div>

      {/* Stats Cards with Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Books Card */}
        <Link href="/books">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer text-center">
            <div className="text-xl text-gray-500 mb-3">Total Books</div>
            <div className="text-4xl font-bold text-blue-600 mb-4">0</div>
            <div className="text-blue-500 hover:text-blue-700 font-medium">
              Manage Books →
            </div>
          </div>
        </Link>

        {/* Users Card */}
        <Link href="/users">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer text-center">
            <div className="text-xl text-gray-500 mb-3">Total Users</div>
            <div className="text-4xl font-bold text-green-600 mb-4">0</div>
            <div className="text-green-500 hover:text-green-700 font-medium">
              Manage Users →
            </div>
          </div>
        </Link>
      </div>

      {/* Simple Navigation Links 
      <div className="flex justify-center gap-6">
        <Link href="/books">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Books Page
          </button>
        </Link>
        <Link href="/users">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Users Page
          </button>
        </Link>
      </div>*/}
    </div>
  );
}
