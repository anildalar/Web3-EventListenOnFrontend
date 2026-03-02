'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function CancelPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed ❌
        </h1>

        <p className="text-gray-600 mb-4">
          Your transaction was not completed.  
          Please try again.
        </p>

        {sessionId && (
          <div className="bg-gray-100 p-3 rounded-lg text-xs break-all text-gray-600">
            Session ID:
            <br />
            {sessionId}
          </div>
        )}

        <div className="flex flex-col gap-3 mt-6">
          <Link
            href="/pricing"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </Link>

          <Link
            href="/"
            className="text-gray-600 underline"
          >
            Go to Home
          </Link>
        </div>

      </div>
    </div>
  )
}