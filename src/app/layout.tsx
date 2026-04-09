import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SarvaHQ — Generative Engine Optimization for E-Commerce",
  description:
    "We make LLMs find your products first. SarvaHQ optimizes your e-commerce content for ChatGPT, Perplexity, Google AI Overviews, and every generative search engine. Team from Google DeepMind, Stanford, MIT.",
  keywords: [
    "generative engine optimization",
    "GEO",
    "LLM SEO",
    "AI search optimization",
    "e-commerce AI",
    "generative search",
    "AI visibility",
    "methodology",
    "query clustering",
    "AI visibility measurement",
    "domain-specific critic model",
    "continuous learning LLM SEO",
  ],
  openGraph: {
    title: "SarvaHQ — Generative Engine Optimization for E-Commerce",
    description:
      "Make AI search find your products first. GEO for e-commerce brands.",
    url: "https://sarvahq.com",
    siteName: "SarvaHQ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
