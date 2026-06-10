import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { LegalPage } from "@/components/site/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.siteName} collects, uses, and protects your data — including Google user data accessed via Google APIs.`,
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 10, 2026">
      <p>
        This Privacy Policy explains how <strong>Retilo</strong> (&quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;) collects, uses, stores and protects
        information when you use our website ({siteConfig.url}), our web
        dashboard, the Retilo Business app and the Retilo consumer app
        (together, the &quot;Services&quot;). By using the Services you agree
        to this policy.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Account details</strong> — name, email address and password
          (or Google sign-in) when you register a merchant account.
        </li>
        <li>
          <strong>Business details</strong> — business name, category, address,
          location coordinates, opening hours, services/offerings, menus and
          pricing you add to your profile.
        </li>
        <li>
          <strong>Customer records you manage</strong> — names, phone numbers
          and notes of your customers that you store in Retilo (you are
          responsible for having the right to store them).
        </li>
        <li>
          <strong>Booking details</strong> — name, phone number and an optional
          note when a consumer books an appointment with a business on Retilo.
        </li>
      </ul>

      <h3>Information from connected services (with your consent)</h3>
      <ul>
        <li>
          <strong>Google Business Profile data</strong> — when you connect your
          Google account, we access your business locations, reviews,
          performance metrics and posts so we can display analytics and
          publish replies/posts on your behalf.
        </li>
        <li>
          <strong>Integration data</strong> — order, payment and appointment
          events from systems you explicitly connect (e.g. POS, delivery
          platforms, payment gateways).
        </li>
        <li>
          <strong>Call data</strong> — if you enable the AI phone receptionist,
          call recordings, transcripts and summaries of calls answered for
          your business.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          Device and usage data (IP address, browser/app version, pages
          visited) used for security, debugging and analytics.
        </li>
        <li>
          Approximate or precise location in the consumer app — only with your
          permission, to show stores near you.
        </li>
      </ul>

      <h2>2. Google user data — Limited Use disclosure</h2>
      <p>
        Retilo&apos;s use and transfer of information received from Google APIs
        adheres to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Specifically:
      </p>
      <ul>
        <li>
          We only use Google Business Profile data to provide the features you
          see in Retilo: review management and replies, analytics dashboards,
          posts, and location settings.
        </li>
        <li>
          We do <strong>not</strong> sell Google user data, use it for
          advertising, or transfer it to third parties except as needed to
          provide these features or as required by law.
        </li>
        <li>
          Humans do not read this data except with your explicit consent, for
          security purposes, to comply with law, or in aggregated/anonymised
          form.
        </li>
        <li>
          You can disconnect your Google account at any time from the
          dashboard, which revokes our access. You can also revoke access from
          your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noreferrer"
          >
            Google Account permissions page
          </a>
          .
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide, maintain and improve the Services.</li>
        <li>
          To generate analytics, growth reports, demand forecasts and
          AI-assisted suggestions for your business.
        </li>
        <li>
          To answer calls, take bookings and reply to reviews on your behalf —
          only where you have enabled those features.
        </li>
        <li>
          To list your business in the Retilo discovery feed if you choose to
          be listed.
        </li>
        <li>To communicate with you about the Services and support requests.</li>
        <li>To detect abuse, secure the platform and comply with law.</li>
      </ul>

      <h2>4. What we do not do</h2>
      <ul>
        <li>We do not sell your personal data or your customers&apos; data.</li>
        <li>We do not use your private business data to advertise to others.</li>
        <li>
          We do not share data between businesses except in aggregated,
          anonymised form (for example, neighbourhood-level demand signals).
        </li>
      </ul>

      <h2>5. Sharing</h2>
      <p>We share data only with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who process data on our behalf
          (cloud hosting, AI model providers, telephony/voice infrastructure,
          analytics) under contractual confidentiality.
        </li>
        <li>
          <strong>Other users, as designed</strong> — e.g. your public store
          profile, offerings and hours are visible to consumers; a booking
          customer&apos;s name/phone is visible to the business they booked.
        </li>
        <li>
          <strong>Authorities</strong> when required by applicable law.
        </li>
      </ul>

      <h2>6. Data retention &amp; deletion</h2>
      <p>
        We retain data while your account is active. You may request deletion
        of your account and associated data at any time by emailing{" "}
        <a href={`mailto:${siteConfig.inquiryEmail}`}>
          {siteConfig.inquiryEmail}
        </a>
        . We delete or anonymise data within 30 days of a verified request,
        except where retention is legally required. Disconnecting an
        integration stops new data collection from that source immediately.
      </p>

      <h2>7. Security</h2>
      <p>
        Data is encrypted in transit (HTTPS/TLS) and at rest. Access tokens
        for connected services are stored encrypted, scoped to the minimum
        permissions needed, and never exposed to your browser or other users.
      </p>

      <h2>8. Children</h2>
      <p>
        The Services are intended for users aged 18 or older. We do not
        knowingly collect data from children.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy and will post the new version here with an
        updated date. Material changes will be notified in-app or by email.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions or requests:{" "}
        <a href={`mailto:${siteConfig.inquiryEmail}`}>
          {siteConfig.inquiryEmail}
        </a>{" "}
        · {siteConfig.address}
      </p>
    </LegalPage>
  )
}
