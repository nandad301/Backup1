"use client"

import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/common/ProductCard"

const CategoryPage = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [sortBy, setSortBy] = useState("most-relevant")

  // Mock data
  const categories = [
    { id: "elektronik", name: "Elektronik", count: 245 },
    { id: "fashion", name: "Fashion", count: 189 },
    { id: "rumah-gaya-hidup", name: "Rumah & Gaya Hidup", count: 156 },
    { id: "kecantikan-kesehatan", name: "Kecantikan & Kesehatan", count: 98 },
    { id: "olahraga-outdoor", name: "Olahraga & Outdoor", count: 87 },
    { id: "otomotif", name: "Otomotif", count: 76 },
    { id: "handphone-aksesoris", name: "Handphone & Aksesoris", count: 234 },
  ]

  const brands = [
    { id: "proy", name: "Proy" },
    { id: "havit", name: "HAVIT" },
    { id: "logitech", name: "Logitech" },
    { id: "razer", name: "Razer" },
    { id: "steelseries", name: "SteelSeries" },
  ]

  const priceRanges = [
    { id: "under-100k", label: "Di bawah Rp 100.000", min: 0, max: 100000 },
    { id: "100k-500k", label: "Rp 100.000 - Rp 500.000", min: 100000, max: 500000 },
    { id: "500k-1m", label: "Rp 500.000 - Rp 1.000.000", min: 500000, max: 1000000 },
    { id: "above-1m", label: "Di atas Rp 1.000.000", min: 1000000, max: null },
  ]

  const products = [
    {
      id: 1,
      name: "Headset / Earphone Original Proy G8 Series",
      price: 10500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
      reviews: 89,
      discount: 30,
      badge: "Proy",
    },
    {
      id: 2,
      name: "AK-300 Wired Keyboard",
      price: 8000000,
      originalPrice: 11000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 150,
      discount: 27,
      badge: "Proy",
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: 1965000,
      originalPrice: 2500000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 234,
      discount: 21,
      badge: "Proy",
    },
    // Duplicate products for demonstration
    {
      id: 4,
      name: "Headset / Earphone Original Proy G8 Series",
      price: 10500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
      reviews: 89,
      discount: 30,
      badge: "Proy",
    },
    {
      id: 5,
      name: "AK-300 Wired Keyboard",
      price: 8000000,
      originalPrice: 11000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 150,
      discount: 27,
      badge: "Proy",
    },
    {
      id: 6,
      name: "HAVIT HV-G92 Gamepad",
      price: 1965000,
      originalPrice: 2500000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 234,
      discount: 21,
      badge: "Proy",
    },
  ]

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleBrandChange = (brandId) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  const applyFilters = () => {
    // Filter logic would go here
    console.log("Applying filters:", { selectedCategories, selectedBrands, priceRange })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span>Kategori</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <span className="text-atrace-orange">■</span> Filter Berdasarkan
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => handleCategoryChange(category.id)}
                          className="rounded border-gray-300 text-atrace-orange focus:ring-atrace-orange"
                        />
                        <span className="text-sm text-gray-700">{category.name}</span>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand.id)}
                          onChange={() => handleBrandChange(brand.id)}
                          className="rounded border-gray-300 text-atrace-orange focus:ring-atrace-orange"
                        />
                        <span className="text-sm text-gray-700">{brand.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Rentang Harga</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          className="border-gray-300 text-atrace-orange focus:ring-atrace-orange"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Custom Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Harga</h4>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-atrace-orange"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-atrace-orange"
                    />
                  </div>
                </div>

                <button onClick={applyFilters} className="w-full btn-primary">
                  Terapkan Filter
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">Menampilkan 9 produk</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Urutkan:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-atrace-orange"
                  >
                    <option value="most-relevant">Paling Relevan</option>
                    <option value="price-low-high">Harga: Rendah ke Tinggi</option>
                    <option value="price-high-low">Harga: Tinggi ke Rendah</option>
                    <option value="newest">Terbaru</option>
                    <option value="rating">Rating Tertinggi</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
                  <button className="px-3 py-2 bg-atrace-orange text-white rounded-lg">1</button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CategoryPage
