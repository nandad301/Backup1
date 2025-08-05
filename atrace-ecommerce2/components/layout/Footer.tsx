import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      {/* Newsletter Section */}
      <div className="bg-[#FFB84D] py-8">
        <div className="container-custom text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Masih ada pertanyaan lain?</h3>
          <p className="text-white/90 mb-4">Kami menerima kritik dan saran dari pelanggan Anda dengan senang hati</p>
          <Link href="/help">
            <Button className="bg-white text-[#FF6B35] hover:bg-gray-100">Hubungi Kami</Button>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-800">ATRACE</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Campus marketplace untuk mahasiswa Indonesia</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Subscribe</h4>
              <p className="text-sm text-gray-600">Get 10% off your first order</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none text-sm" />
                <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] rounded-l-none px-3">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Jl. Ring Road Utara</p>
                  <p>Ngringin, Condongcatur</p>
                  <p>Yogyakarta 55281</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>atrace@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>+6281 5 6808-9999</p>
              </div>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Account</h4>
            <div className="space-y-2 text-sm">
              <Link href="/profile" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                My Account
              </Link>
              <Link href="/login" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Login / Register
              </Link>
              <Link href="/cart" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Cart
              </Link>
              <Link href="/wishlist" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Wishlist
              </Link>
              <Link href="/orders" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Orders
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                About Us
              </Link>
              <Link href="/help" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Help Center
              </Link>
              <Link href="/seller" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Become Seller
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg inline-block border">
              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">QR Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} ATRACE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#FF6B35] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
