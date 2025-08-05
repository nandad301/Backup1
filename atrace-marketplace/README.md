# ATRACE - Campus Marketplace

ATRACE adalah platform marketplace kampus yang dirancang khusus untuk komunitas akademik. Platform ini menghubungkan mahasiswa, dosen, dan komunitas kampus dalam satu ekosistem perdagangan digital yang aman dan terpercaya.

## Fitur Utama

### 🏠 Home Page
- **Before Login**: Navbar dengan logo ATRACE, search bar, notification, cart, wishlist, dan user icon
- **After Login**: Dropdown user menu dengan Profile, Orders, dan Logout
- Flash Sale section dengan horizontal scroll
- Recommended products dalam grid layout
- Kategori produk yang mudah diakses

### 🔐 Authentication
- **Login Page**: Form login sederhana dengan email/password
- **Register Page**: Form registrasi dengan validasi
- Forgot password functionality
- QR Code login option

### 🛍️ Shopping Experience
- **Category Page**: Filter berdasarkan kategori dan rentang harga
- **Product Detail**: Gallery gambar, rating, deskripsi lengkap
- **Shopping Cart**: Manajemen quantity dan checkout
- **Wishlist**: Simpan produk favorit
- **Payment**: Multiple payment methods (Bank Transfer, E-wallet, COD)

### 👥 Seller Features
- **Seller Page**: Dashboard untuk seller dengan fitur:
  - Toko management
  - Product upload dan management
  - Promosi dan campaign
  - Statistik penjualan

### 📞 Support
- **Help Page**: FAQ dengan accordion style
- **About Us**: Informasi platform, visi misi, team

## Tech Stack

- **Framework**: Next.js 14 dengan App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **TypeScript**: Full TypeScript support

## Instalasi dan Menjalankan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

1. **Clone atau Download Project**
   \`\`\`bash
   # Jika menggunakan git
   git clone <repository-url>
   cd atrace-marketplace
   
   # Atau download dan extract file
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   # atau
   yarn install
   \`\`\`

3. **Jalankan Development Server**
   \`\`\`bash
   npm run dev
   # atau
   yarn dev
   \`\`\`

4. **Buka Browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Build untuk Production

\`\`\`bash
# Build aplikasi
npm run build

# Jalankan production server
npm start
\`\`\`

## Struktur Project

\`\`\`
atrace-marketplace/
├── app/                    # Next.js
