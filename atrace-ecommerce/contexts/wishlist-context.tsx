"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (product: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem("atrace_wishlist")
    if (storedWishlist) {
      setItems(JSON.parse(storedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("atrace_wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (product: WishlistItem) => {
    setItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: string) => {
    return items.some((item) => item.id === id)
  }

  const totalItems = items.length

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
