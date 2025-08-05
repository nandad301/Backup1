import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext.js"
import { CartProvider } from "./contexts/CartContext.js"
import { WishlistProvider } from "./contexts/WishlistContext.js"

// Pages
import HomePage from "./pages/HomePage.js"
import LoginPage from "./pages/LoginPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import CategoryPage from "./pages/CategoryPage.js"
import SellerPage from "./pages/SellerPage.js"
import HelpPage from "./pages/HelpPage.js"
import AboutPage from "./pages/AboutPage.js"
import ProductDetailPage from "./pages/ProductDetailPage.js"
import PaymentPage from "./pages/PaymentPage.js"
import CartPage from "./pages/CartPage.js"
import WishlistPage from "./pages/WishlistPage.js"

function App() {
  return React.createElement(
    AuthProvider,
    null,
    React.createElement(
      CartProvider,
      null,
      React.createElement(
        WishlistProvider,
        null,
        React.createElement(
          Router,
          null,
          React.createElement(
            "div",
            { className: "App" },
            React.createElement(
              Routes,
              null,
              React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
              React.createElement(Route, { path: "/login", element: React.createElement(LoginPage) }),
              React.createElement(Route, { path: "/register", element: React.createElement(RegisterPage) }),
              React.createElement(Route, { path: "/category", element: React.createElement(CategoryPage) }),
              React.createElement(Route, { path: "/category/:categoryId", element: React.createElement(CategoryPage) }),
              React.createElement(Route, { path: "/seller", element: React.createElement(SellerPage) }),
              React.createElement(Route, { path: "/help", element: React.createElement(HelpPage) }),
              React.createElement(Route, { path: "/about", element: React.createElement(AboutPage) }),
              React.createElement(Route, {
                path: "/product/:productId",
                element: React.createElement(ProductDetailPage),
              }),
              React.createElement(Route, { path: "/payment", element: React.createElement(PaymentPage) }),
              React.createElement(Route, { path: "/cart", element: React.createElement(CartPage) }),
              React.createElement(Route, { path: "/wishlist", element: React.createElement(WishlistPage) }),
            ),
          ),
        ),
      ),
    ),
  )
}

export default App
