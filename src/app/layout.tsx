import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import GrainOverlay from "@/components/ui/GrainOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const giaza = localFont({
  src: "./fonts/Giaza.otf",
  variable: "--font-giaza",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almego | Design Beyond Gravity",
  description: "Premium design studio specializing in monochromatic tech-minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${giaza.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <GrainOverlay />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
