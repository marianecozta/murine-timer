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
  title: "MURINE ❤️",
  description: "Cronômetro da vida Murine! ❤️",
  icons: {
    icon: "❤️",
  },
  openGraph: {
    title: "MURINE ❤️",
    description: "Cronômetro da vida Murine! ❤️",
    url: "https://pomodorouniversitario.vercel.app",
    siteName: "MURINE ❤️",
    images: [
      {
        url: "❤️",
        width: 1200,
        height: 630,
      },
    ],
  },
  //
  twitter: {
    card: "summary_large_image",
    title: "MURINE ❤️",
    description: "Cronômetro da vida Murine! ❤️",
    images: ["❤️"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="❤️" />
        {/* Open Graph */}
        <meta property="og:title" content="MURINE ❤️" />
        <meta property="og:description" content="Cronômetro da vida Murine! ❤️" />
        <meta property="og:url" content="https://pomodorouniversitario.vercel.app" />
        <meta property="og:image" content="❤️" />
        <meta property="og:site_name" content="MURINE ❤️" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="MURINE ❤️" />
        <meta name="twitter:description" content="Cronômetro da vida Murine! ❤️" />
        <meta name="twitter:image" content="❤️" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
