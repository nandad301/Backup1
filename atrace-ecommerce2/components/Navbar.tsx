"use client"

import Link from "next/link"
import { Search, Bell, ShoppingCart, Heart, User, LogOut, Package, Settings } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"
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

  return (
    <div className="bg-white border-b">
      {/* Top Bar */}
      <div className="bg-[#FF6B35] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div>Free shipping for orders over Rp 100.000</div>
          <div className="flex items-center gap-4">
            <span>24/7 Customer Service</span>
            <span>|</span>
            <span>Track Your Order</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ATRACE</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="What items are you looking for today?"
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-full focus:border-[#FF6B35] focus:ring-0"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF6B35] hover:bg-[#E55A2B] rounded-full px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs">3</Badge>
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-[#FF6B35] text-xs">{totalItems}</Badge>
                )}
              </Button>
            </Link>

            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs">4</Badge>
              </Button>
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden md:inline">{user.name}</span>
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
                  <DropdownMenuItem onClick={logout} className="flex items-center gap-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
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
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-[#FF6B35] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-3">
            <Link href="/category" className="hover:text-orange-200 transition-colors">
              Kategori
            </Link>
            <Link href="/seller" className="hover:text-orange-200 transition-colors">
              Seller
            </Link>
            <Link href="/keranjang" className="hover:text-orange-200 transition-colors">
              Keranjang
            </Link>
            <Link href="/help" className="hover:text-orange-200 transition-colors">
              Bantuan
            </Link>
            <Link href="/about" className="hover:text-orange-200 transition-colors">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
