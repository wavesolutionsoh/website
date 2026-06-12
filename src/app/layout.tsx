import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wave-solutions.co"),
  title: "WAVE Solutions LLC | Professional Answering & Virtual Receptionist Services",
  description:
    "Professional answering, virtual receptionist, and communication support services for responsive service-based businesses.",
  openGraph: {
    title: "WAVE Solutions LLC",
    description: "Professional answering and virtual receptionist services for service-based businesses.",
    type: "website",
    locale: "en_US",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.name,
  url: "https://wave-solutions.co",
  email: siteConfig.company.email,
  telephone: siteConfig.company.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 5041",
    addressLocality: "Willowick",
    addressRegion: "OH",
    postalCode: "44095",
    addressCountry: "US",
  },
  description:
    "Professional answering, virtual receptionist, and communication support services for responsive service-based businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
