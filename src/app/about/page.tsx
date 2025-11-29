"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/ui/MotionDiv";

export default function AboutPage() {
  return (
    <MotionDiv
      className="max-w-4xl mx-auto py-24 px-6 space-y-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo + Intro */}
      <div className="text-center space-y-6">
        <Image
          src="/logo/LearraFull.png"
          alt="Learra Logo"
          width={180}
          height={40}
          className="mx-auto"
        />

        <h1 className="text-4xl font-bold text-gray-900">
          Apa Itu Learra?
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learra adalah aplikasi asuransi digital yang dirancang untuk membuat
          proses perlindungan menjadi jauh lebih sederhana, cepat, dan transparan.
          Tidak ada kerumitan. Tidak ada langkah yang tidak jelas.
          Hanya sebuah pengalaman asuransi yang bersih, modern, dan mudah dipahami.
        </p>
      </div>

      {/* Visi */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-600">Visi</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Menjadi platform asuransi digital paling inovatif dan paling
          dapat dipercaya di Indonesia, dengan menghadirkan pengalaman pengguna
          kelas dunia untuk setiap lapisan masyarakat.
        </p>
      </div>

      {/* Misi */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-600">Misi</h2>

        <ul className="list-disc ml-5 text-lg text-gray-700 space-y-3">
          <li>
            Menyederhanakan seluruh proses asuransi — mulai dari pembelian polis,
            pembayaran premi, hingga klaim.
          </li>
          <li>
            Menghadirkan sistem klaim yang cepat, jelas, dan dapat dipantau real-time.
          </li>
          <li>
            Meningkatkan literasi asuransi melalui tampilan antarmuka modern dan
            edukasi di dalam aplikasi.
          </li>
          <li>
            Menghubungkan masyarakat dengan produk asuransi yang lebih relevan dan terjangkau.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="pt-10 border-t border-gray-200 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Learra — Semua hak cipta dilindungi.
        </p>
      </div>
    </MotionDiv>
  );
}
