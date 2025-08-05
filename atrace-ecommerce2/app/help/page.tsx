"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

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
      "Free ongkir adalah gratis biaya pengiriman untuk pembelian dengan nilai tertentu. Biasanya berlaku untuk pembelian di atas Rp 100.000 ke seluruh Indonesia.",
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
      "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek 1-2 hari kerja, luar Jabodetabek 2-5 hari kerja, dan area terpencil hingga 7 hari kerja.",
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
      "Anda dapat menghubungi customer service melalui live chat di website, email ke support@atrace.com, atau telepon ke (021) 1234-5678 pada jam 08:00-17:00 WIB.",
  },
]

export default function HelpPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-12 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Ask us anything</h1>
            <p className="text-gray-600 mb-8">Have any questions? We're here to assist you.</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 focus:border-[#FF6B35] focus:ring-0"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6B35] hover:bg-[#E55A2B] rounded-full px-4"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFAQ.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border">
                <Collapsible
                  open={openItems.includes(item.id)}
                  onOpenChange={() => toggleItem(item.id)}
                >
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">?</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.question}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Click to expand</span>
                          {openItems.includes(item.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <div className="ml-12">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No FAQ items found matching your search.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[\
