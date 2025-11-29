import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata = {
  title: "Learra - Insurance Platform",
  description: "Aplikasi untuk cek produk, bikin polis, pembayaran, dan klaim.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-white text-neutral-900">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
