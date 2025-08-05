"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  seller: string
  isFlashSale?: boolean
  discount?: number
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className={cn(
          "bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 overflow-hidden group",
          className,
        )}
      >
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isFlashSale && <Badge className="bg-red-500 text-white">Flash Sale</Badge>}
            {product.discount && <Badge variant="secondary">{product.discount}% OFF</Badge>}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={cn("h-4 w-4", isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600")}
            />
          </Button>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-blue-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-3">{product.seller}</p>

          <Button size="sm" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  )
}
