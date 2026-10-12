import type { Metadata } from "next"
import Link from "next/link"
import {
  IconArrowRight,
  IconCalculator,
  IconChefHat,
  IconCurrencyRupee,
  IconMessageStar,
  IconQrcode,
  IconPizza,
} from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Free Restaurant Tools — Calculators & Generators",
  description:
    "Free tools for restaurant owners: tip calculator, food cost calculator, GST calculator, QR menu generator, restaurant name generator, and review reply generator.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Restaurant Tools — Retilo",
    description:
      "6 free tools every restaurant owner needs: tip, food cost, GST, QR menu, name ideas, and review replies.",
  },
}

const tools = [
  {
    href: "/tools/tip-calculator",
    Icon: IconCalculator,
    color: "bg-blue-500/10 text-blue-600",
    title: "Tip Calculator",
    description:
      "Split the bill and calculate tips instantly. Works for any party size.",
  },
  {
    href: "/tools/food-cost-calculator",
    Icon: IconChefHat,
    color: "bg-orange-500/10 text-orange-600",
    title: "Food Cost Calculator",
    description:
      "Track ingredient costs, calculate food cost %, and set the right selling price for every dish.",
  },
  {
    href: "/tools/gst-calculator",
    Icon: IconCurrencyRupee,
    color: "bg-green-500/10 text-green-600",
    title: "Restaurant GST Calculator",
    description:
      "Add or extract GST for 5% (non-AC) or 18% (AC/fine dining). Instant CGST + SGST breakdown.",
  },
  {
    href: "/tools/qr-menu-generator",
    Icon: IconQrcode,
    color: "bg-purple-500/10 text-purple-600",
    title: "QR Menu Generator",
    description:
      "Generate a branded QR code for your menu in seconds. Download and print for free.",
  },
  {
    href: "/tools/restaurant-name-generator",
    Icon: IconPizza,
    color: "bg-pink-500/10 text-pink-600",
    title: "Restaurant Name Generator",
    description:
      "Get 12 creative name ideas tailored to your cuisine and vibe. Free, instant, no signup.",
  },
  {
    href: "/tools/review-reply-generator",
    Icon: IconMessageStar,
    color: "bg-yellow-500/10 text-yellow-600",
    title: "Review Reply Generator",
    description:
      "Generate professional responses to Google and Zomato reviews for any star rating.",
  },
]

export default function ToolsPage() {
  return (
    <section className="relative pb-24 pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.10),transparent_70%)]" />
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          Free Tools
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Free tools for restaurant owners
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          No signup. No paywall. Just open, use, and get back to running your
          restaurant.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ href, Icon, color, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-primary">
                Open tool
                <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          More tools coming soon.{" "}
          <Link href="/" className="text-primary hover:underline">
            Sign up for Retilo
          </Link>{" "}
          to get everything in one dashboard.
        </p>
      </div>
    </section>
  )
}
