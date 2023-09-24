import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BK8 | Login dan Daftar Situs Judi Slot Terpercaya Indonesia",
  description: "BK8 merupakan situs judi bola, slot dan online casino terbesar dan terpercaya di Indonesia. Daftar dan dapatkan welcome bonus hingga Rp18.000.000!",
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
