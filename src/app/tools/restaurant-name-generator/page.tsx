import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { NameGeneratorClient } from "./_client"

export const metadata: Metadata = {
  title: "Restaurant Name Generator — 12 Free Name Ideas",
  description:
    "Generate creative restaurant name ideas based on cuisine type and vibe. Get 12 unique name suggestions instantly — Indian, Chinese, Italian, café, fine dining, and more.",
  alternates: { canonical: "/tools/restaurant-name-generator" },
  openGraph: {
    title: "Restaurant Name Generator — Retilo",
    description:
      "Get 12 creative restaurant name ideas for any cuisine and vibe. Free, instant, no signup.",
  },
}

export default function NameGeneratorPage() {
  return (
    <ToolPage
      title="Restaurant Name Generator"
      description="Pick your cuisine and vibe to get 12 creative name ideas. Add a keyword or city to personalise. Hit generate as many times as you like."
      badge="Free Tool"
    >
      <NameGeneratorClient />
    </ToolPage>
  )
}
