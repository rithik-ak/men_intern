import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Shop Smart. <span className="text-sky-500">Shop Better.</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mb-8 text-lg">
          Discover high-quality products at unbeatable prices.
          Enjoy a fast, secure, and seamless shopping experience built
          with modern web technologies.
        </p>

        <div className="flex gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition shadow-md"
          >
            Browse Products
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Get your products delivered quickly with reliable shipping
            services across the country.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Secure Payments
          </h3>
          <p className="text-gray-600">
            Your data and payments are protected using secure and modern
            technologies.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Products
          </h3>
          <p className="text-gray-600">
            We carefully select products to ensure the best quality and
            customer satisfaction.
          </p>
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-sky-500 text-white py-14 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start shopping?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Join thousands of happy customers today.
        </p>

        <Link
          to="/login"
          className="inline-block px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Get Started
        </Link>
      </section>

    </div>
  )
}
