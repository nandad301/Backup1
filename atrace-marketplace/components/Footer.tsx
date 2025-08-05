import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-white text-sm select-none py-9">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive */}
          <div> 
            <h3 className="text-gray-600 font-bold mb-3">Exclusive</h3>
            <p className="text-gray-600 mb-2">Get 10% off your first order</p>
            <div className="flex max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-md px-1 py-2 text-gray-600 border border-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-orange-400 px-4 py-2 rounded-r-md text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700">{"→"}</button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-600 font-bold mb-3">Support</h3>
            <address className="text-gray-600 not-italic text-xs mb-2">
              Jl. Ring Road Utara,<br />
              Ngringin, Condongcatur, Kec.<br />
              Depok, Kabupaten Sleman, Daerah<br />
              Istimewa Yogyakarta 55281
            </address>
            <p className="text-gray-600 text-xs mb-2">exclusive@gmail.com</p>
            <p className="text-gray-600 text-xs">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-gray-600 font-bold mb-3">Account</h3>
            <div className="space-y-1 text-xs">
              <Link href="/profile" className="text-gray-600 block hover:underline">
                My Account
              </Link>
              <Link href="/login" className="text-gray-600 block hover:underline">
                Login / Register
              </Link>
              <Link href="/cart" className="text-gray-600 block hover:underline">
                Cart
              </Link>
              <Link href="/wishlist" className="text-gray-600 block hover:underline">
                Wishlist
              </Link>
              <Link href="/shop" className="text-gray-600 block hover:underline">
                Shop
              </Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-gray-600 font-bold mb-3">Quick Link</h3>
            <div className="text-gray-600 flex flex-col space-y-3">
              <Link href="/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:underline">
                Terms Of Use
              </Link>
              <Link href="/faq" className="block hover:underline">
                FAQ
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-gray-600 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-[#FF6B35] cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-[#FF6B35] cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-600 hover:text-[#FF6B35] cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-[#FF6B35] cursor-pointer" />
            </div>
            <div className="mt-4">
              <div className="w-20 h-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
