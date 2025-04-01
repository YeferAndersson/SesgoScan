/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Añade cualquier dominio externo para imágenes aquí
  },
  devIndicators: false,
  // Ignorar errores de ESLint y TypeScript durante la compilación
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
  // Añade cualquier otra configuración específica aquí
};

module.exports = nextConfig;