"use client"

import { FlashSaleSection } from "@/components/flash-sale-section"
import { ProductCard } from "@/components/product-card"

const recommendedProducts = [
  {
    id: "6",
    name: 'MacBook Pro 13" Case',
    price: 24.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 203,
    seller: "TechAccessories",
  },
  {
    id: "7",
    name: "Scientific Calculator",
    price: 18.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 445,
    seller: "StudyTools",
  },
  {
    id: "8",
    name: "Ergonomic Mouse Pad",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 156,
    seller: "OfficeComfort",
  },
  {
    id: "9",
    name: "Water Bottle 32oz",
    price: 16.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 289,
    seller: "HealthyLiving",
  },
  {
    id: "10",
    name: "Backpack for Laptop",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 178,
    seller: "TravelGear",
  },
  {
    id: "11",
    name: "Desk Organizer Set",
    price: 22.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 134,
    seller: "OfficeSupplies",
  },
  {
    id: "12",
    name: "Blue Light Glasses",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 267,
    seller: "EyeCare",
  },
  {
    id: "13",
    name: "Portable Whiteboard",
    price: 28.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 89,
    seller: "StudyAids",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Flash Sale Section */}
      <FlashSaleSection />

      {/* Recommended Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
