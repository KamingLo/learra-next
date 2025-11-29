// components/ui/InstallModal.tsx
"use client";
import { X, Smartphone } from 'lucide-react';

interface InstallModalProps {
  onClose: () => void;
}

export default function InstallModal({ onClose }: InstallModalProps) {

  const handleDownload = () => {
    const url = "https://github.com/KamingLo/Learra/releases/download/Learra-v.1.0.0/learra.apk";
    const a = document.createElement("a");
    a.href = url;
    a.download = "learra.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-sm w-full">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-200">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-800">
            <Smartphone className="h-6 w-6 text-green-300" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Akses Detail Produk</h3>
          <p className="mt-2 text-sm text-gray-400">
            Lihat spesifikasi, simulasi premi, dan ajukan klaim hanya melalui aplikasi seluler Learra.
          </p>
        </div>

        <div className="mt-5 space-y-3">
          <button
            onClick={() => { handleDownload(); onClose(); }}
            className="w-full flex justify-center items-center px-4 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm font-medium transition"
          >
            Download Aplikasi (Android)
          </button>

          <button
            onClick={onClose}
            className="w-full flex justify-center px-4 py-3 text-red-500 bg-white border rounded-lg hover:bg-red-200 transition font-medium"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
