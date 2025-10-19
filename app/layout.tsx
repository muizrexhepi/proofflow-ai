import { Inter, Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proofflow.ai"),
  title: {
    default: "ProofFlow.ai | Turn Customer Interviews into Case Studies",
    template: "%s | ProofFlow.ai",
  },
  description:
    "Upload a customer interview and get a polished case study with quotes and narrative in minutes. AI-powered, simple, and fast.",
  keywords: [
    "case study generator",
    "AI case studies",
    "customer testimonials",
    "case study automation",
    "video to case study",
    "customer success stories",
    "B2B marketing",
    "testimonial automation",
  ],
  authors: [{ name: "ProofFlow.ai" }],
  creator: "ProofFlow.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proofflow.ai",
    siteName: "ProofFlow.ai",
    title: "ProofFlow.ai | Turn Customer Interviews into Case Studies",
    description:
      "Upload a customer interview and get a polished case study with quotes and narrative in minutes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProofFlow.ai - AI-Powered Case Study Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofFlow.ai | Turn Customer Interviews into Case Studies",
    description:
      "Upload a customer interview and get a polished case study in minutes.",
    images: ["/og-image.png"],
    creator: "@muiz_rexhpepi",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
