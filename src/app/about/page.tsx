import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { LegalPage } from "@/components/site/legal-page"

export const metadata: Metadata = {
  title: "About us",
  description: `Why ${siteConfig.siteName} exists: giving every local business the intelligence stack only enterprise retail has today.`,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <LegalPage title="About Retilo">
      <p>
        Walk down any street in India and you&apos;ll pass a dozen businesses
        run on pure instinct — a clinic guessing how many patients tomorrow
        brings, a restaurant over-prepping before a rainy night, a salon whose
        phone rings unanswered while both chairs are full.
      </p>
      <p>
        Across town, the big chains play a different game. They have demand
        scientists, location analysts, call centres and revenue managers. The
        gap between them and the corner store was never talent or hustle — it
        was <strong>intelligence infrastructure</strong>.
      </p>
      <p>
        Retilo exists to close that gap. We give clinics, salons, restaurants,
        retail stores and service businesses the same class of brain:
        reputation on autopilot, an AI receptionist that never misses a call,
        bookings that fill the day, a discovery network that brings the
        neighbourhood in, and demand forecasts tuned to the exact street — its
        weather, its festivals, even its cricket nights.
      </p>
      <p>
        And here&apos;s the part nobody else is building: every business that
        joins Retilo makes the signal sharper for its whole neighbourhood.
        We&apos;re not shipping another management tool — we&apos;re building
        the <strong>intelligence grid for local commerce</strong>, one street
        at a time.
      </p>
      <p>
        We&apos;re an early-stage team building in India, for Indian
        businesses first. If that mission speaks to you — as an owner, a
        partner, or a builder — write to us:{" "}
        <a href={`mailto:${siteConfig.inquiryEmail}`}>
          {siteConfig.inquiryEmail}
        </a>
        .
      </p>
    </LegalPage>
  )
}
