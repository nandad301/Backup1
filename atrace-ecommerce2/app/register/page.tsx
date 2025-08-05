"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/AuthContext"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Eye, EyeOff, QrCode } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      await register(formData.fullName, formData.email, formData.password)
      router.push("/")
    } catch (error) {
      console.error("Registration failed:", error)
      setErrors({ general: "Registration failed. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleRegister = () => {
    // Implement Google OAuth registration
    console.log("Google register clicked")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Shopping cart with laptop"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right side - Register Form */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">ATRACE</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Daftar Sekarang</CardTitle>
                    <CardDescription>Bergabung dengan komunitas mahasiswa</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Google Register Button */}
                  <Button
                    onClick={handleGoogleRegister}
                    variant="outline"
                    className="w-full py-3 border-2 hover:bg-gray-50 bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">atau daftar dengan</span>
                    </div>
                  </div>

                  {/* Register Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errors.general && (
                      <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                        {errors.general}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap"
                        required
                        className={`h-12 ${errors.fullName ? "border-red-500" : ""}`}
                      />
                      {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Amikom atau NPM</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="admin@gmail.com"
                        required
                        className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Buat password"
                          required
                          className={`h-12 pr-10 ${errors.password ? "border-red-500" : ""}`}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Konfirmasi password"
                          required
                          className={`h-12 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white h-12"
                    >
                      {isLoading ? "Creating Account..." : "Daftar"}
                    </Button>
                  </form>

                  <div className="text-center space-y-4">
                    <p className="text-gray-600">
                      atau daftar dengan{" "}
                      <Button variant="link" className="p-0 text-[#FF6B35] h-auto">
                        <QrCode className="h-4 w-4 mr-1" />
                        Scan Kode QR
                      </Button>
                    </p>

                    <p className="text-sm text-gray-600">
                      Sudah punya akun?{" "}
                      <Link href="/login" className="text-[#FF6B35] hover:underline font-medium">
                        Masuk di sini
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
