import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { ReviewReplyClient } from "./_client"

export const metadata: Metadata = {
  title: "Restaurant Review Reply Generator — Free AI Response Tool",
  description:
    "Generate professional responses to Google, Zomato, and Swiggy reviews. Handles 1-star to 5-star reviews with customizable tone — professional, warm, or apologetic.",
  alternates: { canonical: "/tools/review-reply-generator" },
  openGraph: {
    title: "Restaurant Review Reply Generator — Retilo",
    description:
      "Free tool: generate professional responses to restaurant reviews in one click. Any star rating.",
  },
}

export default function ReviewReplyPage() {
  return (
    <ToolPage
      title="Review Reply Generator"
      description="Paste a Google or Zomato review, pick your tone, and get a ready-to-send professional response — no login, no credit card."
      badge="Free Tool"
    >
      <ReviewReplyClient />
    </ToolPage>
  )
}
