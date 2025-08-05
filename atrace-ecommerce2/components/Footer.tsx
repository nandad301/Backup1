import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      {/* Newsletter Section */}
      <div className="bg-[#FFB84D] py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Masih ada pertanyaan lain?</h3>
          <p className="text-white/90 mb-4">Kami menerima kritik dan saran dari pelanggan Anda dengan senang hati</p>
          <Button className="bg-white text-[#FF6B35] hover:bg-gray-100">Hubungi Kami</Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Exclusive</h4>
            <p className="text-sm text-gray-600 mb-4">Get 10% off your first order</p>
            <div className="flex">
              <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] rounded-l-none">→</Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Jl. Ring Road Utara</p>
              <p>Ngringin, Condongcatur, Kec.</p>
              <p>Depok, Kabupaten Sleman, Daerah</p>
              <p>Istimewa Yogyakarta 55281</p>
              <p>atrace@gmail.com</p>
              <p>+6281 5 6808-9999</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Account</h4>
            <div className="space-y-2 text-sm">
              <Link href="/account" className="block text-gray-600 hover:text-[#FF6B35]">
                My Account
              </Link>
              <Link href="/login" className="block text-gray-600 hover:text-[#FF6B35]">
                Login / Register
              </Link>
              <Link href="/cart" className="block text-gray-600 hover:text-[#FF6B35]">
                Cart
              </Link>
              <Link href="/wishlist" className="block text-gray-600 hover:text-[#FF6B35]">
                Wishlist
              </Link>
              <Link href="/shop" className="block text-gray-600 hover:text-[#FF6B35]">
                Shop
              </Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Link</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block text-gray-600 hover:text-[#FF6B35]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-[#FF6B35]">
                Terms Of Use
              </Link>
              <Link href="/faq" className="block text-gray-600 hover:text-[#FF6B35]">
                FAQ
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-[#FF6B35]">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B35]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white p-2 rounded inline-block">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ATRACE. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
