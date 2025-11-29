/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opsi konfigurasi lainnya...
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
    },
    ],
  },
};

module.exports = nextConfig;