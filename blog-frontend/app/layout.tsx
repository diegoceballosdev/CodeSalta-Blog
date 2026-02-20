import type { Metadata } from "next";
import "./globals.css";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "CodeSalta",
  description: "CodeSalta - Un mundo de código",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased ${poppins.variable} ${jetBrains.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
