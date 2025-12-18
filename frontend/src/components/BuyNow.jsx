import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { API } from "../utils/api"

export default function OrderSummary() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p._id === id)
        setProduct(found)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500 text-lg">
        Loading product details...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500 text-lg font-medium">
        Product not found
      </div>
    )
  }

  return (
    <div className="flex justify-center px-6 py-12 bg-gray-50">

      {/* CONFIRMATION CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center border border-gray-100">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
          Order Summary
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={product.img}
            alt={product.name}
            className="w-72 h-72 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* PRODUCT INFO */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>

        <p className="text-sky-600 text-xl font-bold mb-4">
          ₹ {product.price}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* SUCCESS MESSAGE */}
        <div className="bg-green-50 border border-green-200 text-green-700 py-3 rounded-lg font-semibold">
          ✅ Order placed successfully!
        </div>

      </div>
    </div>
  )
}
