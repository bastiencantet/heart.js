import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love from Bastien CANTET ❤️",
  description: "A simple heart animation to show my love",
  openGraph: {
    title: "Love from Bastien CANTET ❤️",
    description: "A simple heart animation to show my love",
    type: "website",
    locale: "en_US",
    url: "https://bastiencantet.com",
    images: [
      {
        url: "https:/heart.bastosbob.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Love from Bastien CANTET ❤️",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
