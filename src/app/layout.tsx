import "./globals.css"

import { Metadata } from "next"
import localFont from "next/font/local"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { PostHogProvider } from "@/components/posthog-provider"
import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "../fonts/Satoshi-Variable.ttf",
})

const brand = localFont({
  variable: "--font-brand",
  src: "../fonts/Array-Bold.woff2",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.siteName} — Enterprise-grade intelligence for every local business`,
    template: `%s · ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  keywords: [
    "local business AI",
    "retail intelligence",
    "demand forecasting",
    "Google reviews management",
    "AI phone receptionist",
    "appointment booking",
    "SMB growth",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} — Your 24/7 AI Employee. Built for India.`,
    description: siteConfig.siteDescription,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Retilo — Your 24/7 AI Employee. Built for India.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Retilo_",
    creator: "@Retilo_",
    title: "Retilo — Your 24/7 AI Employee. Built for India.",
    description: siteConfig.siteDescription,
    images: [`${siteConfig.url}/twitter-image`],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          satoshi.variable,
          brand.variable
        )}
      >
        <PostHogProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster theme="light" />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  )
}
