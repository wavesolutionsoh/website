import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wave Solutions LLC | Professional Answering & Virtual Receptionist Services",
  description:
    "A Next.js splash page boiler for Wave Solutions LLC, built for conference lead capture and future simple-service website expansion.",
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
