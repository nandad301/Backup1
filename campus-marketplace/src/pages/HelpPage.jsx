"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara menggunakan kupon diskon?",
      answer:
        "Anda dapat menggunakan kupon diskon dengan memasukkan kode kupon pada halaman checkout. Pastikan kupon masih berlaku dan memenuhi syarat minimum pembelian.",
    },
    {
      id: 2,
      question: "Apa itu free ongkir dan bagaimana cara mendapatkannya?",
      answer:
        "Free ongkir adalah gratis biaya pengiriman untuk pembelian dengan minimum tertentu. Biasanya berlaku untuk pembelian di atas Rp 100.000 ke seluruh Indonesia.",
    },
    {
      id: 3,
      question: "Apa saja metode pembayaran yang tersedia?",
      answer:
        "Kami menerima berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, GoPay, DANA), kartu kredit, dan COD (Cash on Delivery).",
    },
    {
      id: 4,
      question: "Berapa lama waktu pengiriman barang?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek 2-5 hari kerja. Untuk area luar Jabodetabek 2-5 hari kerja, dan area terpencil hingga 7 hari kerja.",
    },
    {
      id: 5,
      question: "Bagaimana cara melakukan retur atau pengembalian barang?",
      answer:
        "Anda dapat melakukan retur dalam 7 hari setelah barang diterima. Pastikan barang masih dalam kondisi asli dan lengkap dengan kemasan. Hubungi customer service untuk proses retur.",
    },
    {
      id: 6,
      question: "Bagaimana cara menghubungi customer service?",
      answer:
        "Anda dapat menghubungi customer service melalui live chat di website, email ke support@atrace.com, atau telepon ke (021) 1234-5678 pada jam kerja 08:00-17:00 WIB.",
    },
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Search functionality would be implemented here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-atrace-orange to-yellow-400 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h1 className="text-3xl font-bold mb-4">Ask us anything</h1>
              <p className="text-lg mb-6">Have any questions? We're here to assist you.</p>

              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-atrace-orange text-white px-6 py-2 rounded-full hover:bg-atrace-orange-dark transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* FAQ Item 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-atrace-orange-light rounded-full flex items-center justify-center mb-4">
                    <span className="text-atrace-orange font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bagaimana cara menggunakan kupon diskon?</h3>
                  <p className="text-sm text-gray-600">
                    Anda dapat menggunakan kupon diskon dengan memasukkan kode kupon pada halaman checkout. Pastikan
                    kupon masih berlaku dan memenuhi syarat minimum pembelian.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-atrace-orange-light rounded-full flex items-center justify-center mb-4">
                    <span className="text-atrace-orange font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Apa itu free ongkir dan bagaimana cara mendapatkannya?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Free ongkir adalah gratis biaya pengiriman untuk pembelian dengan minimum tertentu. Biasanya berlaku
                    untuk pembelian di atas Rp 100.000 ke seluruh Indonesia.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-atrace-orange-light rounded-full flex items-center justify-center mb-4">
                    <span className="text-atrace-orange font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Apa saja metode pembayaran yang tersedia?</h3>
                  <p className="text-sm text-gray-600">
                    Kami menerima berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, GoPay, DANA), kartu
                    kredit, dan COD (Cash on Delivery).
                  </p>
                </div>
              </div>

              {/* Detailed FAQ Accordion */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {faqData.map((faq) => (
                    <div key={faq.id} className="p-6">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <h3 className="font-medium text-gray-800 pr-4">{faq.question}</h3>
                        {openFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>

                      {openFAQ === faq.id && (
                        <div className="mt-4 text-gray-600">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 bg-gradient-to-r from-yellow-400 to-atrace-orange text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Masih ada pertanyaan lain?</h2>
                <p className="mb-6">Kirim pertanyaan Anda dan kami akan menghubungi Anda dengan secepatnya.</p>
                <button className="bg-white text-atrace-orange px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HelpPage
