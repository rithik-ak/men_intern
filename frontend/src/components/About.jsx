import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Built for speed, simplicity, and trust.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14">

          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-semibold text-gray-900">My App</span>, a modern
            e-commerce platform designed to deliver high-quality products with a
            frictionless shopping experience.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We focus on performance, usability, and security — ensuring customers
            can browse, purchase, and track orders without confusion or delay.
            Every feature is built with real users in mind.
          </p>

          <div className="border-t pt-6 text-sm text-gray-500">
            Built with <span className="font-medium text-gray-700">React</span> &
            <span className="font-medium text-gray-700"> Tailwind CSS</span>.
          </div>

        </div>
      </div>
    </section>
  );
}
