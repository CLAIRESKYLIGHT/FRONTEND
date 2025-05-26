"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ 
    name: "", 
    email: "", 
    role: "",
    password: "",
    confirmPassword: ""
  });
  const [saving, setSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/users`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddUser() {
    // Reset any previous errors
    setPasswordError("");
    
    // Validate required fields
    if (!newUser.name || !newUser.email || !newUser.password || !newUser.confirmPassword) {
      setPasswordError("All fields are required");
      return;
    }
    
    // Validate password match
    if (newUser.password !== newUser.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Validate password length
    if (newUser.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    try {
      setSaving(true);
      const userData = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        password: newUser.password
      };
      
      const res = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add user");
      }

      // Clear form and refresh users
      setNewUser({ 
        name: "", 
        email: "", 
        role: "", 
        password: "", 
        confirmPassword: "" 
      });
      await loadUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleUpdateUser(userId) {
    try {
      setSaving(true);
      const res = await fetch(`${API_BASE}/users/${userId}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editingUser),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      setEditingUser(null);
      await loadUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(userId) {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`${API_BASE}/users/${userId}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("Failed to delete user");
      await loadUsers();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">Users</h1>
        <p className="text-gray-500 dark:text-gray-300">Manage library users and their roles</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        {/* Add User Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
          <input className="border px-2 py-1 rounded col-span-1" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <input className="border px-2 py-1 rounded col-span-1" placeholder="Email" type="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <input className="border px-2 py-1 rounded col-span-1" placeholder="Role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
          <input className="border px-2 py-1 rounded col-span-1" type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
          <input className="border px-2 py-1 rounded col-span-1" type="password" placeholder="Confirm Password" value={newUser.confirmPassword} onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })} />
        </div>
        <button className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded mt-2" onClick={handleAddUser} disabled={saving}>
          {saving ? "Adding..." : "Add User"}
        </button>
        {passwordError && <p className="text-red-600 text-sm mt-2">{passwordError}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white">Name</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white">Email</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white">Role</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
                    {editingUser?.id === user.id ? (
                      <input
                        value={editingUser.name}
                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                        className="border px-2 py-1 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
                    {editingUser?.id === user.id ? (
                      <input
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                        className="border px-2 py-1 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
                    {editingUser?.id === user.id ? (
                      <input
                        value={editingUser.role}
                        onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                        className="border px-2 py-1 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    ) : (
                      user.role || "N/A"
                    )}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 space-x-2">
                    {editingUser?.id === user.id ? (
                      <>
                        <button
                          onClick={() => handleUpdateUser(user.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                          disabled={saving}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingUser(null)}
                          className="px-3 py-1 bg-gray-600 text-white rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingUser(user)}
                          className="px-3 py-1 bg-blue-600 text-white rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}