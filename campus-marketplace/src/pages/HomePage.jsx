import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Smartphone, Watch, Shirt, HomeIcon } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/common/ProductCard"
import CategoryCard from "../components/common/CategoryCard"

const HomePage = () => {
  // Mock data
  const categories = [
    { id: 1, name: "Elektronik", icon: Smartphone, count: 245 },
    { id: 2, name: "Fashion", icon: Shirt, count: 189 },
    { id: 3, name: "Rumah & Gaya Hidup", icon: HomeIcon, count: 156 },
    { id: 4, name: "Kecantikan & Kesehatan", icon: Watch, count: 98 },
    { id: 5, name: "Olahraga & Outdoor", icon: Watch, count: 87 },
    { id: 6, name: "Otomotif", icon: Watch, count: 76 },
    { id: 7, name: "Handphone & Aksesoris", icon: Smartphone, count: 234 },
  ]

  const flashSaleProducts = [
    {
      id: 1,
      name: "AK-900 Wired Keyboard",
      price: 1160000,
      originalPrice: 1600000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
      discount: 35,
    },
    {
      id: 2,
      name: "Headset / Earphone Original Proy G8 Series",
      price: 10500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
      reviews: 89,
      discount: 30,
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
    },
    {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
      isNew: true,
    },
  ]

  const recommendedProducts = [
    {
      id: 5,
      name: "ASUS FHD Gaming Laptop",
      price: 15600000,
      originalPrice: 24000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 325,
      discount: 35,
    },
    {
      id: 6,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
    },
    {
      id: 7,
      name: "HAVIT HV-G92 Gamepad",
      price: 560000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 88,
      isNew: true,
    },
    {
      id: 8,
      name: "AK-900 Wired Keyboard",
      price: 1160000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">Up to 10% off Voucher</h1>
                <Link
                  to="/category"
                  className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
              <div className="flex-1 text-right">
                <img src="/placeholder.svg?height=300&width=400" alt="Hero Product" className="inline-block max-w-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-atrace-orange">■</span> Cari dari Kategori
              </h2>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sales */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-atrace-orange">■</span> Flash Sales
              </h2>
              <Link to="/category?sale=true" className="text-atrace-orange hover:text-atrace-orange-dark font-medium">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashSaleProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-atrace-orange">■</span> Rekomendasi barang yang cocok untukmu
              </h2>
              <Link to="/category" className="text-atrace-orange hover:text-atrace-orange-dark font-medium">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/category" className="btn-primary inline-block">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Enhance Your Music Experience</h2>
                <div className="flex space-x-4 mb-6">
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="font-bold">23</span>
                  </div>
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="font-bold">05</span>
                  </div>
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="font-bold">59</span>
                  </div>
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="font-bold">35</span>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Buy Now!
                </button>
              </div>
              <div className="flex-1 text-right">
                <img src="/placeholder.svg?height=300&width=400" alt="Speaker" className="inline-block max-w-md" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
