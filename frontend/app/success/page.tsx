'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  //const sessionId = searchParams.get('session_id')
  //const allParams = Object.fromEntries(searchParams.entries());
  //console.log('allParams >>>>> ',allParams);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-4">
          Thank you for your purchase.
        </p>

        {sessionId && (
          <div className="bg-gray-100 p-3 rounded-lg text-xs break-all text-gray-600">
            Session ID:
            <br />
            {sessionId}
          </div>
        )}

        <Link
          href="/"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}