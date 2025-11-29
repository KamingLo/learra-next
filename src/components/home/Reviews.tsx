"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Andi Pratama",
      text: "Aplikasi sangat membantu ketika saya mengurus klaim. Cepat, mudah, dan jelas.",
      rating: 5,
    },
    {
      name: "Siti Rahma",
      text: "UI nya bersih dan simpel. Semua fitur penting ada dan responsif.",
      rating: 5,
    },
    {
      name: "Bagus Wijaya",
      text: "Pembayaran premi jadi jauh lebih teratur karena ada pengingat otomatis.",
      rating: 4,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14"
        >
          Apa Kata Pengguna?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Rating bintang */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-[15px] italic">
                “{r.text}”
              </p>

              <p className="mt-6 font-semibold text-gray-900 text-sm">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
