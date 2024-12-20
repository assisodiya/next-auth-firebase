"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function HomePage() {
  const { data: session } = useSession()

  if (session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 from-blue-50 via-white to-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 flex items-center space-x-4">
          <img
            src={session.user.image || "/default-avatar.png"}
            alt={session.user.name || session.user.email || "User Avatar"}
            className="h-14 w-14 rounded-full border border-gray-200"
          />
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome, {session.user.name || session.user.email}
            </h1>
            <p className="text-gray-500">You are signed in!</p>
          </div>
          <button
            onClick={() => signOut()}
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 from-blue-100 to-indigo-200 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-8 flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to My App
        </h1>
        <p className="text-gray-600 text-center">
          Please sign in with one of the following methods
        </p>
        
        <button
          onClick={() => signIn("google")}
          className="w-full inline-flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-md transition-colors shadow-sm"
        >
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </button>

        <button
          onClick={() => signIn("github")}
          className="w-full inline-flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors shadow-sm"
        >
          <FaGithub className="text-xl" />
          <span>Sign in with GitHub</span>
        </button>
      </div>
    </div>
  )
}
