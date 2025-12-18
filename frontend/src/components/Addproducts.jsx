import React from 'react'
import { useState } from 'react'
import { API } from "../utils/api"

export default function Addproducts() {
  const [form, setform] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name: form.name,
      price: form.price,
      img: form.image,
      description: form.description
    }

    try {
      const res = await fetch(`${API}/api/postProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })

      if (res.ok) {
        alert("Product added successfully")
        setform({
          name: "",
          price: "",
          image: "",
          description: ""
        })
      } else {
        alert("Failed to add product")
      }
    } catch (error) {
      console.log(error)
      alert("Failed to add product")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6 bg-gradient-to-b from-gray-50 to-gray-100">

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg border border-gray-100">

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center tracking-tight">
          Add New Product
        </h2>

        <p className="text-gray-500 text-center mb-8 text-sm">
          Fill in the details below to publish a new product
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="e.g. Wireless Headphones"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price
            </label>
            <input
              name="price"
              type="text"
              placeholder="e.g. 99.99"
              value={form.price}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={form.image}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Brief product description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 active:scale-[0.99] transition-all shadow-md"
          >
            Add Product
          </button>

        </form>

      </div>
    </div>
  )
}
