"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { X, Star, Heart } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Gucci duffle bag",
      price: "Rp 960.000",
      originalPrice: "Rp 1.160.000",
      image: "/placeholder.svg?height=200&width=200",
      discount: "-35%",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: "Rp 1.960.000",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: "Rp 660.000",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: "Rp 750.000",
      image: "/placeholder.svg?height=200&width=200",
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const recommendedProducts = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      price: "Rp 15.600.000",
      originalPrice: "Rp 24.000.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 325,
      discount: "-35%",
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      price: "Rp 3.700.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 99,
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: "Rp 560.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 88,
      isNew: true,
    },
    {
      id: 4,
      name: "AK-900 Wired Keyboard",
      price: "Rp 1.160.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.1,
      reviews: 75,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-[#FF6B35]">
            Home
          </Link>
          <span>{">"}</span>
          <span>Wishlist</span>
        </nav>

        {/* Wishlist Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Wishlist ({wishlistItems.length})</h1>
          <Button variant="outline">Move All To Bag</Button>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 relative">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              <div className="relative mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded"
                />
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    {item.discount}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-[#FF6B35] font-bold">{item.price}</span>
                {item.originalPrice && <span className="text-gray-500 line-through text-sm">{item.originalPrice}</span>}
              </div>

              <Button className="w-full btn-primary">Add To Cart</Button>
            </div>
          ))}
        </div>

        {/* Recommended Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
              Just For You
            </h2>
            <Link href="/category" className="text-[#FF6B35] hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                      {product.discount}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">NEW</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[#FF6B35] font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <Button className="w-full btn-primary">Add To Cart</Button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
