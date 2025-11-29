// app/product/page.tsx
"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import InstallModal from "@/components/ui/InstallModal";
import SkeletonCard from "@/components/ui/SkeletonCard";

interface Product {
  _id: string;
  namaProduk: string;
  premiDasar: number | string | null;
  description?: string;
  tipe: string;
}

const getImageUrl = (tipe: string): string => {
  const t = tipe.toLowerCase();
  if (t.includes('jiwa')) return "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80";
  if (t.includes('kendaraan')) return "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80";
  if (t.includes('kesehatan')) return "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80";
  return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80";
};

const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('Rp', 'Rp ');
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showInstallModal, setShowInstallModal] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const typedData: Product[] = Array.isArray(data) ? data.map(item => ({
          ...item,
          description: item.description || item.deskripsi,
          tipe: item.tipe || 'umum'
        })) : [];
        setProducts(typedData);
      } catch (error) {
        console.error("Gagal memuat produk:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="pt-40 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Pilih <span className="text-green-600">Produk Asuransi</span> Terbaik
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Lihat detail, ajukan premi, dan klaim dengan mudah hanya di Aplikasi Learra.
        </p>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center p-10 border rounded-xl bg-white shadow-md mx-auto max-w-lg mt-10 mb-20">
          <p className="text-xl font-medium text-gray-500">Tidak ada produk ditemukan. 😔</p>
          <p className="text-sm text-gray-400 mt-2">Coba periksa kembali API endpoint `/api/products` Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {products.map((p) => {
            const harga = Number(p.premiDasar || 0);
            const imageUrl = getImageUrl(p.tipe);
            return (
              <div
                key={p._id}
                className="group relative rounded-xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-transform duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setShowInstallModal(true)}
              >
                <div className="relative w-full h-[28rem]">
                  <Image
                    src={imageUrl}
                    alt={`Gambar produk ${p.namaProduk}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 pt-10 text-white flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{p.namaProduk}</h3>
                  {p.description && (
                    <p className="text-gray-200 text-sm line-clamp-2 mb-4">{p.description}</p>
                  )}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-green-600/80 text-white text-xs font-semibold rounded-full">
                      {p.tipe.charAt(0).toUpperCase() + p.tipe.slice(1)}
                    </span>
                    <span className="text-lg font-bold text-green-400">{formatRupiah(harga)}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowInstallModal(true); }}
                    className="w-full flex items-center justify-center py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
                  >
                    Lihat Detail di Aplikasi
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showInstallModal && <InstallModal onClose={() => setShowInstallModal(false)} />}
    </div>
  );
}
