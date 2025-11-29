// components/Footer.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Logo & Deskripsi */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/LearraFull.png"
              alt="Learra Logo"
              width={140}
              height={40}
              className="select-none"
            />
          </Link>
          <p className="text-gray-600 text-sm">
            Learra: Solusi Asuransi Modern, memudahkan Anda mengelola polis, pembayaran, dan klaim dalam satu aplikasi.
          </p>
        </div>

        {/* Column 2: Navigasi */}
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-900 font-semibold mb-2">Navigasi</h4>
          <Link href="/" className="text-gray-600 hover:text-green-600 transition">Home</Link>
          <Link href="/product" className="text-gray-600 hover:text-green-600 transition">Produk</Link>
          <Link href="/about" className="text-gray-600 hover:text-green-600 transition">Tentang Kami</Link>
        </div>

        {/* Column 3: Kontak & Sosial Media */}
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-900 font-semibold mb-2">Hubungi Kami</h4>
          <p className="text-gray-600 text-sm">support@learra.id</p>
          <p className="text-gray-600 text-sm">+62 812 3456 7890</p>

          <div className="flex items-center gap-4 mt-4">
            <Link href="https://github.com/KamingLo" target="_blank" className="text-gray-600 hover:text-green-600 transition">
              <Github className="w-5 h-5"/>
            </Link>
            <Link href="https://instagram.com/kaminglo_" target="_blank" className="text-gray-600 hover:text-green-600 transition">
              <Instagram className="w-5 h-5"/>
            </Link>
            <Link href="https://linkedin.com/in/kaming-lo" target="_blank" className="text-gray-600 hover:text-green-600 transition">
              <Linkedin className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Learra. All rights reserved.
      </div>
    </footer>
  );
}
