"use client"

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, Bell, ShoppingCart, Heart, User, ChevronDown, LogOut, Package } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext.js"
import { useCart } from "../../contexts/CartContext.js"
import { useWishlist } from "../../contexts/WishlistContext.js"

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

  return React.createElement(
    "nav",
    { className: "bg-white shadow-md sticky top-0 z-50" },
    // Top Navigation
    React.createElement(
      "div",
      { className: "bg-atrace-orange text-white" },
      React.createElement(
        "div",
        { className: "container mx-auto px-4" },
        React.createElement(
          "div",
          { className: "flex justify-center space-x-8 py-3" },
          React.createElement(
            Link,
            { to: "/category", className: "hover:text-atrace-orange-light transition-colors" },
            "Kategori",
          ),
          React.createElement(
            Link,
            { to: "/seller", className: "hover:text-atrace-orange-light transition-colors" },
            "Seller",
          ),
          React.createElement(
            Link,
            { to: "/cart", className: "hover:text-atrace-orange-light transition-colors" },
            "Keranjang",
          ),
          React.createElement(
            Link,
            { to: "/help", className: "hover:text-atrace-orange-light transition-colors" },
            "Bantuan",
          ),
          React.createElement(
            Link,
            { to: "/about", className: "hover:text-atrace-orange-light transition-colors" },
            "About Us",
          ),
        ),
      ),
    ),

    // Main Navigation
    React.createElement(
      "div",
      { className: "container mx-auto px-4 py-4" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between" },
        // Logo
        React.createElement(
          Link,
          { to: "/", className: "flex items-center space-x-2" },
          React.createElement("div", {
            className: "w-8 h-8 bg-gradient-to-r from-atrace-orange to-yellow-400 rounded",
          }),
          React.createElement("span", { className: "text-xl font-bold text-gray-800" }, "ATRACE"),
        ),

        // Search Bar
        React.createElement(
          "form",
          { onSubmit: handleSearch, className: "flex-1 max-w-2xl mx-8" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("input", {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: "What items are you looking for today?",
              className:
                "w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-atrace-orange focus:border-transparent",
            }),
            React.createElement(
              "button",
              {
                type: "submit",
                className:
                  "absolute right-2 top-1/2 transform -translate-y-1/2 bg-atrace-orange text-white p-2 rounded-full hover:bg-atrace-orange-dark transition-colors",
              },
              React.createElement(Search, { className: "w-4 h-4" }),
            ),
          ),
        ),

        // Right Icons
        React.createElement(
          "div",
          { className: "flex items-center space-x-4" },
          // Notifications
          React.createElement(
            "button",
            { className: "relative p-2 text-gray-600 hover:text-atrace-orange transition-colors" },
            React.createElement(Bell, { className: "w-6 h-6" }),
            React.createElement(
              "span",
              {
                className:
                  "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
              },
              "3",
            ),
          ),

          // Cart
          React.createElement(
            Link,
            { to: "/cart", className: "relative p-2 text-gray-600 hover:text-atrace-orange transition-colors" },
            React.createElement(ShoppingCart, { className: "w-6 h-6" }),
            getCartItemsCount() > 0 &&
              React.createElement(
                "span",
                {
                  className:
                    "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                },
                getCartItemsCount(),
              ),
          ),

          // Wishlist
          React.createElement(
            Link,
            { to: "/wishlist", className: "relative p-2 text-gray-600 hover:text-atrace-orange transition-colors" },
            React.createElement(Heart, { className: "w-6 h-6" }),
            wishlistItems.length > 0 &&
              React.createElement(
                "span",
                {
                  className:
                    "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                },
                wishlistItems.length,
              ),
          ),

          // User Menu
          user
            ? React.createElement(
                "div",
                { className: "relative" },
                React.createElement(
                  "button",
                  {
                    onClick: () => setShowUserDropdown(!showUserDropdown),
                    className:
                      "flex items-center space-x-2 p-2 text-gray-600 hover:text-atrace-orange transition-colors",
                  },
                  React.createElement(User, { className: "w-6 h-6" }),
                  React.createElement(ChevronDown, { className: "w-4 h-4" }),
                ),

                showUserDropdown &&
                  React.createElement(
                    "div",
                    {
                      className:
                        "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50",
                    },
                    React.createElement(
                      "div",
                      { className: "px-4 py-2 border-b border-gray-200" },
                      React.createElement("p", { className: "font-medium text-gray-800" }, user.name),
                      React.createElement("p", { className: "text-sm text-gray-600" }, user.email),
                    ),
                    React.createElement(
                      Link,
                      {
                        to: "/profile",
                        className: "flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100",
                        onClick: () => setShowUserDropdown(false),
                      },
                      React.createElement(User, { className: "w-4 h-4" }),
                      React.createElement("span", null, "Profile"),
                    ),
                    React.createElement(
                      Link,
                      {
                        to: "/orders",
                        className: "flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100",
                        onClick: () => setShowUserDropdown(false),
                      },
                      React.createElement(Package, { className: "w-4 h-4" }),
                      React.createElement("span", null, "Orders"),
                    ),
                    React.createElement(
                      "button",
                      {
                        onClick: handleLogout,
                        className: "flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100",
                      },
                      React.createElement(LogOut, { className: "w-4 h-4" }),
                      React.createElement("span", null, "Logout"),
                    ),
                  ),
              )
            : React.createElement(
                "div",
                { className: "flex items-center space-x-2" },
                React.createElement(
                  Link,
                  {
                    to: "/login",
                    className:
                      "px-4 py-2 text-atrace-orange border border-atrace-orange rounded-lg hover:bg-atrace-orange hover:text-white transition-colors",
                  },
                  "Masuk",
                ),
                React.createElement(
                  Link,
                  {
                    to: "/register",
                    className:
                      "px-4 py-2 bg-atrace-orange text-white rounded-lg hover:bg-atrace-orange-dark transition-colors",
                  },
                  "Daftar",
                ),
              ),
        ),
      ),
    ),
  )
}

export default Navbar
