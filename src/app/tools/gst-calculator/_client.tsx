"use client"

import { useState } from "react"

type Mode = "add" | "extract"
type Rate = 5 | 18

const RATE_INFO: Record<Rate, string> = {
  5: "Non-AC restaurants & takeaway / delivery",
  18: "AC restaurants, fine dining & outlets with liquor licence",
}

export function GstCalculatorClient() {
  const [mode, setMode] = useState<Mode>("add")
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState<Rate>(5)

  const amountNum = parseFloat(amount) || 0

  let base = 0
  let cgst = 0
  let sgst = 0
  let total = 0

  if (mode === "add") {
    base = amountNum
    cgst = (amountNum * rate) / 200
    sgst = cgst
    total = amountNum + cgst + sgst
  } else {
    total = amountNum
    base = amountNum / (1 + rate / 100)
    cgst = (total - base) / 2
    sgst = cgst
  }

  const hasResult = amountNum > 0

  return (
    <div className="space-y-4">
      {/* Mode toggle */}
      <div className="flex rounded-xl border border-border bg-muted/40 p-1">
        {(["add", "extract"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              mode === m
                ? "bg-white shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m === "add" ? "Add GST to amount" : "Extract GST from total"}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            {mode === "add" ? "Pre-tax Amount (₹)" : "Total Bill Amount (₹)"}
          </label>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₹
            </span>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full rounded-xl border border-input bg-background py-3 pl-8 pr-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            GST Rate
          </label>
          <div className="mt-2 space-y-2">
            {([5, 18] as Rate[]).map((r) => (
              <label
                key={r}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                  rate === r
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/40"
                }`}
              >
                <input
                  type="radio"
                  name="rate"
                  value={r}
                  checked={rate === r}
                  onChange={() => setRate(r)}
                  className="mt-0.5 accent-primary"
                />
                <div>
                  <span className="block text-sm font-semibold text-foreground">
                    {r}% GST
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {RATE_INFO[r]}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {hasResult && (
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Breakdown
          </p>
          <div className="space-y-3">
            <Row label="Base Amount" value={`₹${base.toFixed(2)}`} />
            <Row label={`CGST (${rate / 2}%)`} value={`₹${cgst.toFixed(2)}`} />
            <Row label={`SGST (${rate / 2}%)`} value={`₹${sgst.toFixed(2)}`} />
            <div className="border-t border-border pt-3">
              <div className="flex items-center justify-between rounded-xl bg-primary p-4 text-white">
                <span className="text-sm font-semibold">Total (with GST)</span>
                <span className="text-xl font-bold">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            GST rate as per CGST/SGST Notification No. 11/2017-Central Tax
            (Rate). Verify with your CA for specific business situations.
          </p>
        </div>
      )}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  )
}
