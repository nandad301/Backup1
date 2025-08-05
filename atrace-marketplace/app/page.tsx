"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const [isAuthenticated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    { name: "Elektronik", icon: "📱" },
    { name: "Fashion", icon: "👕" },
    { name: "Rumah & Gaya Hidup", icon: "🏠" },
    { name: "Kecantikan & Kesehatan", icon: "💄" },
    { name: "Olahraga & Outdoor", icon: "⚽" },
    { name: "Otomotif", icon: "🚗" },
    { name: "Handphone & Aksesoris", icon: "📱" },
    { name: "Komputer & Laptop", icon: "💻" },
  ]

  const flashSaleProducts = [
    {
      id: 1,
      name: "AK-900 Wired Keyboard",
      price: "Rp 1.160.000",
      originalPrice: "Rp 1.160.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
    },
    {
      id: 2,
      name: "Earphone Original G8 Series",
      price: "Rp 10.500",
      originalPrice: "Rp 15.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: "Rp 1.965.000",
      originalPrice: "Rp 2.500.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 234,
    },
    {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      price: "Rp 3.700.000",
      originalPrice: "Rp 4.000.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 99,
    },
    {
      id: 5,
      name: "Canon EOS R5 Camera",
      price: "Rp 8.800.000",
      originalPrice: "Rp 9.500.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 156,
    },
  ]

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

      {/* Hero Banner */}
      <div className="bg-[#000000] p-8 text-white relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs">🍎</span>
              </div>
              <span className="text-sm">iPhone 14 Series</span>
            </div>
            <h2 className="text-4xl font-bold">
            Up to 10%<br />
            off Voucher
          </h2>
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded">Shop Now</Button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-96 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Hero Image</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-[#ff7d00]"></div>
          <div className="w-2 h-2 rounded-full bg-[#74767e]"></div>
          <div className="w-2 h-2 rounded-full bg-[#74767e]"></div>
          <div className="w-2 h-2 rounded-full bg-[#74767e]"></div>
          <div className="w-2 h-2 rounded-full bg-[#74767e]"></div>
      </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
              Cari dari Kategori
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              isAuthenticated ? (
                <Link
                  key={index}
                  href="/category"
                  className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <span className="text-sm text-center">{category.name}</span>
                </Link>
              ) : (
                <Link
                  key={index}
                  href="/login"
                  className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <span className="text-sm text-center">{category.name}</span>
                </Link>
              )
            ))}
          </div>
        </section>

        {/* Flash Sale */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
              Flash Sales
              <div className="px-4 flex items-center space-x-2 text-[#222325]">
                  <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">03</div>
                  <span>:</span>
                  <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">23</div>
                  <span>:</span>
                  <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">19</div>
                  <span>:</span>
                  <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">56</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {flashSaleProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] bg-white border rounded-lg hover:shadow-md transition-shadow p-4 flex flex-col justify-between"
              >
                {/* Konten atas */}
                <div>
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                    {product.originalPrice !== product.price && (
                      <span className="absolute top-2 left-2 bg-[#FF6B35] text-white px-2 py-1 rounded text-xs">
                        SALE
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
                    {product.name}
                  </h3>

                  {/* Harga dan Rating */}
                  <div className="flex items-start justify-between mb-2 text-sm">
                    <div className="flex flex-col leading-tight text-[#FF6B35] font-semibold">
                      <span>{product.price}</span>
                      {product.originalPrice !== product.price && (
                        <span className="text-gray-500 line-through text-xs">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-end text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span>({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tombol bawah */}
                {isAuthenticated ? (
                <Link href="/wishlist">
                  <Heart className="hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded" />
                </Link>
                ) : (
                  <Link href="/login">
                    <Heart className="hover:text-orange-500 text-gray-600 rounded" />
                  </Link>
                )}

                <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">Add To Cart</Button>
              </div>
            ))}
          </div>

        </section>

        {/* Recommended Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
              Rekomendasi barang yang cocok untukmu
            </div>
            <Link href="/category" className="text-[#FF6B35] hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg hover:shadow-md transition-shadow p-4">
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
                <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">Add To Cart</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12">
        <div className="bg-[#000000] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[#00ff66] text-sm font-medium mb-2">Categories</p>
                <h2 className="text-4xl font-bold">
                  Enhance Your<br />
                  Music Experience
                </h2>
              </div>
              <div className="flex space-x-4">
                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold">23</span>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold">05</span>
                  <span className="text-xs">Days</span>
                </div>
                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold">59</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold">35</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
              <Button className="bg-[#00ff66] hover:bg-[#1dbf73] text-black font-medium px-6 py-2 rounded">Buy Now!</Button>
            </div>
            <div className="w-64 h-32 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-400">Speaker Image</span>
            </div>
          </div>
        </div>
        </section>

        {/* Service Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
