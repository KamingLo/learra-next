"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Snapshot() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Sekilas Tentang Aplikasi Learra
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Learra membantu Anda mengelola semua kebutuhan asuransi dalam satu platform. 
            Dari pembelian polis, pembayaran premi, hingga proses klaim—semuanya bisa dilakukan 
            langsung dari HP tanpa ribet.
          </p>

          <p className="mt-4 text-gray-600">
            Dengan antarmuka modern dan sistem yang stabil, Learra memastikan pengalaman terbaik 
            untuk kebutuhan asuransi Anda sehari-hari.
          </p>
        </motion.div>

        {/* Single image (20:9) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            <Image
              src="/images/Learra-snapshot.png"
              alt="App Snapshot"
              width={540}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
