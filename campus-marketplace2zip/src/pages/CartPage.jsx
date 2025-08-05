"use client"
import { Link } from "react-router-dom"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/common/ProductCard"

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const recommendedProducts = [
    {
      id: 101,
      name: "ASUS FHD Gaming Laptop",
      price: 15600000,
      originalPrice: 24000000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 325,
      discount: 35,
    },
    {
      id: 102,
      name: "IPS LCD Gaming Monitor",
      price: 3700000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 99,
    },
    {
      id: 103,
      name: "HAVIT HV-G92 Gamepad",
      price: 560000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 88,
      isNew: true,
    },
    {
      id: 104,
      name: "AK-900 Wired Keyboard",
      price: 1160000,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 75,
    },
  ]

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Empty Cart"
                className="w-32 h-32 mx-auto mb-6 opacity-50"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/category" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-atrace-orange">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span>Cart</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Subtotal</div>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="px-6 py-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Product Info */}
                        <div className="col-span-6 flex items-center space-x-4">
                          <img
                            src={item.image || "/placeholder.svg?height=80&width=80"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm flex items-center space-x-1 mt-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center">
                          <span className="font-medium">{formatPrice(item.price)}</span>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="col-span-2 text-center">
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Actions */}
                <div className="px-6 py-4 bg-gray-50 flex justify-between">
                  <Link to="/category" className="btn-secondary">
                    Return To Shop
                  </Link>
                  <button className="btn-secondary">Update Cart</button>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <div className="flex space-x-4">
                  <input type="text" placeholder="Coupon Code" className="flex-1 input-field" />
                  <button className="btn-primary">Apply Coupon</button>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Cart Total</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatPrice(getCartTotal())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold text-lg">{formatPrice(getCartTotal())}</span>
                    </div>
                  </div>
                </div>

                <Link to="/payment" className="w-full btn-primary block text-center">
                  Process to checkout
                </Link>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-atrace-orange">■</span> Just For You
              </h2>
              <Link to="/category" className="text-atrace-orange hover:text-atrace-orange-dark font-medium">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CartPage
