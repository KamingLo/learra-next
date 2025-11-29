// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <motion.h1
        className="text-8xl font-extrabold text-green-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="mt-4 text-xl text-gray-700 max-w-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Halaman yang kamu cari tidak ditemukan. 😔
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition font-semibold"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
