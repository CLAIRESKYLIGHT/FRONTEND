"use client";
import { useEffect, useState } from "react";
import { fetchApi } from '../config/api';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    price: "",
    is_available: true,
    published_date: "",
    description: "",
  });
  const [editingBookId, setEditingBookId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetchApi('/books');
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

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const formatPublishedDate = (dateString) => {
    if (!dateString) return "-";
    try {
      return new Date(dateString).getFullYear();
    } catch {
      return dateString;
    }
  };

  const handleAddBook = async () => {
    try {
      const res = await fetchApi('/books', {
        method: 'POST',
        body: JSON.stringify(newBook)
      });
      if (!res.ok) throw new Error("Failed to add book");
      const data = await res.json();
      setBooks([...books, data.data]);
      setShowAddForm(false);
      setNewBook({
        title: "",
        author: "",
        isbn: "",
        price: "",
        is_available: true,
        published_date: "",
        description: "",
      });
      setSuccessMessage("Book added successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (bookId) => {
    const confirmed = confirm(
      "Are you sure you want to permanently delete this book? This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      const res = await fetchApi(`/books/${bookId}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Failed to delete book");

      setBooks(books.filter((book) => book.id !== bookId));
      setSuccessMessage("Book deleted successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    setEditingBookId(bookId);
    setEditData({ ...book });
  };

  const handleSaveEdit = async () => {
    try {
      const res = await fetchApi(`/books/${editingBookId}`, {
        method: 'PUT',
        body: JSON.stringify(editData)
      });

      if (!res.ok) throw new Error("Failed to update book");

      const updatedBook = await res.json();
      setBooks((prev) =>
        prev.map((b) => (b.id === editingBookId ? updatedBook.data : b))
      );
      setEditingBookId(null);
      setEditData(null);
      setSuccessMessage("Book updated successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-6">
      {successMessage && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            {successMessage}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Books
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            Manage your library&apos;s book collection
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center"
        >
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

      {showAddForm && (
        <div className="border p-4 rounded bg-gray-50 space-y-2">
          <input
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            placeholder="ISBN"
            value={newBook.isbn}
            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={newBook.price}
            onChange={(e) =>
              setNewBook({ ...newBook, price: parseFloat(e.target.value) })
            }
            className="w-full p-2 border rounded"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={newBook.is_available}
              onChange={(e) =>
                setNewBook({ ...newBook, is_available: e.target.checked })
              }
            />
            <span>Available</span>
          </label>
          <input
            type="date"
            placeholder="Published Date"
            value={newBook.published_date}
            onChange={(e) =>
              setNewBook({ ...newBook, published_date: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={newBook.description}
            onChange={(e) =>
              setNewBook({ ...newBook, description: e.target.value })
            }
            className="w-full p-2 border rounded"
            rows={3}
          />
          <button
            onClick={handleAddBook}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Book
          </button>
        </div>
      )}

      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[120px]">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[120px]">
                  Author
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[100px]">
                  ISBN
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[80px]">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[80px]">
                  Available
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[80px]">
                  Published
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[150px]">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left min-w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {books.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No books found.
                  </td>
                </tr>
              )}
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  {editingBookId === book.id ? (
                    <>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          value={editData.title}
                          onChange={(e) =>
                            setEditData({ ...editData, title: e.target.value })
                          }
                          className="w-full border rounded p-1"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          value={editData.author}
                          onChange={(e) =>
                            setEditData({ ...editData, author: e.target.value })
                          }
                          className="w-full border rounded p-1"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          value={editData.isbn}
                          onChange={(e) =>
                            setEditData({ ...editData, isbn: e.target.value })
                          }
                          className="w-full border rounded p-1"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="number"
                          value={editData.price}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              price: parseFloat(e.target.value),
                            })
                          }
                          className="w-full border rounded p-1"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={editData.is_available}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              is_available: e.target.checked,
                            })
                          }
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="date"
                          value={editData.published_date || ""}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              published_date: e.target.value,
                            })
                          }
                          className="w-full border rounded p-1"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <textarea
                          value={editData.description || ""}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              description: e.target.value,
                            })
                          }
                          className="w-full border rounded p-1"
                          rows={2}
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2 space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="bg-green-600 text-white px-2 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingBookId(null)}
                          className="bg-gray-400 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
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
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {book.is_available ? "Yes" : "No"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {formatPublishedDate(book.published_date)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {book.description || "-"}
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
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
