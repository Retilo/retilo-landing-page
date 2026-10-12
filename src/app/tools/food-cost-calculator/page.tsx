import type { Metadata } from "next"

import { ToolPage } from "@/components/site/tool-page"

import { FoodCostClient } from "./_client"

export const metadata: Metadata = {
  title: "Food Cost Calculator for Restaurants — Free Tool",
  description:
    "Calculate your restaurant's food cost percentage and profit margin per dish. Add ingredients, set your selling price, and instantly see if you're priced right.",
  alternates: { canonical: "/tools/food-cost-calculator" },
  openGraph: {
    title: "Food Cost Calculator — Retilo",
    description:
      "Free tool to calculate food cost %, profit margin, and optimal selling price for any dish.",
  },
}

export default function FoodCostPage() {
  return (
    <ToolPage
      title="Food Cost Calculator"
      description="Add your ingredients, set the selling price, and see your food cost % and profit margin instantly. Industry benchmark: keep food cost below 35%."
      badge="Free Tool"
    >
      <FoodCostClient />
    </ToolPage>
  )
}
