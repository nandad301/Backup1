"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"

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
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="product-card p-4 group">
      <div className="relative mb-3">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount && <Badge className="bg-red-500 text-white text-xs">SALE</Badge>}
          {product.isNew && <Badge className="bg-green-500 text-white text-xs">NEW</Badge>}
        </div>

        {/* Wishlist Button */}
        <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {product.brand && (
          <div className="flex items-center gap-1">
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">{product.brand}</span>
          </div>
        )}

        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-[#FF6B35] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

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
        <Button onClick={handleAddToCart} className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
