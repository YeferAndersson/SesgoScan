/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Añade cualquier dominio externo para imágenes aquí
  },
  devIndicators: false
  // Añade cualquier otra configuración específica aquí
};

module.exports = nextConfig;