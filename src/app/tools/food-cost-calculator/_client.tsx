"use client"

import { useState } from "react"
import { IconPlus, IconTrash } from "@tabler/icons-react"

interface Ingredient {
  id: string
  name: string
  qty: string
  costPerUnit: string
  unit: string
}

const UNITS = ["g", "kg", "ml", "L", "pcs", "tbsp", "tsp", "cup"]

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

function StatusBadge({ pct }: { pct: number }) {
  if (pct <= 30)
    return (
      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
        Excellent (&le;30%)
      </span>
    )
  if (pct <= 35)
    return (
      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700">
        Acceptable (30–35%)
      </span>
    )
  return (
    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
      Too High (&gt;35%)
    </span>
  )
}

export function FoodCostClient() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: uid(), name: "", qty: "", costPerUnit: "", unit: "g" },
  ])
  const [sellingPrice, setSellingPrice] = useState("")

  function addRow() {
    setIngredients((prev) => [
      ...prev,
      { id: uid(), name: "", qty: "", costPerUnit: "", unit: "g" },
    ])
  }

  function removeRow(id: string) {
    setIngredients((prev) => prev.filter((r) => r.id !== id))
  }

  function updateRow(id: string, field: keyof Ingredient, value: string) {
    setIngredients((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    )
  }

  const totalCost = ingredients.reduce((sum, row) => {
    const qty = parseFloat(row.qty) || 0
    const cost = parseFloat(row.costPerUnit) || 0
    return sum + qty * cost
  }, 0)

  const spNum = parseFloat(sellingPrice) || 0
  const foodCostPct = spNum > 0 ? (totalCost / spNum) * 100 : 0
  const profitMargin = spNum > 0 ? ((spNum - totalCost) / spNum) * 100 : 0
  const profitAmount = spNum - totalCost

  const suggestedPrice30 = totalCost / 0.3
  const suggestedPrice35 = totalCost / 0.35

  return (
    <div className="space-y-4">
      {/* Ingredients table */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold text-foreground">
          Ingredients
        </h2>

        <div className="space-y-3">
          {/* Header row */}
          <div className="hidden grid-cols-[1fr_80px_80px_70px_32px] gap-2 text-xs font-medium text-muted-foreground sm:grid">
            <span>Ingredient</span>
            <span>Qty</span>
            <span>Cost/unit (₹)</span>
            <span>Unit</span>
            <span />
          </div>

          {ingredients.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-[1fr_80px_80px_70px_32px] gap-2"
            >
              <input
                value={row.name}
                onChange={(e) => updateRow(row.id, "name", e.target.value)}
                placeholder="e.g. Tomatoes"
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="number"
                min="0"
                value={row.qty}
                onChange={(e) => updateRow(row.id, "qty", e.target.value)}
                placeholder="100"
                className="rounded-lg border border-input bg-background px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="number"
                min="0"
                value={row.costPerUnit}
                onChange={(e) =>
                  updateRow(row.id, "costPerUnit", e.target.value)
                }
                placeholder="0.50"
                className="rounded-lg border border-input bg-background px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select
                value={row.unit}
                onChange={(e) => updateRow(row.id, "unit", e.target.value)}
                className="rounded-lg border border-input bg-background px-1 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {UNITS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeRow(row.id)}
                disabled={ingredients.length === 1}
                className="flex h-9 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:opacity-30"
              >
                <IconTrash className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addRow}
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <IconPlus className="h-4 w-4" />
          Add ingredient
        </button>

        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Total ingredient cost
            </span>
            <span className="font-semibold text-foreground">
              ₹{totalCost.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Selling price */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <label className="block text-sm font-medium text-foreground">
          Menu / Selling Price (₹)
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
            ₹
          </span>
          <input
            type="number"
            min="0"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-xl border border-input bg-background py-3 pl-8 pr-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {totalCost > 0 && spNum === 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Suggested price range:{" "}
            <span className="font-medium text-foreground">
              ₹{suggestedPrice35.toFixed(0)} – ₹{suggestedPrice30.toFixed(0)}
            </span>{" "}
            (based on 30–35% food cost)
          </p>
        )}
      </div>

      {/* Results */}
      {spNum > 0 && totalCost > 0 && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">
              Results
            </span>
            <StatusBadge pct={foodCostPct} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Stat
              label="Food Cost %"
              value={`${foodCostPct.toFixed(1)}%`}
              sub="of selling price"
            />
            <Stat
              label="Profit Margin"
              value={`${profitMargin.toFixed(1)}%`}
              sub="of selling price"
            />
            <Stat
              label="Profit per Dish"
              value={`₹${profitAmount.toFixed(2)}`}
              sub="after ingredients"
            />
            <Stat
              label="Ingredient Cost"
              value={`₹${totalCost.toFixed(2)}`}
              sub="total per serving"
            />
          </div>

          {foodCostPct > 35 && (
            <div className="rounded-xl bg-red-50 p-3 text-xs text-red-700">
              Your food cost is above 35%. Consider raising the selling price to
              at least{" "}
              <strong>₹{suggestedPrice35.toFixed(0)}</strong>.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="rounded-xl bg-muted/50 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}
