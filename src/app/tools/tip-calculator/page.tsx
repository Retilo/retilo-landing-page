import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { TipCalculatorClient } from "./_client"

export const metadata: Metadata = {
  title: "Tip Calculator — Restaurant Bill Splitter",
  description:
    "Free restaurant tip calculator. Enter your bill, choose tip percentage, and split by number of people. Works for any party size in seconds.",
  alternates: { canonical: "/tools/tip-calculator" },
  openGraph: {
    title: "Free Tip Calculator — Retilo",
    description:
      "Calculate tip and split the bill instantly for any party size.",
  },
}

export default function TipCalculatorPage() {
  return (
    <ToolPage
      title="Restaurant Tip Calculator"
      description="Enter the bill, pick a tip %, and split by the number of people at the table."
      badge="Free Tool"
    >
      <TipCalculatorClient />
    </ToolPage>
  )
}
