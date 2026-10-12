import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { GstCalculatorClient } from "./_client"

export const metadata: Metadata = {
  title: "Restaurant GST Calculator India — 5% & 18% Rates",
  description:
    "Free restaurant GST calculator for India. Calculate CGST + SGST for 5% (non-AC restaurants) or 18% (AC restaurants & fine dining). Add or extract GST instantly.",
  alternates: { canonical: "/tools/gst-calculator" },
  openGraph: {
    title: "Restaurant GST Calculator — Retilo",
    description:
      "Add or extract GST instantly. 5% for non-AC, 18% for AC / fine dining. CGST + SGST breakdown.",
  },
}

export default function GstCalculatorPage() {
  return (
    <ToolPage
      title="Restaurant GST Calculator"
      description="Add or extract GST for restaurants in India. 5% applies to non-AC and takeaway orders. 18% applies to AC restaurants, fine dining, and outlets serving alcohol."
      badge="India — Free Tool"
    >
      <GstCalculatorClient />
    </ToolPage>
  )
}
