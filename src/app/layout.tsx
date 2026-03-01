import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southern Creative Concepts",
  description: "Creative agency specializing in branding, design, and marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gradient-to-b from-[#090979] to-[#002dff] text-white p-4">
          <nav className="container mx-auto flex items-center justify-start space-x-6">
            <a href="/" className="flex items-center space-x-2">
              <Image src="/SouthernCreativeConceptsRainbow.png" alt="Logo" width={60} height={60} className="object-contain" />
              <span className="font-semibold hover:underline">Home</span>
            </a>
            <a href="/about" className="font-semibold hover:underline">
              About
            </a>
            <a href="/consultation" className="font-semibold hover:underline">
              Contact Us
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
