"use client"

import { useState } from "react"

const PRESET_TIPS = [5, 10, 15, 18, 20, 25]

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-5 text-center ${
        highlight ? "bg-primary text-white" : "border border-border bg-card"
      }`}
    >
      <p
        className={`text-xs font-medium ${
          highlight ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1 text-2xl font-bold ${
          highlight ? "text-white" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  )
}

export function TipCalculatorClient() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(10)
  const [people, setPeople] = useState(1)

  const billNum = parseFloat(bill) || 0
  const tip = (billNum * tipPercent) / 100
  const total = billNum + tip
  const perPerson = people > 0 ? total / people : 0

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
        {/* Bill input */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Bill Amount
          </label>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₹
            </span>
            <input
              type="number"
              min="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="0.00"
              className="w-full rounded-xl border border-input bg-background py-3 pl-8 pr-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Tip presets */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Tip — {tipPercent}%
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {PRESET_TIPS.map((pct) => (
              <button
                key={pct}
                onClick={() => setTipPercent(pct)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  tipPercent === pct
                    ? "bg-primary text-white"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={tipPercent}
            onChange={(e) => setTipPercent(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
          />
        </div>

        {/* Split */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Split between
          </label>
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lg transition-colors hover:bg-accent"
            >
              −
            </button>
            <span className="w-10 text-center text-lg font-bold">{people}</span>
            <button
              onClick={() => setPeople((p) => p + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lg transition-colors hover:bg-accent"
            >
              +
            </button>
            <span className="text-sm text-muted-foreground">
              {people === 1 ? "person" : "people"}
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-3">
        <ResultCard label="Tip" value={`₹${tip.toFixed(2)}`} />
        <ResultCard label="Total" value={`₹${total.toFixed(2)}`} highlight />
        <ResultCard
          label={people > 1 ? "Per Person" : "You Pay"}
          value={`₹${perPerson.toFixed(2)}`}
        />
      </div>
    </div>
  )
}
