import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";
import MainMenu from "@/components/mainMenu/mainMenu";

export const metadata = {
  title: "Charles Russell",
  description: "Portfolio of Charles Russell",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tw-dark" style={{ colorScheme: "dark" }}>
      <body className="tw-bg-background tw-text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
          disableTransitionOnChange
          value={{ light: "tw-light", dark: "tw-dark" }}
        >
          <MainMenu />
          <main>{children}</main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
