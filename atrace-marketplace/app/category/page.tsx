"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Star } from "lucide-react"
import Link from "next/link"

export default function CategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  const categories = [
    { name: "Elektronik", count: 245 },
    { name: "Fashion", count: 189 },
    { name: "Rumah & Gaya Hidup", count: 156 },
    { name: "Kecantikan & Kesehatan", count: 98 },
    { name: "Olahraga & Outdoor", count: 87 },
    { name: "Otomotif", count: 76 },
    { name: "Handphone & Aksesoris", count: 234 },
  ]

  const brands = ["Proy", "HAVIT", "Logitech", "Razer", "SteelSeries"]

  const priceRanges = [
    "Di bawah Rp 100.000",
    "Rp 100.000 - Rp 500.000",
    "Rp 500.000 - Rp 1.000.000",
    "Di atas Rp 1.000.000",
  ]

  const products = [
    {
      id: 1,
      name: "Earphone Original G8 Series",
      price: "Rp 10.500",
      originalPrice: "Rp 15.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 89,
      brand: "Proy",
      sale: true,
    },
    {
      id: 2,
      name: "AK-300 Wired Keyboard",
      price: "Rp 8.000.000",
      originalPrice: "Rp 11.000.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 150,
      brand: "Proy",
      sale: true,
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: "Rp 1.965.000",
      originalPrice: "Rp 2.500.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 234,
      brand: "Proy",
      sale: true,
    },
    {
      id: 4,
      name: "Headset / Earphone Original Proy G8 Series",
      price: "Rp 10.500",
      originalPrice: "Rp 15.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 89,
      brand: "Proy",
      sale: true,
    },
    {
      id: 5,
      name: "AK-300 Wired Keyboard",
      price: "Rp 8.000.000",
      originalPrice: "Rp 11.000.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 150,
      brand: "Proy",
      sale: true,
    },
    {
      id: 6,
      name: "HAVIT HV-G92 Gamepad",
      price: "Rp 1.965.000",
      originalPrice: "Rp 2.500.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 234,
      brand: "Proy",
      sale: true,
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
          <span>Kategori</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar Filter */}
          <div className="w-80 bg-white rounded-lg p-6 h-fit">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-4 h-6 bg-[#FF6B35] rounded mr-3"></span>
              Filter Berdasarkan
            </h3>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Kategori</h4>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={category.name}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category.name])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category.name))
                          }
                        }}
                      />
                      <label htmlFor={category.name} className="text-sm text-gray-700 cursor-pointer">
                        {category.name}
                      </label>
                    </div>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Brand</h4>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedBrands([...selectedBrands, brand])
                        } else {
                          setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                        }
                      }}
                    />
                    <label htmlFor={brand} className="text-sm text-gray-700 cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Rentang Harga</h4>
              <div className="space-y-3 mb-4">
                {priceRanges.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <Checkbox id={range} />
                    <label htmlFor={range} className="text-sm text-gray-700 cursor-pointer">
                      {range}
                    </label>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-gray-800">Harga</h5>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Terapkan Filter</Button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Menampilkan 9 produk</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Urutkan:</span>
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Paling Relevan</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                    {product.sale && (
                      <span className="absolute top-2 left-2 bg-[#FF6B35] text-white px-2 py-1 rounded text-xs">
                        SALE
                      </span>
                    )}
                    {product.brand && (
                      <span className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                        {product.brand}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
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
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-[#FF6B35] font-bold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="mt-auto flex space-x-2">
                    <Button className="flex-1 w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                    <Button variant="outline" className="px-3 bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
