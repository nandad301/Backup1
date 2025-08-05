import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Exclusive</h3>
            <p className="text-sm text-gray-600 mb-4">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-atrace-orange"
              />
              <button className="bg-atrace-orange text-white px-4 py-2 rounded-r-lg hover:bg-atrace-orange-dark transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Jl. Ring Road Utara</p>
              <p>Ngringin, Condongcatur, Kec.</p>
              <p>Depok, Kabupaten Sleman,</p>
              <p>Daerah Istimewa Yogyakarta 55281</p>
              <p>exclusive@gmail.com</p>
              <p>+62812-8888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
            <div className="space-y-2">
              <Link to="/profile" className="block text-sm text-gray-600 hover:text-atrace-orange">
                My Account
              </Link>
              <Link to="/login" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Login / Register
              </Link>
              <Link to="/cart" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Cart
              </Link>
              <Link to="/wishlist" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Wishlist
              </Link>
              <Link to="/category" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Shop
              </Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Link</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Privacy Policy
              </Link>
              <Link to="/about" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Terms Of Use
              </Link>
              <Link to="/help" className="block text-sm text-gray-600 hover:text-atrace-orange">
                FAQ
              </Link>
              <Link to="/help" className="block text-sm text-gray-600 hover:text-atrace-orange">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-atrace-orange">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-atrace-orange">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-atrace-orange">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-atrace-orange">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <img src="/placeholder.svg?height=80&width=80" alt="QR Code" className="w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">FREE AND FAST DELIVERY</h4>
            <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">24/7 CUSTOMER SERVICE</h4>
            <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">MONEY BACK GUARANTEE</h4>
            <p className="text-sm text-gray-600">We return money within 30 days</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">© 2024 ATRACE Campus Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
