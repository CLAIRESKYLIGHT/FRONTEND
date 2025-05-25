'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-[#FAF7F0] dark:bg-[#2A2A2A] rounded-2xl shadow-sm border border-[#E8E1D5] dark:border-gray-700 mb-8">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Admin Profile</h1>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-150"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-150">
                Sign Out
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-xl bg-[#EDE8DE] dark:bg-teal-900/30 flex items-center justify-center border border-[#E8E1D5] dark:border-teal-800">
              <svg className="w-12 h-12 text-teal-600 dark:text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">Admin User</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">System Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Information */}
        <div className="md:col-span-2 space-y-8">
          {/* Personal Information */}
          <div className="bg-[#FAF7F0] dark:bg-[#2A2A2A] rounded-2xl shadow-sm border border-[#E8E1D5] dark:border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#333333] border border-[#E8E1D5] dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">Admin User</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    defaultValue="admin@library.com"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#333333] border border-[#E8E1D5] dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">admin@library.com</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#333333] border border-[#E8E1D5] dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                )}
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-[#FAF7F0] dark:bg-[#2A2A2A] rounded-2xl shadow-sm border border-[#E8E1D5] dark:border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Role</label>
                <p className="text-gray-900 dark:text-white">System Administrator</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Last Login</label>
                <p className="text-gray-900 dark:text-white">Just now</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Account Created</label>
                <p className="text-gray-900 dark:text-white">January 1, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick Stats */}
          <div className="bg-[#FAF7F0] dark:bg-[#2A2A2A] rounded-2xl shadow-sm border border-[#E8E1D5] dark:border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Books Managed</p>
                <p className="text-2xl font-semibold text-teal-600 dark:text-teal-400">1,234</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Users Managed</p>
                <p className="text-2xl font-semibold text-amber-600 dark:text-amber-400">567</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Active Sessions</p>
                <p className="text-2xl font-semibold text-red-600 dark:text-red-400">3</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-[#FAF7F0] dark:bg-[#2A2A2A] rounded-2xl shadow-sm border border-[#E8E1D5] dark:border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/books"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#F0EBE1] dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-gray-900 dark:text-white">Manage Books</span>
              </Link>
              <Link
                href="/users"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#F0EBE1] dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-900 dark:text-white">Manage Users</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#F0EBE1] dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-900 dark:text-white">System Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 