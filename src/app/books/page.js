"use client";

import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch(`${API_BASE}/books`);
        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();
        setBooks(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, [API_BASE]);

  const handleEdit = (bookId) => {
    // TODO: Implement edit functionality
    alert(`Edit book with ID: ${bookId}`);
  };

  const handleDelete = (bookId) => {
    // TODO: Implement delete functionality
    alert(`Delete book with ID: ${bookId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Books
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            Manage your library&apos;s book collection
          </p>
        </div>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New Book
        </button>
      </div>

      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Author
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                ISBN
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Available
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No books found.
                </td>
              </tr>
            )}
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.isbn}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${book.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.is_available ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(book.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
