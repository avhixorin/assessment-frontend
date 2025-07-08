'use client'

import React from 'react'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full space-y-6 bg-neutral-900 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center">Register for CodeRoom</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="text"
              placeholder="avhixorin"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
