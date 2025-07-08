"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";

const LoginPage = () => {
  const { loginUser } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await loginUser(email, password);
    if (response?.success) {
      
    } else {
      console.error("Login failed:", response?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full space-y-6 bg-neutral-900 p-8 rounded-xl shadow-md">
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
