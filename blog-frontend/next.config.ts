import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Strapi: para local (desarrollo)
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      //al desplegar, debo colocalo tambien aqui:
    ],
    unoptimized: process.env.NODE_ENV === "development", // Esto es para que funcione con Strapi en local
  },
};

export default nextConfig;
