"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard, Smartphone, Building } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer")
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650000,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550000,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string) => {
    setShippingAddress((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Alamat Pengiriman</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={shippingAddress.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    value={shippingAddress.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Textarea
                    id="address"
                    value={shippingAddress.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Masukkan alamat lengkap"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="city">Kota</Label>
                  <Input
                    id="city"
                    value={shippingAddress.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Masukkan kota"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Kode Pos</Label>
                  <Input
                    id="postalCode"
                    value={shippingAddress.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    placeholder="Masukkan kode pos"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Metode Pembayaran</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Building className="w-5 h-5 text-gray-600" />
                    <Label htmlFor="bank-transfer" className="flex-1 cursor-pointer">
                      Transfer Bank
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="e-wallet" id="e-wallet" />
                    <Smartphone className="w-5 h-5 text-gray-600" />
                    <Label htmlFor="e-wallet" className="flex-1 cursor-pointer">
                      E-Wallet (OVO, GoPay, DANA)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                      Kartu Kredit/Debit
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="cod" id="cod" />
                    <span className="w-5 h-5 text-gray-600 text-center">💰</span>
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      Cash on Delivery (COD)
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">Rp {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <hr className="mb-6" />

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkos Kirim:</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="flex justify-between">
                <span>Pajak (10%):</span>
                <span>Rp {tax.toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <Button className="w-full btn-primary text-lg py-3">Buat Pesanan</Button>

            {/* Security Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
