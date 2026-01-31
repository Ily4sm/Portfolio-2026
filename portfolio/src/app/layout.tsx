import type { Metadata } from "next";
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
  title: "Ilyas MARDHI",
  description:
    "Portfolio de Ilyas MARDHI, élève ingénieur en génie informatique.",

  metadataBase: new URL("https://ilyas-mardhi.vercel.app/"),

  openGraph: {
    title: "Ilyas MARDHI",
    description:
      "Portfolio de Ilyas MARDHI, élève ingénieur en génie informatique.",
    url: "https://ilyas-mardhi.vercel.app/",
    siteName: "Portfolio Ilyas MARDHI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Ilyas MARDHI",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
