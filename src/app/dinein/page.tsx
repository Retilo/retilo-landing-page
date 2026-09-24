import type { Metadata } from "next"

import { DineinPageClient } from "./dinein-page-client"

export const metadata: Metadata = {
  title: "Retilo — Table booking page for restaurants, powered by Swiggy Dineout",
  description:
    "Give your restaurant a beautiful, brandable booking page. Guests book a table in four taps — no typing, no calls. Backed by Swiggy Dineout. Join the waitlist.",
  openGraph: {
    title: "Tables booked in four taps — Retilo",
    description:
      "Your brand. Your booking page. Powered by Swiggy Dineout. Try the live demo and join the waitlist.",
  },
}

export default function DineinPage() {
  return <DineinPageClient />
}
