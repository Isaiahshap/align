import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Align | Executive Coaching & Leadership Experiences",
  description: "Bespoke 1:1 coaching, curated events, and corporate immersions to align success with fulfillment for entrepreneurs, investors & high-performing professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${raleway.variable} antialiased bg-base-black text-off-white`}>
        {children}
      </body>
    </html>
  );
}