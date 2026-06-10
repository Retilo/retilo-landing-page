import { siteConfig } from "@/config/site"

import { Apps } from "./_sections/apps"
import { CTA } from "./_sections/cta"
import { FAQ } from "./_sections/faq"
import { Hero } from "./_sections/hero"
import { Platform } from "./_sections/platform"
import { Problem } from "./_sections/problem"
import { Vision } from "./_sections/vision"

// Structured data so search engines AND AI engines (ChatGPT, Claude,
// Perplexity, Google AI Overviews) can cite Retilo accurately.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.siteName,
      url: siteConfig.url,
      email: siteConfig.inquiryEmail,
      description: siteConfig.siteDescription,
      sameAs: [
        siteConfig.twitterUrl,
        siteConfig.instagramUrl,
        siteConfig.linkedinUrl,
      ].filter(Boolean),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: siteConfig.siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS, Web",
      url: siteConfig.url,
      description: siteConfig.siteDescription,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Free early access with a free AI business growth report",
      },
      publisher: { "@id": `${siteConfig.url}/#organization` },
      featureList: [
        "Google review management with AI replies",
        "AI phone receptionist (Hindi & English)",
        "Appointment & table bookings",
        "Local store discovery app",
        "Demand forecasting from weather, festivals and events",
        "Location intelligence and competitor mapping",
        "POS, delivery and payments integrations",
      ],
    },
  ],
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Platform />
      <Apps />
      <Vision />
      <FAQ />
      <CTA />
    </>
  )
}
