"use client"
import { Link } from "react-router-dom"
import { useWishlist } from "../contexts/WishlistContext"
import { useCart } from "../contexts/CartContext"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/common/ProductCard"

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleMoveAllToBag = () => {
    wishlistItems.forEach((item) => {
      addToCart(item)
      removeFromWishlist(item.id)
    })
  }

  const recommendedProducts = [
    {
      id: 201,
      name: "ASUS FHD Gaming Laptop",
      price: 15600000,
      originalPrice: 24000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 325,
      discount: 35,
    },
    {
      id: 202,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
    },
    {
      id: 203,
      name: "HAVIT HV-G92 Gamepad",
      price: 560000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 88,
      isNew: true,
    },
    {
      id: 204,
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

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-atrace-orange">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span>Wishlist</span>
          </nav>

          {/* Wishlist Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Wishlist ({wishlistItems.length})</h1>
            {wishlistItems.length > 0 && (
              <button onClick={handleMoveAllToBag} className="btn-secondary">
                Move All To Bag
              </button>
            )}
          </div>

          {/* Wishlist Items */}
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Empty Wishlist"
                  className="w-32 h-32 mx-auto mb-6 opacity-50"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
                <p className="text-gray-600 mb-8">Save items you like to your wishlist for easy access later.</p>
                <Link to="/category" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} />
              ))}
            </div>
          )}

          {/* Recommended Products */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-atrace-orange">■</span> Just For You
              </h2>
              <Link to="/category" className="text-atrace-orange hover:text-atrace-orange-dark font-medium">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default WishlistPage
