import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "A Netflix clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
