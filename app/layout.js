import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";

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
      <body className="tw-bg-background tw-text-foreground font-inter">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["light", "dark"]}
          enableSystem
          disableTransitionOnChange
          value={{ light: "tw-light", dark: "tw-dark" }}
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
