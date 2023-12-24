import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Charles Russell",
  description: "Portfolio of Charles Russell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-inter">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
