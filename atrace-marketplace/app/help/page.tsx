"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara menggunakan kupon diskon?",
      answer:
        "Anda dapat menggunakan kupon diskon dengan memasukkan kode kupon pada halaman checkout. Pastikan kupon masih berlaku dan memenuhi syarat penggunaan minimum pembelian.",
    },
    {
      id: 2,
      question: "Apa itu free ongkir dan bagaimana cara mendapatkannya?",
      answer:
        "Free ongkir adalah gratis biaya pengiriman untuk pembelian dengan minimum tertentu. Biasanya berlaku untuk pembelian di atas Rp 100.000 ke seluruh Indonesia.",
    },
    {
      id: 3,
      question: "Berapa lama waktu pengiriman barang?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek 2-5 hari kerja. Untuk area luar Jabodetabek 2-5 hari kerja, dan area terpencil hingga 7 hari kerja.",
    },
    {
      id: 4,
      question: "Bagaimana cara melakukan retur atau pengembalian barang?",
      answer:
        "Anda dapat melakukan retur dalam 7 hari setelah barang diterima. Pastikan barang masih dalam kondisi asli dan lengkap dengan kemasan. Hubungi customer service untuk proses retur.",
    },
    {
      id: 5,
      question: "Bagaimana cara menghubungi customer service?",
      answer:
        "Anda dapat menghubungi customer service melalui live chat di website, email ke support@atrace.com, atau telepon ke (021) 1234-5678 pada jam kerja 08:00-17:00 WIB.",
    },
  ]

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="navbar-orange text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-yellow-100 text-gray-800 rounded-lg p-8 border-2 border-dashed border-yellow-300">
            <h1 className="text-3xl font-bold mb-4">Ask us anything</h1>
            <p className="text-lg mb-6">Have any questions? We're here to assist you.</p>

            <div className="flex max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white"
              />
              <Button className="ml-2 btn-primary">Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">?</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Bagaimana cara menggunakan kupon diskon?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anda dapat menggunakan kupon diskon dengan memasukkan kode kupon pada halaman checkout. Pastikan kupon
                  masih berlaku dan memenuhi syarat penggunaan minimum pembelian.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">?</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Apa itu free ongkir dan bagaimana cara mendapatkannya?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Free ongkir adalah gratis biaya pengiriman untuk pembelian dengan minimum tertentu. Biasanya berlaku
                  untuk pembelian di atas Rp 100.000 ke seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">📦</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Apa saja metode pembayaran yang tersedia?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kami menerima berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, GoPay, DANA), kartu
                  kredit, dan COD (Cash on Delivery).
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">⏰</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Berapa lama waktu pengiriman barang?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek 1-2 hari kerja. Untuk area luar
                  Jabodetabek 2-5 hari kerja, dan area terpencil hingga 7 hari kerja.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">↩️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Bagaimana cara melakukan retur atau pengembalian barang?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anda dapat melakukan retur dalam 7 hari setelah barang diterima. Pastikan barang masih dalam kondisi
                  asli dan lengkap dengan kemasan. Hubungi customer service untuk proses retur.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">💬</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Bagaimana cara menghubungi customer service?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anda dapat menghubungi customer service melalui live chat di website, email ke support@atrace.com,
                  atau telepon ke (021) 1234-5678 pada jam kerja 08:00-17:00 WIB.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-yellow-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Masih ada pertanyaan lain?</h2>
          <p className="text-gray-700 mb-6">Kirim pertanyaan Anda dan kami akan membantu Anda dengan sepenuh hati.</p>
          <Button className="btn-primary">Hubungi Kami</Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
