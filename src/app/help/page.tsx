import { Metadata } from "next"
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { LegalPage } from "@/components/site/legal-page"

export const metadata: Metadata = {
  title: "Help & Support",
  description: `Get help with ${siteConfig.siteName} — contact support, report an issue, or manage your account and data.`,
  alternates: { canonical: "/help" },
}

const channels = [
  {
    Icon: IconMail,
    label: "Email support",
    value: siteConfig.inquiryEmail,
    href: `mailto:${siteConfig.inquiryEmail}`,
    note: "Best for account, billing, data and integration questions. We reply within 1–2 business days.",
  },
  {
    Icon: IconPhone,
    label: "Helpline",
    value: siteConfig.helplineNumber,
    href: `tel:${siteConfig.helplineNumber.replace(/\s/g, "")}`,
    note: "For urgent issues with live features like the AI receptionist or bookings.",
  },
  {
    Icon: IconMapPin,
    label: "Registered location",
    value: siteConfig.address,
    href: undefined,
    note: "Retilo is built in India, for Indian businesses first.",
  },
]

export default function HelpPage() {
  return (
    <LegalPage title="Help & Support">
      <p>
        Stuck on something? We&apos;re a small team and we read everything —
        owners&apos; messages shape what we build next.
      </p>

      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map(({ Icon, label, value, href, note }) => (
          <div key={label} className="glass-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{label}</h3>
            {href ? (
              <a href={href} className="mt-1 block break-all text-primary">
                {value}
              </a>
            ) : (
              <p className="mt-1 text-foreground">{value}</p>
            )}
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {note}
            </p>
          </div>
        ))}
      </div>

      <h2>Common requests</h2>
      <ul>
        <li>
          <strong>Delete my account &amp; data</strong> — email us from your
          registered address with the subject &quot;Delete my account&quot;.
          Handled within 30 days per our <a href="/privacy">Privacy Policy</a>.
        </li>
        <li>
          <strong>Disconnect Google / an integration</strong> — possible
          instantly from the dashboard settings, or email us and we&apos;ll do
          it for you.
        </li>
        <li>
          <strong>Report wrong store info in the consumer app</strong> — tell
          us the store name and what&apos;s wrong; we verify with the owner.
        </li>
        <li>
          <strong>Billing &amp; refunds</strong> — see the{" "}
          <a href="/refund">Refund &amp; Cancellation Policy</a>.
        </li>
        <li>
          <strong>Partnerships / press</strong> — same inbox, subject
          &quot;Partnership&quot;.
        </li>
      </ul>
    </LegalPage>
  )
}
