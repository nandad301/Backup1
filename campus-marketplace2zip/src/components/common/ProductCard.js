import React from "react"
import { Link } from "react-router-dom"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useCart } from "../../contexts/CartContext.js"
import { useWishlist } from "../../contexts/WishlistContext.js"

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

  return React.createElement(
    "div",
    { className: "product-card group relative" },
    React.createElement(
      Link,
      { to: `/product/${product.id}` },
      React.createElement(
        "div",
        { className: "relative overflow-hidden" },
        React.createElement("img", {
          src: product.image || "/placeholder.svg?height=200&width=200",
          alt: product.name,
          className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200",
        }),

        // Badges
        React.createElement(
          "div",
          { className: "absolute top-2 left-2 flex flex-col space-y-1" },
          showDiscount &&
            product.discount &&
            React.createElement(
              "span",
              { className: "bg-red-500 text-white text-xs px-2 py-1 rounded" },
              `-${product.discount}%`,
            ),
          product.isNew &&
            React.createElement("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded" }, "NEW"),
          product.badge &&
            React.createElement(
              "span",
              { className: "bg-blue-500 text-white text-xs px-2 py-1 rounded" },
              product.badge,
            ),
        ),

        // Wishlist Button
        React.createElement(
          "button",
          {
            onClick: handleWishlistToggle,
            className: "absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors",
          },
          React.createElement(Heart, {
            className: `w-4 h-4 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`,
          }),
        ),
      ),

      React.createElement(
        "div",
        { className: "p-4" },
        React.createElement("h3", { className: "font-medium text-gray-800 mb-2 line-clamp-2" }, product.name),

        React.createElement(
          "div",
          { className: "flex items-center space-x-2 mb-2" },
          React.createElement(
            "div",
            { className: "flex items-center" },
            [...Array(5)].map((_, i) =>
              React.createElement(Star, {
                key: i,
                className: `w-4 h-4 ${
                  i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`,
              }),
            ),
          ),
          React.createElement("span", { className: "text-sm text-gray-600" }, `(${product.reviews || 0})`),
        ),

        React.createElement(
          "div",
          { className: "flex items-center space-x-2 mb-3" },
          React.createElement(
            "span",
            { className: "text-lg font-semibold text-atrace-orange" },
            formatPrice(product.price),
          ),
          product.originalPrice &&
            React.createElement(
              "span",
              { className: "text-sm text-gray-500 line-through" },
              formatPrice(product.originalPrice),
            ),
        ),
      ),
    ),

    React.createElement(
      "div",
      { className: "px-4 pb-4" },
      React.createElement(
        "button",
        {
          onClick: handleAddToCart,
          className: "w-full btn-primary flex items-center justify-center space-x-2",
        },
        React.createElement(ShoppingCart, { className: "w-4 h-4" }),
        React.createElement("span", null, "Add to Cart"),
      ),
    ),
  )
}

export default ProductCard
