import type { Metadata } from "next";
import { Geist, Geist_Mono, La_Belle_Aurore } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signatureFont = La_Belle_Aurore({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Md. Sakib Hasan | AI Engineer Portfolio",
  description:
    "Futuristic, AI-driven portfolio of Md. Sakib Hasan – AI Engineer and Creative Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signatureFont.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Background glows */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl" />
            <div className="absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950" />
          </div>

          <Navbar />

          <main className="pt-24 pb-16">
            <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 md:px-8 lg:px-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
