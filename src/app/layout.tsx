import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

//Improve this metadata to be more descriptive and relevant
export const metadata: Metadata = {
  title: "Prashmin Gurung - Portfolio",
  keywords: [
    "Prashmin Gurung",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],

  description:
    "Prashmin Gurung's portfolio showcasing software engineering projects.",

  creator: "Prashmin Gurung",
  openGraph: {
    title: "Prashmin Gurung - Portfolio",
    description:
      "Prashmin Gurung's portfolio showcasing web development and software engineering projects.",

    siteName: "Prashmin Gurung",
    images: [
      {
        url: "https://prashmingurung.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prashmin Gurung - Portfolio",
      },
    ],
    locale: "en_US",
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
      <body className={`${inter.className} antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
