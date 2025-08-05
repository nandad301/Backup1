import React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "bg-gray-100 mt-16" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 py-12" },
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" },
        // Exclusive
        React.createElement(
          "div",
          null,
          React.createElement("h3", { className: "font-semibold text-gray-800 mb-4" }, "Exclusive"),
          React.createElement("p", { className: "text-sm text-gray-600 mb-4" }, "Get 10% off your first order"),
          React.createElement(
            "div",
            { className: "flex" },
            React.createElement("input", {
              type: "email",
              placeholder: "Enter your email",
              className:
                "flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-atrace-orange",
            }),
            React.createElement(
              "button",
              {
                className:
                  "bg-atrace-orange text-white px-4 py-2 rounded-r-lg hover:bg-atrace-orange-dark transition-colors",
              },
              React.createElement(Mail, { className: "w-4 h-4" }),
            ),
          ),
        ),

        // Support
        React.createElement(
          "div",
          null,
          React.createElement("h3", { className: "font-semibold text-gray-800 mb-4" }, "Support"),
          React.createElement(
            "div",
            { className: "space-y-2 text-sm text-gray-600" },
            React.createElement("p", null, "Jl. Ring Road Utara"),
            React.createElement("p", null, "Ngringin, Condongcatur, Kec."),
            React.createElement("p", null, "Depok, Kabupaten Sleman,"),
            React.createElement("p", null, "Daerah Istimewa Yogyakarta 55281"),
            React.createElement("p", null, "exclusive@gmail.com"),
            React.createElement("p", null, "+62812-8888-9999"),
          ),
        ),

        // Account
        React.createElement(
          "div",
          null,
          React.createElement("h3", { className: "font-semibold text-gray-800 mb-4" }, "Account"),
          React.createElement(
            "div",
            { className: "space-y-2" },
            React.createElement(
              Link,
              { to: "/profile", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "My Account",
            ),
            React.createElement(
              Link,
              { to: "/login", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Login / Register",
            ),
            React.createElement(
              Link,
              { to: "/cart", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Cart",
            ),
            React.createElement(
              Link,
              { to: "/wishlist", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Wishlist",
            ),
            React.createElement(
              Link,
              { to: "/category", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Shop",
            ),
          ),
        ),

        // Quick Link
        React.createElement(
          "div",
          null,
          React.createElement("h3", { className: "font-semibold text-gray-800 mb-4" }, "Quick Link"),
          React.createElement(
            "div",
            { className: "space-y-2" },
            React.createElement(
              Link,
              { to: "/about", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Privacy Policy",
            ),
            React.createElement(
              Link,
              { to: "/about", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Terms Of Use",
            ),
            React.createElement(
              Link,
              { to: "/help", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "FAQ",
            ),
            React.createElement(
              Link,
              { to: "/help", className: "block text-sm text-gray-600 hover:text-atrace-orange" },
              "Contact",
            ),
          ),
        ),

        // Follow Us
        React.createElement(
          "div",
          null,
          React.createElement("h3", { className: "font-semibold text-gray-800 mb-4" }, "Follow Us"),
          React.createElement(
            "div",
            { className: "flex space-x-4" },
            React.createElement(
              "a",
              { href: "#", className: "text-gray-600 hover:text-atrace-orange" },
              React.createElement(Facebook, { className: "w-5 h-5" }),
            ),
            React.createElement(
              "a",
              { href: "#", className: "text-gray-600 hover:text-atrace-orange" },
              React.createElement(Twitter, { className: "w-5 h-5" }),
            ),
            React.createElement(
              "a",
              { href: "#", className: "text-gray-600 hover:text-atrace-orange" },
              React.createElement(Instagram, { className: "w-5 h-5" }),
            ),
            React.createElement(
              "a",
              { href: "#", className: "text-gray-600 hover:text-atrace-orange" },
              React.createElement(Linkedin, { className: "w-5 h-5" }),
            ),
          ),
          React.createElement(
            "div",
            { className: "mt-4" },
            React.createElement("img", {
              src: "/placeholder.svg?height=80&width=80",
              alt: "QR Code",
              className: "w-20 h-20",
            }),
          ),
        ),
      ),

      // Service Features
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200" },
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4" },
            React.createElement("div", { className: "w-6 h-6 bg-white rounded-full" }),
          ),
          React.createElement("h4", { className: "font-semibold text-gray-800 mb-2" }, "FREE AND FAST DELIVERY"),
          React.createElement("p", { className: "text-sm text-gray-600" }, "Free delivery for all orders over $140"),
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4" },
            React.createElement("div", { className: "w-6 h-6 bg-white rounded-full" }),
          ),
          React.createElement("h4", { className: "font-semibold text-gray-800 mb-2" }, "24/7 CUSTOMER SERVICE"),
          React.createElement("p", { className: "text-sm text-gray-600" }, "Friendly 24/7 customer support"),
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4" },
            React.createElement("div", { className: "w-6 h-6 bg-white rounded-full" }),
          ),
          React.createElement("h4", { className: "font-semibold text-gray-800 mb-2" }, "MONEY BACK GUARANTEE"),
          React.createElement("p", { className: "text-sm text-gray-600" }, "We return money within 30 days"),
        ),
      ),

      // Copyright
      React.createElement(
        "div",
        { className: "text-center mt-8 pt-8 border-t border-gray-200" },
        React.createElement(
          "p",
          { className: "text-sm text-gray-600" },
          "© 2024 ATRACE Campus Marketplace. All rights reserved.",
        ),
      ),
    ),
  )
}

export default Footer
