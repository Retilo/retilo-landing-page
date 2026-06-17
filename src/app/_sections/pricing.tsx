import { Check } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/month",
    description: "For businesses just getting serious about customer communication.",
    highlight: false,
    cta: "Start free trial",
    features: [
      "WhatsApp inbox (1 user)",
      "AI review replies — Google & JustDial",
      "Automated review request messages",
      "Website chat widget",
      "500 WhatsApp messages / month",
      "Mobile app (iOS & Android)",
    ],
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/month",
    description: "For businesses ready to automate the full customer journey.",
    highlight: true,
    cta: "Start free trial",
    features: [
      "Everything in Starter",
      "AI phone receptionist (Hindi + English)",
      "Appointment & table bookings",
      "UPI payment links via WhatsApp",
      "WhatsApp campaigns (3,000/month)",
      "5 users",
      "Integrations — Swiggy, Zomato, Practo",
      "Demand forecasting",
    ],
  },
  {
    name: "Scale",
    price: "₹12,999",
    period: "/month",
    description: "For multi-outlet businesses that need enterprise-grade muscle.",
    highlight: false,
    cta: "Talk to us",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "AI lead qualification & scoring",
      "WhatsApp campaigns — unlimited",
      "Location intelligence & competitor map",
      "Multi-branch dashboard",
      "API access",
      "Dedicated onboarding & support",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(262_88%_66%/0.06),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            Less than one missed customer a day.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to
            start. Early-access businesses get 3 months free.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={cn(
                  "glass-card flex h-full flex-col p-8",
                  tier.highlight &&
                    "border-primary/50 bg-primary/5 ring-1 ring-primary/30"
                )}
              >
                {tier.highlight && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.name === "Scale" ? `mailto:${siteConfig.inquiryEmail}` : siteConfig.appUrl}
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:brightness-110 glow-purple"
                      : "border border-border hover:border-foreground/25 hover:bg-secondary"
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            All prices + GST · Annual billing saves 20% · Custom pricing for
            hospital chains and retail franchises
          </p>
        </Reveal>
      </div>
    </section>
  )
}
