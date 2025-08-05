"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Bell, ShoppingCart, Heart, User, ChevronDown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      {/* Top Navbar */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center w-full max-w-7xl mx-auto px-4 py-4 space-x-4 ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FFA366] rounded"></div>
            <span className="text-xl font-bold text-gray-800">ATRACE</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="What items are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-2 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white h-8 w-8 flex items-center justify-center rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 text-gray-600">
            <Bell className="hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded" />
            {isAuthenticated ? (
              <Link href="/cart">
                <ShoppingCart className="hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded" />
              </Link>
            ) : (
              <Link href="/login">
                <ShoppingCart className="hover:text-orange-500 text-gray-600 rounded" />
              </Link>
            )}

            {isAuthenticated ? (
              <Link href="/wishlist">
                <Heart className="hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded" />
              </Link>
            ) : (
              <Link href="/login">
                <Heart className="hover:text-orange-500 text-gray-600 rounded" />
              </Link>
            )}

          <div className="h-6 w-px bg-gray-300"></div>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="bg-gray-200 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-full px-3">
                    <User className="w-6 h-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="text-sm text-gray-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-4 py-1">
                  Masuk
                </Link>
                <Link href="/register">
                  <Button className="bg-orange-500 text-white rounded px-4 text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Daftar</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Orange Navigation Bar */}
      <nav className="bg-orange-500 text-white text-sm font-semibold">
          <div className="max-w-7xl mx-auto flex justify-around py-2 px-4 select-none">
            <Link href={isAuthenticated ? "/category" : "/login"} className="hover:text-gray-200 cursor-pointer">
              Kategori
            </Link>
            <Link href={isAuthenticated ? "/seller" : "/login"} className="hover:text-gray-200 cursor-pointer">
              Seller
            </Link>
            <Link href={isAuthenticated ? "/cart" : "/login"} className="hover:text-gray-200 cursor-pointer">
              Keranjang
            </Link>
            <Link href={isAuthenticated ? "/help" : "/login"} className="hover:text-gray-200 cursor-pointer">
              Bantuan
            </Link>
            <Link href={isAuthenticated ? "/category" : "/login"} className="hover:text-gray-200 cursor-pointer">
              About Us
            </Link>
          </div>
      </nav>
    </div>
  )
}
