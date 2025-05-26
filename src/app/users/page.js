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
    if (!newUser.name || !newUser.email || !newUser.password) {
      setPasswordError("All fields are required");
      return;
    }
    
    if (newUser.password !== newUser.confirmPassword) {
      setPasswordError("Passwords do not match");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error("Failed to add user");
      setNewUser({ name: "", email: "", role: "", password: "", confirmPassword: "" });
      setPasswordError("");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUser),
      });
      if (!res.ok) throw new Error("Failed to update user");
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
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user");
      await loadUsers();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Users
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            Manage library users and their roles
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="border px-2 py-1 rounded"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            className="border px-2 py-1 rounded"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            className="border px-2 py-1 rounded"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            className="border px-2 py-1 rounded"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <input
            type="password"
            className="border px-2 py-1 rounded"
            placeholder="Confirm Password"
            value={newUser.confirmPassword}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
          />
          <button
            className="px-4 py-1 bg-green-600 text-white rounded disabled:opacity-50"
            onClick={handleAddUser}
            disabled={saving}
          >
            Add User
          </button>
        </div>
        {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <input
                      value={editingUser.name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, name: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <input
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          email: e.target.value,
                        })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {editingUser?.id === user.id ? (
                    <input
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, role: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.role || "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
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
  );
}
