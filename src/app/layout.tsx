import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SarvaHQ — AI-Powered Software for Enterprise",
  description:
    "We build custom autonomous AI software and intelligent workflows tailored to your business. Team from Google DeepMind, Stanford, MIT. Backed by SilverTech Ventures.",
  keywords: [
    "AI agency",
    "autonomous AI",
    "custom software",
    "enterprise AI",
    "AI agents",
    "AI workflows",
  ],
  openGraph: {
    title: "SarvaHQ — AI-Powered Software for Enterprise",
    description:
      "Custom autonomous AI software and intelligent workflows for businesses.",
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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
