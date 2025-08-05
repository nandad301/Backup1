"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, QrCode } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await login(formData.email, formData.password)

    if (result.success) {
      navigate("/")
    } else {
      setError(result.error)
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Illustration */}
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Shopping Cart Illustration"
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Right Side - Login Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-atrace-orange to-yellow-400 rounded"></div>
                    <span className="text-xl font-bold text-gray-800">ATRACE</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Masuk Ke Atrace</h2>
                  <p className="text-gray-600">Butuh bantuan?</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">{error}</div>
                  )}

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="NPM atau Email Amiikom"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="input-field pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Signing in..." : "Selanjutnya"}
                  </button>

                  <div className="text-center">
                    <p className="text-gray-600 mb-4">atau masuk dengan</p>
                    <button
                      type="button"
                      className="flex items-center justify-center space-x-2 w-full border border-atrace-orange text-atrace-orange py-2 px-4 rounded-lg hover:bg-atrace-orange hover:text-white transition-colors"
                    >
                      <QrCode className="w-5 h-5" />
                      <span>Scan Kode QR</span>
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-atrace-orange hover:text-atrace-orange-dark font-medium">
                      Daftar di sini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LoginPage
