import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import {
  defaultDescription,
  defaultOgImage,
  defaultTitle,
  professionalServiceSchema,
  siteUrl,
  websiteSchema,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | WAVE Solutions LLC`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "answering service",
    "virtual receptionist",
    "communication support",
    "customer follow-up",
    "service business answering support",
  ],
  category: "business services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "WAVE Solutions LLC",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  applicationName: "WAVE Solutions LLC",
  creator: "WAVE Solutions LLC",
  publisher: "WAVE Solutions LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <JsonLd data={[professionalServiceSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
