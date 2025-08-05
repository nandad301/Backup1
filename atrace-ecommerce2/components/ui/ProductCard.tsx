"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishlistContext"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  discount?: number
  isNew?: boolean
  brand?: string
  sellerId: string
  sellerName: string
  category?: string
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        sellerId: product.sellerId,
        sellerName: product.sellerName,
      })
      // Show success message or toast
    } catch (error) {
      console.error("Failed to add to cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        sellerId: product.sellerId,
        sellerName: product.sellerName,
      })
    }
  }

  return (
    <div className={`product-card group ${className}`}>
      <div className="relative p-4 pb-2">
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-square mb-3 overflow-hidden rounded-md bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg?height=200&width=200"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay buttons */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-1">
          {product.discount && (
            <Badge className="bg-red-500 text-white text-xs font-medium">-{product.discount}%</Badge>
          )}
          {product.isNew && <Badge className="bg-green-500 text-white text-xs font-medium">NEW</Badge>}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleWishlistToggle}
          className={`absolute top-6 right-6 bg-white/80 hover:bg-white transition-colors ${
            isInWishlist(product.id) ? "text-red-500" : "text-gray-600"
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Product Info */}
      <div className="px-4 pb-4 space-y-2">
        {product.brand && (
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
              {product.brand}
            </Badge>
          </div>
        )}

        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-[#FF6B35] transition-colors line-clamp-2 text-sm">
            {product.name}
          </h3>
        </Link>

        {/* Seller */}
        <p className="text-xs text-gray-500">by {product.sellerName}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#FF6B35]">Rp {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rp {product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-sm"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}
