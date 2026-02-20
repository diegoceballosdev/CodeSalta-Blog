import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Local
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      // Strapi Cloud - API domain (por si acaso)
      {
        protocol: "https",
        hostname: "legendary-crown-029891c091.strapiapp.com",
      },
      // 🔥 Strapi Cloud - MEDIA domain (este es el importante)
      {
        protocol: "https",
        hostname: "legendary-crown-029891c091.media.strapiapp.com",
      },
      // 🔥 Strapi Cloud - MEDIA domain (Así no dependes del subdominio específico.):
      {
        protocol: "https",
        hostname: "**.media.strapiapp.com",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development", // Esto es para que funcione con Strapi en local
  },
};

export default nextConfig;
