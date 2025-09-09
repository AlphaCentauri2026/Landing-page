import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Vortex } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamilton Web Design - Professional Website Templates",
  description: "Ready-to-use website templates for landing pages, dashboards, ecommerce, and more. Launch faster with fully prepped templates for developers and businesses.",
  keywords: "website templates, web design, landing pages, dashboards, ecommerce, templates library",
  authors: [{ name: "Hamilton Web Design" }],
  openGraph: {
    title: "Hamilton Web Design - Professional Website Templates",
    description: "Ready-to-use website templates for landing pages, dashboards, ecommerce, and more.",
    type: "website",
  },
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
        <Vortex
          className="min-h-screen"
          particleCount={1000}
          baseHue={220}
          rangeHue={120}
          baseSpeed={0.8}
          rangeSpeed={1.2}
          baseRadius={1.0}
          rangeRadius={2.5}
          backgroundColor="transparent"
        >
          {children}
        </Vortex>
      </body>
    </html>
  );
}
