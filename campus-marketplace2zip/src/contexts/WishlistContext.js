"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id)
      if (!exists) {
        return [...prevItems, product]
      }
      return prevItems
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  }

  return React.createElement(WishlistContext.Provider, { value }, children)
}
