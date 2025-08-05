"use client"

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, QrCode } from "lucide-react"
import { useAuth } from "../contexts/AuthContext.js"
import Navbar from "../components/layout/Navbar.js"
import Footer from "../components/layout/Footer.js"

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

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gray-50" },
    React.createElement(Navbar),

    React.createElement(
      "main",
      { className: "py-16" },
      React.createElement(
        "div",
        { className: "container mx-auto px-4" },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto" },
          React.createElement(
            "div",
            { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
            // Left Side - Illustration
            React.createElement(
              "div",
              { className: "text-center" },
              React.createElement("img", {
                src: "/placeholder.svg?height=400&width=500",
                alt: "Shopping Cart Illustration",
                className: "w-full max-w-md mx-auto",
              }),
            ),

            // Right Side - Login Form
            React.createElement(
              "div",
              { className: "bg-white rounded-lg shadow-lg p-8" },
              React.createElement(
                "div",
                { className: "text-center mb-8" },
                React.createElement(
                  "div",
                  { className: "flex items-center justify-center space-x-2 mb-4" },
                  React.createElement("div", {
                    className: "w-8 h-8 bg-gradient-to-r from-atrace-orange to-yellow-400 rounded",
                  }),
                  React.createElement("span", { className: "text-xl font-bold text-gray-800" }, "ATRACE"),
                ),
                React.createElement("h2", { className: "text-2xl font-bold text-gray-800 mb-2" }, "Masuk Ke Atrace"),
                React.createElement("p", { className: "text-gray-600" }, "Butuh bantuan?"),
              ),

              React.createElement(
                "form",
                { onSubmit: handleSubmit, className: "space-y-6" },
                error &&
                  React.createElement(
                    "div",
                    { className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg" },
                    error,
                  ),

                React.createElement(
                  "div",
                  null,
                  React.createElement("input", {
                    type: "email",
                    name: "email",
                    placeholder: "NPM atau Email Amiikom",
                    value: formData.email,
                    onChange: handleChange,
                    className: "input-field",
                    required: true,
                  }),
                ),

                React.createElement(
                  "div",
                  { className: "relative" },
                  React.createElement("input", {
                    type: showPassword ? "text" : "password",
                    name: "password",
                    placeholder: "Password",
                    value: formData.password,
                    onChange: handleChange,
                    className: "input-field pr-12",
                    required: true,
                  }),
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className:
                        "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",
                    },
                    showPassword
                      ? React.createElement(EyeOff, { className: "w-5 h-5" })
                      : React.createElement(Eye, { className: "w-5 h-5" }),
                  ),
                ),

                React.createElement(
                  "button",
                  {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed",
                  },
                  isLoading ? "Signing in..." : "Selanjutnya",
                ),

                React.createElement(
                  "div",
                  { className: "text-center" },
                  React.createElement("p", { className: "text-gray-600 mb-4" }, "atau masuk dengan"),
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "flex items-center justify-center space-x-2 w-full border border-atrace-orange text-atrace-orange py-2 px-4 rounded-lg hover:bg-atrace-orange hover:text-white transition-colors",
                    },
                    React.createElement(QrCode, { className: "w-5 h-5" }),
                    React.createElement("span", null, "Scan Kode QR"),
                  ),
                ),
              ),

              React.createElement(
                "div",
                { className: "mt-8 text-center" },
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "Belum punya akun? ",
                  React.createElement(
                    Link,
                    { to: "/register", className: "text-atrace-orange hover:text-atrace-orange-dark font-medium" },
                    "Daftar di sini",
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(Footer),
  )
}

export default LoginPage
