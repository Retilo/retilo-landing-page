import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { QrMenuClient } from "./_client"

export const metadata: Metadata = {
  title: "Free QR Code Menu Generator for Restaurants",
  description:
    "Generate a free QR code for your restaurant menu in seconds. Paste your menu URL, preview the QR, and download it to print on your tables.",
  alternates: { canonical: "/tools/qr-menu-generator" },
  openGraph: {
    title: "Free QR Menu Generator — Retilo",
    description:
      "Create a print-ready QR code for your restaurant menu instantly. No signup required.",
  },
}

export default function QrMenuPage() {
  return (
    <ToolPage
      title="QR Code Menu Generator"
      description="Paste your menu URL, preview the QR code, and download it to print on your table cards or receipts — for free."
      badge="Free Tool"
    >
      <QrMenuClient />
    </ToolPage>
  )
}
