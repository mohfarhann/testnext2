import "./globals.css";
import { Inter, Montserrat,Rubik } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "BK8 | Situs Judi Bola, Slot dan Kasino Terpercaya di Indonesia 2023",
  description: "Nikmati sensasi bermain game online di BK8. Mulai dari poker, slot, judi bola &amp; live casino. Daftar dan menangkan bonus hingga Rp 20.000.000!",
  locale: "id_ID",
  type: "article",
  icons: {
    icon: [
      '/favicon.png'
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`bg-slate-100 ${inter.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
