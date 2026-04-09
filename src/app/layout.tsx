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
  title: "SarvaHQ — Generative Engine Optimization for Brands",
  description:
    "Make AI search find your brand first. SarvaHQ optimizes your content for ChatGPT, Perplexity, Gemini, and every generative search engine. Team from Google DeepMind, Stanford, MIT.",
  keywords: [
    "generative engine optimization",
    "GEO",
    "LLM SEO",
    "AI search optimization",
    "AI visibility",
    "generative search",
    "brand visibility AI",
    "methodology",
    "query clustering",
    "AI visibility measurement",
    "domain-specific critic model",
    "continuous learning LLM SEO",
  ],
  openGraph: {
    title: "SarvaHQ — Generative Engine Optimization for Brands",
    description:
      "Make AI search find your brand first. GEO for brands that want to own AI search results.",
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
