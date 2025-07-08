import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="w-full h-[100dvh] bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Welcome to CodeRoom
        </h1>
        <p className="text-lg text-gray-300">
          CodeRoom is a real-time collaborative coding interview platform. Whether you&apos;re prepping for tech interviews, mock coding with friends, or building your dream dev team — CodeRoom gives you a shared coding space, chat, and live execution all in one.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage
