"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")

  // Mock product data
  const product = {
    id: params.id,
    name: "HAVIT HV-G92 Gamepad",
    price: 1965000,
    originalPrice: 2500000,
    rating: 4.6,
    reviews: 234,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue"],
    inStock: true,
    features: ["Wireless connectivity", "Rechargeable battery", "Ergonomic design", "Compatible with PS5"],
  }

  const relatedProducts = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      price: "Rp 15.600.000",
      originalPrice: "Rp 24.000.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 325,
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
      name: "AK-900 Wired Keyboard",
      price: "Rp 1.160.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.1,
      reviews: 75,
    },
    {
      id: 4,
      name: "RGB Gaming Mouse",
      price: "Rp 450.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 156,
    },
  ]

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

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
          <Link href="/category" className="hover:text-[#FF6B35]">
            Gaming
          </Link>
          <span>{">"}</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-[#FF6B35]" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
              <span
                className={`px-2 py-1 rounded text-sm ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-[#FF6B35]">Rp {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">Rp {product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Size:</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded-lg font-semibold ${
                      selectedSize === size
                        ? "border-[#FF6B35] bg-[#FF6B35] text-white"
                        : "border-gray-300 hover:border-[#FF6B35]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="sm" onClick={() => updateQuantity(quantity - 1)} className="px-3">
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => updateQuantity(quantity + 1)} className="px-3">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button className="btn-primary flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <Button className="w-full btn-primary mb-8" size="lg">
              Buy Now
            </Button>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
              Related Products
            </h2>
            <Link href="/category" className="text-[#FF6B35] hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
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
