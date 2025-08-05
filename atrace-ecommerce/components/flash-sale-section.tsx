"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

const flashSaleProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 29.99,
    originalPrice: 59.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 128,
    seller: "TechStore",
    isFlashSale: true,
    discount: 50,
  },
  {
    id: "2",
    name: "Study Desk Lamp LED",
    price: 19.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 89,
    seller: "HomeEssentials",
    isFlashSale: true,
    discount: 50,
  },
  {
    id: "3",
    name: "Notebook Set (5 Pack)",
    price: 12.99,
    originalPrice: 24.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 256,
    seller: "StudySupplies",
    isFlashSale: true,
    discount: 48,
  },
  {
    id: "4",
    name: "Portable Phone Charger",
    price: 15.99,
    originalPrice: 29.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 167,
    seller: "TechStore",
    isFlashSale: true,
    discount: 47,
  },
  {
    id: "5",
    name: "Coffee Mug with Warmer",
    price: 24.99,
    originalPrice: 49.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 94,
    seller: "KitchenPlus",
    isFlashSale: true,
    discount: 50,
  },
]

export function FlashSaleSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold">⚡ Flash Sale</h2>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Ends in 02:45:30</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => scroll("left")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => scroll("right")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {flashSaleProducts.map((product) => (
            <div key={product.id} className="flex-none w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
