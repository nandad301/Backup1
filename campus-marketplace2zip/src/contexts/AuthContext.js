"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      const userData = {
        id: 1,
        name: "John Doe",
        email: email,
        avatar: "/placeholder.svg?height=40&width=40",
      }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
      return { success: true }
    } catch (error) {
      return { success: false, error: "Login failed" }
    }
  }

  const register = async (userData) => {
    try {
      // Simulate API call
      const newUser = {
        id: Date.now(),
        name: userData.fullName,
        email: userData.email,
        avatar: "/placeholder.svg?height=40&width=40",
      }
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: "Registration failed" }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  }

  return React.createElement(AuthContext.Provider, { value }, children)
}
