import React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Smartphone, Watch, Shirt, HomeIcon } from "lucide-react"
import Navbar from "../components/layout/Navbar.js"
import Footer from "../components/layout/Footer.js"
import ProductCard from "../components/common/ProductCard.js"

const HomePage = () => {
  // Mock data
  const categories = [
    { id: 1, name: "Elektronik", icon: Smartphone, count: 245 },
    { id: 2, name: "Fashion", icon: Shirt, count: 189 },
    { id: 3, name: "Rumah & Gaya Hidup", icon: HomeIcon, count: 156 },
    { id: 4, name: "Kecantikan & Kesehatan", icon: Watch, count: 98 },
    { id: 5, name: "Olahraga & Outdoor", icon: Watch, count: 87 },
    { id: 6, name: "Otomotif", icon: Watch, count: 76 },
    { id: 7, name: "Handphone & Aksesoris", icon: Smartphone, count: 234 },
  ]

  const flashSaleProducts = [
    {
      id: 1,
      name: "AK-900 Wired Keyboard",
      price: 1160000,
      originalPrice: 1600000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
      discount: 35,
    },
    {
      id: 2,
      name: "Headset / Earphone Original Proy G8 Series",
      price: 10500,
      originalPrice: 15000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
      reviews: 89,
      discount: 30,
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: 1965000,
      originalPrice: 2500000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 234,
      discount: 21,
    },
    {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
      isNew: true,
    },
  ]

  const recommendedProducts = [
    {
      id: 5,
      name: "ASUS FHD Gaming Laptop",
      price: 15600000,
      originalPrice: 24000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 325,
      discount: 35,
    },
    {
      id: 6,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
    },
    {
      id: 7,
      name: "HAVIT HV-G92 Gamepad",
      price: 560000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 88,
      isNew: true,
    },
    {
      id: 8,
      name: "AK-900 Wired Keyboard",
      price: 1160000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
    },
  ]

  const CategoryCard = ({ category }) => {
    return React.createElement(
      Link,
      {
        to: `/category/${category.id}`,
        className:
          "flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group",
      },
      React.createElement(
        "div",
        {
          className:
            "w-16 h-16 bg-atrace-orange-light rounded-full flex items-center justify-center mb-4 group-hover:bg-atrace-orange transition-colors",
        },
        React.createElement(category.icon, { className: "w-8 h-8 text-atrace-orange group-hover:text-white" }),
      ),
      React.createElement("h3", { className: "font-medium text-gray-800 text-center" }, category.name),
      React.createElement("p", { className: "text-sm text-gray-600 text-center mt-1" }, `(${category.count} items)`),
    )
  }

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gray-50" },
    React.createElement(Navbar),

    React.createElement(
      "main",
      null,
      // Hero Banner
      React.createElement(
        "section",
        { className: "bg-black text-white py-16" },
        React.createElement(
          "div",
          { className: "container mx-auto px-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between" },
            React.createElement(
              "div",
              { className: "flex-1" },
              React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Up to 10% off Voucher"),
              React.createElement(
                Link,
                {
                  to: "/category",
                  className:
                    "inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors",
                },
                "Shop Now",
              ),
            ),
            React.createElement(
              "div",
              { className: "flex-1 text-right" },
              React.createElement("img", {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Hero Product",
                className: "inline-block max-w-md",
              }),
            ),
          ),
        ),
      ),

      // Categories
      React.createElement(
        "section",
        { className: "py-16" },
        React.createElement(
          "div",
          { className: "container mx-auto px-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-8" },
            React.createElement(
              "h2",
              { className: "text-2xl font-bold text-gray-800" },
              React.createElement("span", { className: "text-atrace-orange" }, "■"),
              " Cari dari Kategori",
            ),
            React.createElement(
              "div",
              { className: "flex space-x-2" },
              React.createElement(
                "button",
                { className: "p-2 border border-gray-300 rounded-full hover:bg-gray-50" },
                React.createElement(ChevronLeft, { className: "w-5 h-5" }),
              ),
              React.createElement(
                "button",
                { className: "p-2 border border-gray-300 rounded-full hover:bg-gray-50" },
                React.createElement(ChevronRight, { className: "w-5 h-5" }),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4" },
            categories.map((category) => React.createElement(CategoryCard, { key: category.id, category: category })),
          ),
        ),
      ),

      // Flash Sales
      React.createElement(
        "section",
        { className: "py-16 bg-white" },
        React.createElement(
          "div",
          { className: "container mx-auto px-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-8" },
            React.createElement(
              "h2",
              { className: "text-2xl font-bold text-gray-800" },
              React.createElement("span", { className: "text-atrace-orange" }, "■"),
              " Flash Sales",
            ),
            React.createElement(
              Link,
              { to: "/category?sale=true", className: "text-atrace-orange hover:text-atrace-orange-dark font-medium" },
              "See All",
            ),
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
            flashSaleProducts.map((product) =>
              React.createElement(ProductCard, { key: product.id, product: product, showDiscount: true }),
            ),
          ),
        ),
      ),

      // Recommended Products
      React.createElement(
        "section",
        { className: "py-16" },
        React.createElement(
          "div",
          { className: "container mx-auto px-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-8" },
            React.createElement(
              "h2",
              { className: "text-2xl font-bold text-gray-800" },
              React.createElement("span", { className: "text-atrace-orange" }, "■"),
              " Rekomendasi barang yang cocok untukmu",
            ),
            React.createElement(
              Link,
              { to: "/category", className: "text-atrace-orange hover:text-atrace-orange-dark font-medium" },
              "See All",
            ),
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
            recommendedProducts.map((product) =>
              React.createElement(ProductCard, { key: product.id, product: product }),
            ),
          ),
          React.createElement(
            "div",
            { className: "text-center mt-8" },
            React.createElement(Link, { to: "/category", className: "btn-primary inline-block" }, "View All Products"),
          ),
        ),
      ),

      // Promotional Banner
      React.createElement(
        "section",
        { className: "py-16 bg-black text-white" },
        React.createElement(
          "div",
          { className: "container mx-auto px-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between" },
            React.createElement(
              "div",
              { className: "flex-1" },
              React.createElement("h2", { className: "text-3xl font-bold mb-4" }, "Enhance Your Music Experience"),
              React.createElement(
                "div",
                { className: "flex space-x-4 mb-6" },
                React.createElement(
                  "div",
                  { className: "bg-white text-black rounded-full w-16 h-16 flex items-center justify-center" },
                  React.createElement("span", { className: "font-bold" }, "23"),
                ),
                React.createElement(
                  "div",
                  { className: "bg-white text-black rounded-full w-16 h-16 flex items-center justify-center" },
                  React.createElement("span", { className: "font-bold" }, "05"),
                ),
                React.createElement(
                  "div",
                  { className: "bg-white text-black rounded-full w-16 h-16 flex items-center justify-center" },
                  React.createElement("span", { className: "font-bold" }, "59"),
                ),
                React.createElement(
                  "div",
                  { className: "bg-white text-black rounded-full w-16 h-16 flex items-center justify-center" },
                  React.createElement("span", { className: "font-bold" }, "35"),
                ),
              ),
              React.createElement(
                "button",
                {
                  className:
                    "bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors",
                },
                "Buy Now!",
              ),
            ),
            React.createElement(
              "div",
              { className: "flex-1 text-right" },
              React.createElement("img", {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Speaker",
                className: "inline-block max-w-md",
              }),
            ),
          ),
        ),
      ),
    ),

    React.createElement(Footer),
  )
}

export default HomePage
