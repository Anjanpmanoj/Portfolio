import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/common/theme-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: "../assets/fonts/Inter-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.authorName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.authorName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  // Analytics is optional: only loads when NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID is set.
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={[
            "light",
            "dark",
            "retro",
            "cyberpunk",
            "paper",
            "aurora",
            "synthwave",
          ]}
        >
          {children}
        </ThemeProvider>
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
