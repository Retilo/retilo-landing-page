import { siteConfig } from "@/config/site"

import { Apps } from "./_sections/apps"
import { CTA } from "./_sections/cta"
import { FAQ } from "./_sections/faq"
import { Hero } from "./_sections/hero"
import { Industries } from "./_sections/industries"
import { Platform } from "./_sections/platform"
import { Problem } from "./_sections/problem"
import { Stats } from "./_sections/stats"
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
        "Unified WhatsApp inbox for customer messages",
        "Automated Google review requests via WhatsApp",
        "AI review replies across Google, JustDial, and IndiaMART",
        "AI phone receptionist in Hindi and English",
        "Appointment and table bookings",
        "UPI payment collection via WhatsApp",
        "Website chat widget with WhatsApp handoff",
        "WhatsApp marketing campaigns",
        "Local business discovery app",
        "POS, delivery, and payments integrations",
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
      <Stats />
      <Problem />
      <Platform />
      <Industries />
      <Apps />
      <Vision />
      <FAQ />
      <CTA />
    </>
  )
}
