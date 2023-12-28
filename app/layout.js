import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";
import MainMenu from "@/components/mainMenu/mainMenu";

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
      <body className="tw-bg-background tw-text-foreground font-inter tw-max-w-100vw tw-overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
          enableSystem
          disableTransitionOnChange
          value={{ light: "tw-light", dark: "tw-dark" }}
        >
          <main>{children}</main>
          <MainMenu />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
