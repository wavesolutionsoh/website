import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wave-solutions.co"),
  title: "Wave Solutions LLC | Professional Answering & Virtual Receptionist Services",
  description:
    "Professional answering, virtual receptionist, and communication support services for responsive service-based businesses.",
  openGraph: {
    title: "Wave Solutions LLC",
    description: "Professional answering and virtual receptionist services for service-based businesses.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
