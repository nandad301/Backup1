"use client"
import { Link } from "react-router-dom"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useCart } from "../../contexts/CartContext"
import { useWishlist } from "../../contexts/WishlistContext"

const ProductCard = ({ product, showDiscount = false }) => {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="product-card group relative">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=200&width=200"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {showDiscount && product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{product.discount}%</span>
            )}
            {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
            {product.badge && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{product.badge}</span>}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews || 0})</span>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-semibold text-atrace-orange">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button onClick={handleAddToCart} className="w-full btn-primary flex items-center justify-center space-x-2">
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
