// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InstallModal from "@/components/ui/InstallModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
  ];

  const handleDownloadClick = () => {
    setShowInstallModal(true);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Image
                src="/logo/LearraFull.png"
                alt="logo"
                width={140}
                height={40}
                className="select-none"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className={`relative font-medium transition ${active ? "text-green-600" : "text-black"}`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600 rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Download Button (Desktop) */}
          <motion.div className="hidden md:flex" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleDownloadClick}
              className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-md font-semibold"
            >
              Download
            </button>
          </motion.div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-7 h-[3px] bg-black rounded" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-7 h-[3px] bg-black rounded" />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-7 h-[3px] bg-black rounded" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 130, damping: 14 }}
              className="md:hidden bg-white border-t border-gray-200 flex flex-col px-6 py-4 gap-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 font-medium transition ${pathname === item.href ? "text-green-600" : "text-black"}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Download Button (Mobile) */}
              <button
                onClick={handleDownloadClick}
                className="mt-1 px-4 py-2 text-center rounded-full bg-green-600 text-white hover:bg-green-700 transition font-semibold"
              >
                Download
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Modal Instalasi */}
      {showInstallModal && <InstallModal onClose={() => setShowInstallModal(false)} />}
    </>
  );
}
