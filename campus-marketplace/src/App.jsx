import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import { WishlistProvider } from "./contexts/WishlistContext"

// Pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CategoryPage from "./pages/CategoryPage"
// import SellerPage from "./pages/SellerPage"
import HelpPage from "./pages/HelpPage"
// import AboutPage from "./pages/AboutPage"
// import ProductDetailPage from "./pages/ProductDetailPage"
// import PaymentPage from "./pages/PaymentPage"
import CartPage from "./pages/CartPage"
import WishlistPage from "./pages/WishlistPage"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/seller" element={<SellerPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Routes>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
