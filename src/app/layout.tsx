import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copa America Clase Aparte",
  description: "Copa america clase aparte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <h1>Navbar</h1>
        <div className="h-[calc(100vh-5rem)]:">
        {children}
        </div>        
        </body>
    </html>
  );
}
