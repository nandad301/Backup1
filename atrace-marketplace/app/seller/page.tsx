import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Store, Package, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function SellerPage() {
  const sellerFeatures = [
    {
      icon: <Store className="w-12 h-12 text-[#FF6B35]" />,
      title: "Toko mu",
      description: "Kelola toko online Anda dengan mudah dan profesional",
      buttonText: "Mulai",
    },
    {
      icon: <Package className="w-12 h-12 text-[#FF6B35]" />,
      title: "Produk",
      description: "Upload dan kelola produk Anda dengan sistem yang terintegrasi",
      buttonText: "Mulai",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#FF6B35]" />,
      title: "Promosi",
      description: "Buat kampanye promosi untuk meningkatkan penjualan produk",
      buttonText: "Mulai",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#FF6B35]" />,
      title: "Statistik",
      description: "Pantau performa toko dan analisis penjualan secara real-time",
      buttonText: "Mulai",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: "/placeholder.svg?height=300&width=400",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      image: "/placeholder.svg?height=300&width=400",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      title: "Speakers",
      description: "Amazon wireless speakers",
      image: "/placeholder.svg?height=150&width=200",
      buttonText: "Shop Now",
    },
    {
      id: 4,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      image: "/placeholder.svg?height=150&width=200",
      buttonText: "Shop Now",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#FF6B35]">
            Home
          </Link>
          <span>{">"}</span>
          <span>Seller</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="navbar-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Seller Page</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Bergabung dengan ribuan seller yang telah mempercayakan penjualan mereka untuk meningkatkan omzet dan
            memperluas jangkauan bisnis mereka
          </p>
        </div>
      </div>

      {/* Seller Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellerFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{feature.description}</p>
              <Button className="btn-primary">{feature.buttonText}</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="w-4 h-8 bg-[#FF6B35] rounded mr-3"></span>
          Paling Laris Dicari
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Featured Item */}
          <div className="md:col-span-2 bg-black text-white rounded-lg p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{featuredProducts[0].title}</h3>
              <p className="text-gray-300 mb-6">{featuredProducts[0].description}</p>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              >
                {featuredProducts[0].buttonText}
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-700 to-transparent"></div>
          </div>

          {/* Second Featured Item */}
          <div className="md:col-span-2 bg-gray-800 text-white rounded-lg p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{featuredProducts[1].title}</h3>
              <p className="text-gray-300 mb-6">{featuredProducts[1].description}</p>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              >
                {featuredProducts[1].buttonText}
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-600 to-transparent"></div>
          </div>

          {/* Smaller Featured Items */}
          <div className="bg-gray-900 text-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">{featuredProducts[2].title}</h3>
            <p className="text-gray-300 text-sm mb-4">{featuredProducts[2].description}</p>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              {featuredProducts[2].buttonText}
            </Button>
          </div>

          <div className="bg-gray-800 text-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">{featuredProducts[3].title}</h3>
            <p className="text-gray-300 text-sm mb-4">{featuredProducts[3].description}</p>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              {featuredProducts[3].buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
