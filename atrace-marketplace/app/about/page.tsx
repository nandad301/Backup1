import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Target, Eye } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=200&width=200",
      description: "Visioner di balik ATRACE dengan pengalaman 10+ tahun di industri e-commerce.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      description: "Ahli teknologi yang memimpin pengembangan platform ATRACE.",
    },
    {
      name: "Mike Johnson",
      position: "Head of Marketing",
      image: "/placeholder.svg?height=200&width=200",
      description: "Strategi pemasaran dan pengembangan brand ATRACE.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="navbar-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About ATRACE</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Platform marketplace kampus yang menghubungkan mahasiswa, dosen, dan komunitas akademik dalam satu ekosistem
            perdagangan digital yang aman dan terpercaya.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ATRACE lahir dari kebutuhan akan platform e-commerce yang khusus dirancang untuk komunitas kampus. Kami
                memahami bahwa mahasiswa memiliki kebutuhan unik dalam berbelanja dan berbisnis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dengan fokus pada kemudahan akses, keamanan transaksi, dan dukungan untuk wirausaha muda, ATRACE hadir
                sebagai solusi marketplace yang tepat untuk generasi digital saat ini.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sejak diluncurkan, ATRACE telah melayani ribuan transaksi dan membantu ratusan seller muda mengembangkan
                bisnis mereka.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">Our Story Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-[#FF6B35] mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Visi Kami</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menjadi platform marketplace kampus terdepan di Indonesia yang menghubungkan komunitas akademik dalam
                ekosistem perdagangan digital yang inovatif, aman, dan berkelanjutan.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#FF6B35] mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Misi Kami</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Menyediakan platform yang mudah dan aman untuk bertransaksi</li>
                <li>• Mendukung pengembangan wirausaha muda di lingkungan kampus</li>
                <li>• Menciptakan ekosistem perdagangan yang fair dan transparan</li>
                <li>• Memberikan pengalaman berbelanja yang personal dan menyenangkan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Kepercayaan</h3>
              <p className="text-gray-600">
                Membangun kepercayaan melalui transparansi, keamanan, dan layanan yang konsisten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Inovasi</h3>
              <p className="text-gray-600">Terus berinovasi untuk memberikan solusi terbaik bagi komunitas kampus.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Komunitas</h3>
              <p className="text-gray-600">Mengutamakan kepentingan komunitas dan membangun hubungan yang kuat.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-[#FF6B35] font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">ATRACE dalam Angka</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">10K+</div>
              <p className="text-gray-600">Pengguna Aktif</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">500+</div>
              <p className="text-gray-600">Seller Terdaftar</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">50K+</div>
              <p className="text-gray-600">Transaksi Berhasil</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">25+</div>
              <p className="text-gray-600">Kampus Partner</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
