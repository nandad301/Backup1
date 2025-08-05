"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const success = await login(email, password)
    if (success) {
      router.push("/")
    } else {
      alert("Login gagal. Periksa email dan password Anda.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex min-h-[calc(100vh-200px)] max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 mb-10">
        <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side - Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center p-12">
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-24 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="w-24 h-16 bg-pink-400 rounded border-2 border-pink-500 mx-auto"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:w-1/2 p-12">
            <div className="max-w-md mx-auto">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FFA366] rounded"></div>
                  <span className="text-xl font-bold text-gray-800">ATRACE</span>
                </div>
                <div className="w-full text-center text-sm text-gray-700 mb-4 flex justify-between items-center px-3">
                  <span>Masuk Ke <span className="font-bold text-orange-500">Atrace</span></span>
                  <span><Link href="/register" className="text-orange-500 hover:underline font-medium">Daftar</Link></span>
                </div>  
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Masukan NPM atau Email Amiikom"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="Masukan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Selanjutnya"}
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">atau masuk dengan</p>
                <div className="border border-[#FF6B35] rounded-lg p-3 flex items-center justify-center space-x-2 cursor-pointer hover:bg-orange-50">
                  <span className="text-[#FF6B35]">📱</span>
                  <span className="text-sm text-[#FF6B35]">Scan Kode QR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
