"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Star, Heart } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650000,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550000,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

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
          <span>Cart</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b items-center">
                  <div className="col-span-6 flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="col-span-2 text-center">Rp {item.price.toLocaleString()}</div>
                  <div className="col-span-2 flex items-center justify-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="col-span-2 text-center font-semibold">
                    Rp {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <Link href="/">
                <Button variant="outline">Return To Shop</Button>
              </Link>
              <Button variant="outline">Update Cart</Button>
            </div>

            {/* Coupon */}
            <div className="flex space-x-4 mt-6">
              <Input
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1"
              />
              <Button className="btn-primary">Apply Coupon</Button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Cart Total</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full btn-primary mt-6">Process to checkout</Button>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-16">
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
