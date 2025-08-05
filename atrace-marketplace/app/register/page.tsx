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

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Password tidak cocok!")
      return
    }

    setIsLoading(true)

    const success = await register(name, email, password)
    if (success) {
      router.push("/")
    } else {
      alert("Registrasi gagal. Silakan coba lagi.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex min-h-[calc(100vh-200px)] max-w-7xl mx-auto flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 mb-10">
        <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex-col lg:flex-row">
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

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FFA366] rounded"></div>
                <span className="text-xl font-bold text-gray-800">ATRACE</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Daftar Akun Baru</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Masukan Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />

              <Input
                type="email"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />

              <Input
                type="password"
                placeholder="Masukan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />

              <Input
                type="password"
                placeholder="Konfirmasi Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full"
              />

              <Button type="submit" className="w-full btn-primary mt-2" disabled={isLoading}>
                {isLoading ? "Loading..." : "Daftar"}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Sudah punya akun?{" "}
                <Link href="/login" className="text-[#FF6B35] hover:underline">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}
