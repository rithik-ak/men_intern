import React, { useState } from 'react'
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })

      if (res.ok) {
        alert("✅ Product added successfully")
        setform({ name: "", price: "", image: "", description: "" })
      } else {
        alert("❌ Failed to add product")
      }
    } catch (error) {
      console.error(error)
      alert("❌ Server error")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 px-6">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg border">

        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {["name", "price", "image", "description"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">
                {field === "image" ? "Image URL" : field}
              </label>
              <input
                name={field}
                type="text"
                placeholder={`Enter ${field}`}
                value={form[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
          >
            ➕ Add Product
          </button>

        </form>
      </div>
    </div>
  )
}
