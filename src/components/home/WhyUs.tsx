"use client";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, CreditCard } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Kelola Polis Dengan Mudah",
      desc: "Semua polis asuransi Anda dalam satu aplikasi yang rapi, aman, dan mudah diakses.",
    },
    {
      icon: FileCheck,
      title: "Klaim Lebih Cepat",
      desc: "Ajukan klaim langsung dari ponsel Anda. Prosesnya cepat dan anti ribet.",
    },
    {
      icon: CreditCard,
      title: "Pembayaran Aman",
      desc: "Riwayat transaksi lengkap dan pengingat jatuh tempo otomatis.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-16"
        >
          Mengapa Harus Menggunakan Learra?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100 text-green-600 mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
