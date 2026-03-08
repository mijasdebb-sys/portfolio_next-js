import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mijael | Portfolio",
  description:
    "Practicante de ingeniería de sistemas. Desarrollador Full Stack con Next.js, Node.js, MySQL, PostgreSQL y Firebase.",
  keywords: [
    "Desarrollador Full Stack",
    "Next.js",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Portfolio Web",
    "Ingeniero de Software",
  ],
  authors: [{ name: "Mijadev" }],
  creator: "Mijadev",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mijadev.vercel.app",
    siteName: "Mijael | Portfolio",
    title: "Mijael | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en Next.js, Node.js, MySQL, PostgreSQL y Firebase. Construyendo aplicaciones web modernas y escalables.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mijadev - Portfolio Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mijael | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en Next.js, Node.js, MySQL, PostgreSQL y Firebase.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
