import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Barlow_Semi_Condensed({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Testimonials grid section",
  description:
    "Frontend Mentor's 'Testimonials grid section' Challenge Developed Using Next.js",
  creator: "Lucas Baitz",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
