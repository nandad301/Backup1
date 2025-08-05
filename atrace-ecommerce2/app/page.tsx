"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Truck, Headphones, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data
const flashSaleProducts = [
  {
    id: "1",
    name: "AK-300 Wired Keyboard",
    price: 800000,
    originalPrice: 1000000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 150,
    discount: 20,
    brand: "Proy",
    sellerId: "seller1",
    sellerName: "Tech Store",
  },
  {
    id: "2",
    name: "Headset / Earphone Original Proy G8 Series",
    price: 105000,
    originalPrice: 150000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 89,
    discount: 30,
    brand: "Proy",
    sellerId: "seller1",
    sellerName: "Tech Store",
  },
  {
    id: "3",
    name: "HAVIT HV-G92 Gamepad",
    price: 1965000,
    originalPrice: 2500000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviews: 234,
    discount: 21,
    brand: "Proy",
    sellerId: "seller2",
    sellerName: "Gaming Hub",
  },
  {
    id: "4",
    name: "IPS LCD Gaming Monitor",
    price: 3965000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 69,
    brand: "Proy",
    sellerId: "seller2",
    sellerName: "Gaming Hub",
  },
  {
    id: "5",
    name: "3-Series Comfort Chair",
    price: 5505000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.4,
    reviews: 45,
    brand: "Proy",
    sellerId: "seller3",
    sellerName: "Furniture Plus",
  },
]

const recommendedProducts = [
  {
    id: "6",
    name: "MacBook Pro 13-inch",
    price: 18000000,
    originalPrice: 20000000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 324,
    discount: 10,
    brand: "Apple",
    sellerId: "seller4",
    sellerName: "Apple Store",
  },
  {
    id: "7",
    name: "Samsung Galaxy Buds Pro",
    price: 2500000,
    originalPrice: 3000000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviews: 156,
    discount: 17,
    brand: "Samsung",
    sellerId: "seller5",
    sellerName: "Mobile World",
  },
  {
    id: "8",
    name: "Logitech MX Master 3",
    price: 1200000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 89,
    brand: "Logitech",
    sellerId: "seller1",
    sellerName: "Tech Store",
  },
  {
    id: "9",
    name: "iPad Air 5th Generation",
    price: 8500000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 203,
    brand: "Apple",
    sellerId: "seller4",
    sellerName: "Apple Store",
  },
]

const categories = [
  { name: "Elektronik", icon: "📱", href: "/category?cat=electronics" },
  { name: "Buku & Tulis", icon: "📚", href: "/category?cat=books" },
  { name: "Fashion", icon: "👕", href: "/category?cat=fashion" },
  { name: "Olahraga", icon: "⚽", href: "/category?cat=sports" },
  { name: "Makanan", icon: "🍔", href: "/category?cat=food" },
  { name: "Kecantikan", icon: "💄", href: "/category?cat=beauty" },
  { name: "Furniture", icon: "🪑", href: "/category?cat=furniture" },
  { name: "Aksesoris", icon: "⌚", href: "/category?cat=accessories" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container-custom section-padding">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
                <span className="text-sm opacity-90">Campus Marketplace</span>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Up to 10%
                  <br />
                  off Voucher
                </h1>
                <p className="text-lg opacity-90 mb-6">Exclusive deals for students. Shop smart, save more!</p>
              </div>
              <Link href="/category">
                <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 text-lg">Shop Now →</Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Hero Product"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-[#FF6B35]" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-8 bg-[#FF6B35] rounded"></div>
            <h2 className="text-xl font-semibold text-[#FF6B35]">Cari dari Kategori</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border hover:border-[#FF6B35] hover:shadow-md transition-all cursor-pointer group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <span className="text-sm text-center font-medium">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Flash Sales */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-8 bg-[#FF6B35] rounded"></div>
                <h2 className="text-xl font-semibold text-[#FF6B35]">Flash Sales</h2>
              </div>

              {/* Timer */}
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FF6B35]" />
                {["03", "23", "19", "56"].map((time, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-[#FF6B35] text-white px-2 py-1 rounded text-sm font-mono min-w-[2rem] text-center">
                      {time}
                    </div>
                    {index < 3 && <span className="mx-1 text-[#FF6B35] font-bold">:</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-8 bg-[#FF6B35] rounded"></div>
              <h2 className="text-xl font-semibold text-[#FF6B35]">Rekomendasi untuk Kamu</h2>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/category">
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3">View All Products</Button>
            </Link>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <div className="text-green-400 text-sm font-medium">Categories</div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Enhance Your
                  <br />
                  Music Experience
                </h2>

                {/* Timer circles */}
                <div className="flex gap-4">
                  {[
                    { value: "23", label: "Hours" },
                    { value: "05", label: "Days" },
                    { value: "59", label: "Minutes" },
                    { value: "35", label: "Seconds" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {item.value}
                      </div>
                      <div className="text-xs mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">Buy Now!</Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Speaker"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-600">Free delivery for all orders over Rp 100.000</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-600">We return money within 30 days</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
