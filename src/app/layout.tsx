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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header role="banner" className="bg-gradient-to-b from-[#090979] to-[#002dff] text-white p-4">
          <nav role="navigation" aria-label="Main navigation" className="container mx-auto relative flex items-center justify-center space-x-6">
            {/* logo-only link pinned to left */}
            <a href="/" className="absolute left-0 flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded p-1" aria-label="Southern Creative Concepts Home">
              <Image src="/SouthernCreativeConceptsRainbow.png" alt="Southern Creative Concepts Logo" width={60} height={60} className="object-contain" />
            </a>
            {/* center group: home + about + contact */}
            <div className="flex items-center space-x-6">
              <a href="/" className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded px-2 py-1">
                Home
              </a>
              <a href="/about" className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded px-2 py-1" aria-label="About Southern Creative Concepts">
                About
              </a>
              <a href="/consultation" className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded px-2 py-1" aria-label="Contact Us - Schedule a Consultation">
                Contact Us
              </a>
            </div>
          </nav>
        </header>
        <main role="main" className="flex-grow">
          {children}
        </main>
        <footer role="contentinfo" className="bg-gray-900 text-gray-300 p-6 text-center mt-12">
          <p>&copy; {new Date().getFullYear()} Southern Creative Concepts. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
