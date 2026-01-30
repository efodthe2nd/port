import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidefod.com"),
  title: "David Efod — Design Engineer",
  description:
    "Design Engineer crafting interfaces that convert. Full-stack developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "David Efod",
    "Design Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "David Efod" }],
  creator: "David Efod",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidefod.com",
    siteName: "David Efod",
    title: "David Efod — Design Engineer",
    description:
      "Design Engineer crafting interfaces that convert. Full-stack developer specializing in React, Next.js, and TypeScript.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Efod — Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Efod — Design Engineer",
    description:
      "Design Engineer crafting interfaces that convert. Full-stack developer specializing in React, Next.js, and TypeScript.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
