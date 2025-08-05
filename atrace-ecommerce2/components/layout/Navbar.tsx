"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Bell, ShoppingCart, Heart, User, LogOut, Package, Settings, Menu, X } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishlistContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const { totalItems: wishlistItems } = useWishlist()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="bg-white border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#FF6B35] text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="hidden sm:block">Free shipping for orders over Rp 100.000</div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span>24/7 Customer Service</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Track Your Order</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ATRACE</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="What items are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-full focus:border-[#FF6B35] focus:ring-0"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF6B35] hover:bg-[#E55A2B] rounded-full px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative hidden sm:flex">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs">3</Badge>
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-[#FF6B35] text-xs">{totalItems}</Badge>
                )}
              </Button>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative hidden sm:flex">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs">{wishlistItems}</Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden lg:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B]">
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-full focus:border-[#FF6B35] focus:ring-0"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF6B35] hover:bg-[#E55A2B] rounded-full px-3"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Category Navigation */}
      <div className="bg-[#FF6B35] text-white">
        <div className="container-custom">
          <nav className="flex items-center justify-center gap-4 sm:gap-8 py-3 overflow-x-auto">
            <Link href="/category" className="hover:text-orange-200 transition-colors whitespace-nowrap">
              Kategori
            </Link>
            <Link href="/seller" className="hover:text-orange-200 transition-colors whitespace-nowrap">
              Seller
            </Link>
            <Link href="/cart" className="hover:text-orange-200 transition-colors whitespace-nowrap">
              Keranjang
            </Link>
            <Link href="/help" className="hover:text-orange-200 transition-colors whitespace-nowrap">
              Bantuan
            </Link>
            <Link href="/about" className="hover:text-orange-200 transition-colors whitespace-nowrap">
              About Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-2">
            {!user && (
              <>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#E55A2B]">Register</Button>
                </Link>
              </>
            )}
            <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
