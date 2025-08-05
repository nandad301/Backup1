"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, Grid, List } from "lucide-react"

// Mock data
const products = [
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
    category: "electronics",
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
    category: "electronics",
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
    category: "electronics",
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
    category: "electronics",
  },
  {
    id: "5",
    name: "Buku Algoritma dan Pemrograman",
    price: 125000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    reviews: 45,
    brand: "Erlangga",
    sellerId: "seller3",
    sellerName: "Book Store",
    category: "books",
  },
  {
    id: "6",
    name: "Kemeja Casual Pria",
    price: 250000,
    originalPrice: 300000,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.4,
    reviews: 78,
    discount: 17,
    brand: "Local Brand",
    sellerId: "seller4",
    sellerName: "Fashion Hub",
    category: "fashion",
  },
]

const categories = [
  { id: "electronics", name: "Elektronik", count: 245 },
  { id: "books", name: "Buku & Tulis", count: 189 },
  { id: "fashion", name: "Fashion", count: 156 },
  { id: "sports", name: "Olahraga", count: 98 },
  { id: "beauty", name: "Kecantikan", count: 87 },
  { id: "food", name: "Makanan", count: 76 },
]

const brands = [
  { id: "proy", name: "Proy", count: 89 },
  { id: "havit", name: "HAVIT", count: 76 },
  { id: "logitech", name: "Logitech", count: 234 },
  { id: "razer", name: "Razer", count: 45 },
  { id: "steelseries", name: "SteelSeries", count: 32 },
]

export default function CategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, categoryId])
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brandId])
    } else {
      setSelectedBrands((prev) => prev.filter((id) => id !== brandId))
    }
  }

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand?.toLowerCase() || "")
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]

    return categoryMatch && brandMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return 0 // Would sort by date in real app
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span>›</span>
          <span>Kategori</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-4 h-6 bg-[#FF6B35] rounded"></div>
                  Filter Berdasarkan
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className={`space-y-6 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Kategori</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                        />
                        <Label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                          {category.name}
                        </Label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-medium mb-3">Brand</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand.id}
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                        />
                        <Label htmlFor={brand.id} className="text-sm flex-1 cursor-pointer">
                          {brand.name}
                        </Label>
                        <span className="text-xs text-gray-500">({brand.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Rentang Harga</h3>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={10000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                        className="text-xs"
                      />
                      <span className="text-gray-500">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 10000000])}
                        className="text-xs"
                      />
                    </div>
                    <div className="text-xs text-gray-600">
                      Rp {priceRange[0].toLocaleString()} - Rp {priceRange[1].toLocaleString()}
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B]"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setPriceRange([0, 10000000])
                  }}
                >
                  Terapkan Filter
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Menampilkan {sortedProducts.length} produk</h1>
                <p className="text-gray-600">Temukan produk terbaik untuk kebutuhan Anda</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                    Urutkan:
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Paling Relevan</SelectItem>
                      <SelectItem value="price-low">Harga Terendah</SelectItem>
                      <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                      <SelectItem value="rating">Rating Tertinggi</SelectItem>
                      <SelectItem value="newest">Terbaru</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* View Mode */}
                <div className="flex items-center border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div
                className={`grid gap-4 ${
                  viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}
              >
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} className={viewMode === "list" ? "flex-row" : ""} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
                <p className="text-gray-600 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
                <Button
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setPriceRange([0, 10000000])
                  }}
                  className="bg-[#FF6B35] hover:bg-[#E55A2B]"
                >
                  Reset Filter
                </Button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="default" size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B]">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
