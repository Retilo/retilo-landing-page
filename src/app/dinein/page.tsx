import type { Metadata } from "next"

import { DineinAdClient } from "./dinein-ad-client"

// Conversion page for paid social (Instagram) traffic. Kept free of the main
// site's nav/sections so ad visitors see one story and one action: join the
// waitlist for a branded, tap-first table-booking page.
export const metadata: Metadata = {
  title: "Retilo — Your restaurant's booking page, powered by Swiggy Dineout",
  description:
    "A beautiful table-booking page in your restaurant's brand. Guests book in four taps — no typing, no calls. Backed by Swiggy Dineout. Join the waitlist.",
  openGraph: {
    title: "Tables booked in four taps — Retilo",
    description:
      "Your brand. Your booking page. Powered by Swiggy Dineout. Join the waitlist.",
  },
}

export default function DineinAdPage() {
  return <DineinAdClient />
}
