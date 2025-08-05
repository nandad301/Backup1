"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, Bell, ShoppingCart, Heart, User, ChevronDown, LogOut, Package, Settings } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import { useCart } from "../../contexts/CartContext"
import { useWishlist } from "../../contexts/WishlistContext"

const Navbar = () => {
  const { user, logout } = useAuth()
  const { getCartItemsCount } = useCart()
  const { wishlistItems } = useWishlist()
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setShowUserDropdown(false)
    navigate("/")
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="bg-atrace-orange text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <Link to="/category" className="hover:text-atrace-orange-light transition-colors">
              Kategori
            </Link>
            <Link to="/seller" className="hover:text-atrace-orange-light transition-colors">
              Seller
            </Link>
            <Link to="/cart" className="hover:text-atrace-orange-light transition-colors">
              Keranjang
            </Link>
            <Link to="/help" className="hover:text-atrace-orange-light transition-colors">
              Bantuan
            </Link>
            <Link to="/about" className="hover:text-atrace-orange-light transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-atrace-orange to-yellow-400 rounded"></div>
            <span className="text-xl font-bold text-gray-800">ATRACE</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What items are you looking for today?"
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-atrace-orange focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-atrace-orange text-white p-2 rounded-full hover:bg-atrace-orange-dark transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-atrace-orange transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-atrace-orange transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-atrace-orange transition-colors">
              <Heart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-atrace-orange transition-colors"
                >
                  <User className="w-6 h-6" />
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/orders"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      <Package className="w-4 h-4" />
                      <span>Orders</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-atrace-orange border border-atrace-orange rounded-lg hover:bg-atrace-orange hover:text-white transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-atrace-orange text-white rounded-lg hover:bg-atrace-orange-dark transition-colors"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
