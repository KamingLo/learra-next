// components/Hero.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InstallModal from "@/components/ui/InstallModal";

export default function Hero() {
  const [showInstallModal, setShowInstallModal] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo/LearraFull.png"
            alt="Learra Logo"
            width={200}
            height={80}
            className="mx-auto mb-10"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight"
        >
          Solusi Asuransi Modern  
          <span className="text-green-600 block">Dalam Satu Aplikasi</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl mt-6"
        >
          Kelola polis, pembayaran, dan klaim asuransi Anda dengan cara yang lebih cepat, lebih mudah, dan lebih transparan.
        </motion.p>

        {/* CTA - memicu InstallModal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={() => setShowInstallModal(true)}
            className="px-10 py-3 text-white bg-green-600 hover:bg-green-700 rounded-xl text-lg shadow-md transition"
          >
            Download untuk Android
          </button>
        </motion.div>
      </div>

      {/* InstallModal */}
      {showInstallModal && <InstallModal onClose={() => setShowInstallModal(false)} />}
    </section>
  );
}
