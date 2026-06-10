import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { LegalPage } from "@/components/site/legal-page"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `${siteConfig.siteName}'s refund and cancellation policy for subscriptions and bookings.`,
  alternates: { canonical: "/refund" },
}

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="June 10, 2026">
      <p>
        This policy covers two things: (a) subscriptions that businesses pay
        Retilo, and (b) appointments/bookings made between consumers and
        businesses through Retilo.
      </p>

      <h2>1. Retilo subscriptions (for businesses)</h2>
      <ul>
        <li>
          <strong>Early access:</strong> while Retilo is in early access, core
          features are free — there is nothing to refund.
        </li>
        <li>
          <strong>Paid plans (when launched):</strong> you can cancel any time
          from the dashboard; your plan stays active until the end of the
          current billing period and is not renewed after that.
        </li>
        <li>
          <strong>7-day money-back guarantee:</strong> if you&apos;re on your
          first paid billing cycle and Retilo isn&apos;t right for you, email
          us within 7 days of payment for a full refund.
        </li>
        <li>
          <strong>Duplicate or failed charges:</strong> verified duplicate or
          erroneous charges are refunded in full to the original payment
          method within 5–7 business days.
        </li>
        <li>
          Refunds are not provided for partial billing periods after the
          7-day window, or for accounts terminated for violating our{" "}
          <a href="/terms">Terms &amp; Conditions</a>.
        </li>
      </ul>

      <h2>2. Appointments &amp; bookings (for consumers)</h2>
      <ul>
        <li>
          Booking through Retilo is free — Retilo does not charge consumers
          for making an appointment.
        </li>
        <li>
          Any advance, deposit or cancellation charge is set by the individual
          business and shown before you confirm. That amount is a matter
          between you and the business.
        </li>
        <li>
          To cancel or reschedule, use the app or contact the business
          directly as early as possible. Repeated no-shows may limit your
          ability to book.
        </li>
        <li>
          If you believe a business charged you incorrectly through Retilo,
          contact us and we&apos;ll help mediate:{" "}
          <a href={`mailto:${siteConfig.inquiryEmail}`}>
            {siteConfig.inquiryEmail}
          </a>
          .
        </li>
      </ul>

      <h2>3. How to request a refund</h2>
      <p>
        Email{" "}
        <a href={`mailto:${siteConfig.inquiryEmail}`}>
          {siteConfig.inquiryEmail}
        </a>{" "}
        from your registered email with your account details and the payment
        reference. We respond within 2 business days, and approved refunds are
        processed to the original payment method within 5–7 business days
        (bank timelines may vary).
      </p>

      <h2>4. Changes</h2>
      <p>
        We may update this policy as paid plans evolve; the latest version
        will always live at{" "}
        <a href={siteConfig.refundUrl}>{siteConfig.refundUrl}</a>.
      </p>
    </LegalPage>
  )
}
