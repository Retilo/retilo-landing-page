import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { LegalPage } from "@/components/site/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern your use of ${siteConfig.siteName}'s website, apps and services.`,
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="June 10, 2026">
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
        Retilo website ({siteConfig.url}), web dashboard, the Retilo Business
        app and the Retilo consumer app (together, the &quot;Services&quot;),
        operated by <strong>Retilo</strong> (&quot;we&quot;, &quot;us&quot;).
        By creating an account or using the Services you agree to these Terms.
      </p>

      <h2>1. The Services</h2>
      <p>
        Retilo provides software for local businesses — including review
        management, analytics, an AI phone receptionist, bookings, store
        discovery, demand forecasting and integrations — and a consumer app
        for discovering and booking those businesses. Features may change as
        the product evolves, especially during early access.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You must be 18 or older and provide accurate information.</li>
        <li>
          You are responsible for safeguarding your credentials and for all
          activity under your account.
        </li>
        <li>
          Business accounts must be created by someone authorised to act for
          that business.
        </li>
      </ul>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>
          Don&apos;t misuse the Services — no unlawful content, spam,
          scraping, reverse engineering, or interfering with the platform.
        </li>
        <li>
          You may only store customer data you are legally entitled to hold,
          and you are responsible for honouring your own customers&apos;
          privacy rights.
        </li>
        <li>
          AI-generated content (review replies, call handling, suggestions) is
          produced on your behalf — you remain responsible for what is
          published or communicated for your business, and you can review,
          edit or disable automation at any time.
        </li>
      </ul>

      <h2>4. Connected services</h2>
      <p>
        When you connect third-party services (e.g. Google Business Profile,
        POS systems, delivery platforms, payment gateways), you authorise
        Retilo to access and process data from them as described in our{" "}
        <a href="/privacy">Privacy Policy</a>. Your use of those services
        remains subject to their own terms.
      </p>

      <h2>5. Bookings between consumers and businesses</h2>
      <p>
        Retilo facilitates appointments and bookings but is not a party to the
        transaction between a consumer and a business. The business is solely
        responsible for honouring bookings and delivering its services;
        consumers are responsible for showing up or cancelling in time. See
        our <a href="/refund">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>6. Fees</h2>
      <p>
        During early access, core features may be offered free of charge. When
        paid plans launch, pricing will be shown clearly before you commit and
        these Terms will apply to paid subscriptions together with the{" "}
        <a href="/refund">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The Services, including software, design and branding, are owned by
        Retilo. You retain ownership of the content and data you provide; you
        grant us a licence to host and process it solely to operate the
        Services.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Services are provided &quot;as is&quot;. Forecasts, scores,
        insights and AI outputs are estimates intended to inform — not
        guarantee — business outcomes. To the maximum extent permitted by
        law, we disclaim warranties of merchantability, fitness for a
        particular purpose and non-infringement.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Retilo will not be liable for
        indirect, incidental, special or consequential damages, or loss of
        profits, revenue or data. Our aggregate liability for any claim is
        limited to the amount you paid us in the 12 months before the claim
        (or ₹1,000 if you paid nothing).
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the Services and delete your account at any time.
        We may suspend or terminate accounts that violate these Terms. On
        termination, data is handled per the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Courts in Hyderabad,
        Telangana have exclusive jurisdiction.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${siteConfig.inquiryEmail}`}>
          {siteConfig.inquiryEmail}
        </a>
      </p>
    </LegalPage>
  )
}
