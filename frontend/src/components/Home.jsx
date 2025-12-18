import React from 'react'

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-sky-50 to-white flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Shop Smarter with <span className="text-sky-500">My App</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover high-quality products at the best prices.
            My App delivers a fast, secure, and seamless shopping
            experience built with modern web technologies.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border border-sky-500 text-sky-500 rounded-lg font-semibold hover:bg-sky-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-sky-100 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-sky-500 text-6xl">🛒</span>
          </div>
        </div>

      </div>
    </div>
  )
}
