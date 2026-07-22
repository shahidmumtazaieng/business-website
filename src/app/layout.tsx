import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FloatingButtons } from "@/components/floating-buttons";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maundy Clean — Premium Residential & Commercial Cleaning",
  description:
    "Maundy Clean delivers premium recurring home cleaning, deep cleans, commercial janitorial, and specialty services across 30 Scottish locations. PVG-checked crews. 4.9★ across 6,200+ reviews. Get a free quote in 60 seconds.",
  keywords: [
    "cleaning services",
    "house cleaning",
    "commercial cleaning",
    "office cleaning",
    "maid service",
    "move out cleaning",
    "deep clean",
    "janitorial services",
    "Maundy Clean",
  ],
  authors: [{ name: "Maundy Clean" }],
  openGraph: {
    title: "Maundy Clean — Premium Cleaning Services",
    description:
      "Premium residential & commercial cleaning across Scotland. 4.9★ across 6,200+ reviews. Same crews every visit. Free re-clean guarantee.",
    siteName: "Maundy Clean",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maundy Clean — Premium Cleaning Services",
    description: "Premium residential & commercial cleaning across 36 cities.",
  },
  verification: {
    google: "1SyKTO2CuIuaQRlY3soylsLWXijf7iWdt46IFmqOKOc",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
        {/* Global floating buttons — WhatsApp + AI chatbot (on every page) */}
        <FloatingButtons />
      </body>
    </html>
  );
}
