import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles/base.css";
import "./styles/navigation.css";
import "./styles/hero.css";
import "./styles/phone.css";
import "./styles/flow.css";
import "./styles/moments.css";
import "./styles/actions.css";
import "./styles/final.css";
import "./styles/legal.css";
import "./styles/responsive.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.livenowapp.net"),

  title: {
    default: "LiveNow",
    template: "%s | LiveNow",
  },

  description:
    "LiveNow helps you understand overthinking, reframe the thought, and take one small step back into the present.",

  applicationName: "LiveNow",

  icons: {
    icon: "/assets/LogoCircle.png",
    shortcut: "/assets/LogoCircle.png",
    apple: "/assets/LogoCircle.png",
  },

  keywords: [
    "LiveNow",
    "overthinking",
    "mental clarity",
    "self reflection",
    "AI reflection",
    "mindfulness",
    "iPhone app",
  ],

  authors: [
    {
      name: "LiveNow",
    },
  ],

  creator: "LiveNow",
  publisher: "LiveNow",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LiveNow",
    title: "LiveNow — Stop Overthinking. Start Living.",
    description:
      "Understand the thought, reframe it, and take one small step back into the present.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LiveNow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LiveNow — Stop Overthinking. Start Living.",
    description:
      "Understand the thought, reframe it, and take one small step back into the present.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
