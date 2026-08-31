import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/data/portifolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bruno Fukumori | Engenheiro de Software Sênior & Fullstack",
    template: "%s | Bruno Fukumori",
  },
  description:
    "Portfólio de Bruno Fukumori - Engenheiro de Software Sênior especializado no ecossistema TypeScript, Node.js, React, Next.js, React Native e arquiteturas escaláveis.",
  keywords: [
    "Bruno Fukumori",
    "Engenheiro de Software",
    "Engenheiro de Software Sênior",
    "Software Engineer",
    "Fullstack Developer",
    "Desenvolvedor Fullstack",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "NestJS",
    "Clean Architecture",
    "Microservices",
    "BFF",
    "São Paulo",
  ],
  authors: [{ name: "Bruno Fukumori", url: "https://github.com/bfukumori" }],
  creator: "Bruno Fukumori",
  publisher: "Bruno Fukumori",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Bruno",
    lastName: "Fukumori",
    username: "bfukumori",
    gender: "male",
    title: "Bruno Fukumori | Engenheiro de Software Sênior & Fullstack",
    description:
      "Portfólio de Bruno Fukumori - Engenheiro de Software Sênior especializado no ecossistema TypeScript, Node.js, React, Next.js, React Native e arquiteturas escaláveis.",
    url: "/",
    siteName: "Bruno Fukumori - Portfólio",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Fukumori | Engenheiro de Software Sênior & Fullstack",
    description:
      "Portfólio de Bruno Fukumori - Engenheiro de Software Sênior especializado no ecossistema TypeScript, Node.js, React, Next.js, React Native e arquiteturas escaláveis.",
    creator: "@bfukumori",
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
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} antialiased bg-zinc-950`}
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
