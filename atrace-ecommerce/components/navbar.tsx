"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, Bell, ShoppingCart, Heart, User, Menu, X, LogOut, Package, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { user, logout } = useAuth()
  const { totalItems: cartItems } = useCart()
  const { totalItems: wishlistItems } = useWishlist()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xl">ATRACE</div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs">3</Badge>
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs">
                    {wishlistItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span className="hidden lg:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <UserCircle className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders" className="flex items-center">
                      <Package className="mr-2 h-4 w-4" />
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="flex items-center text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white pb-4">
            <div className="flex flex-col space-y-2 pt-4">
              <div className="flex justify-around border-b pb-4">
                <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
                  <Bell className="h-5 w-5" />
                  <span className="text-xs">Notifications</span>
                </Button>
                <Link href="/cart">
                  <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="text-xs">Cart</span>
                    {cartItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs">
                        {cartItems}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Link href="/wishlist">
                  <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 relative">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs">Wishlist</span>
                    {wishlistItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs">
                        {wishlistItems}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </div>

              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm font-medium">Hello, {user.name}!</div>
                  <Link href="/profile">
                    <Button variant="ghost" className="w-full justify-start">
                      <UserCircle className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Link href="/orders">
                    <Button variant="ghost" className="w-full justify-start">
                      <Package className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start text-red-600" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full">Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
