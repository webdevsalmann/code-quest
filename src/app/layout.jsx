import "./globals.css";
import { Inter } from "next/font/google";
import { siteMd } from "@/lib/datas/metadatas";
import Navbar from "@/components/layouts/navbar/navbar";
import Providers from "@/components/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
