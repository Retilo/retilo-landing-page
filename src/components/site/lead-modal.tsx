"use client"

import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, Loader2, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const BUSINESS_TYPES = [
  "Restaurant / Cafe",
  "Clinic / Hospital",
  "Salon / Spa",
  "Auto Dealer / Garage",
  "Retail Store",
  "Gym / Fitness",
  "Coaching / Tutoring",
  "Home Services",
  "Other",
]

interface Props {
  open: boolean
  onClose: () => void
}

export function LeadModal({ open, onClose }: Props) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [requirement, setRequirement] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => nameRef.current?.focus(), 120)
    } else {
      // reset on close
      setName("")
      setPhone("")
      setBusinessType("")
      setRequirement("")
      setDone(false)
      setError("")
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSubmitting(true)
    setError("")

    try {
      const params = new URLSearchParams(window.location.search)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/public/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            business_type: businessType || undefined,
            requirement: requirement.trim() || undefined,
            source_page: "landing",
            utm_source:   params.get("utm_source")   || undefined,
            utm_medium:   params.get("utm_medium")   || undefined,
            utm_campaign: params.get("utm_campaign") || undefined,
          }),
        }
      )
      if (!res.ok) throw new Error("submit_failed")
      setDone(true)
    } catch {
      setError("Something went wrong. Try WhatsApp → +91 72888 07097")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            key="panel"
            className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-foreground/8 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {done ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">We'll reach out soon!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Satwik will personally call or WhatsApp you within a few hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Got it
                </button>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <h3 className="text-lg font-semibold">Book a free demo call</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Share your details — Satwik will personally call you to understand your business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-muted-foreground">Your name *</label>
                    <input
                      ref={nameRef}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      required
                      className={cn(
                        "rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm outline-none",
                        "placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-muted-foreground">WhatsApp / phone *</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      className={cn(
                        "rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm outline-none",
                        "placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-muted-foreground">Business type</label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={cn(
                        "rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm outline-none",
                        "text-foreground focus:border-primary focus:ring-1 focus:ring-primary",
                        !businessType && "text-muted-foreground/50"
                      )}
                    >
                      <option value="">Select your industry</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-muted-foreground">
                      What do you need help with? <span className="opacity-60">(optional)</span>
                    </label>
                    <textarea
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      rows={2}
                      placeholder="e.g. Want to automate WhatsApp replies and get more reviews"
                      className={cn(
                        "resize-none rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm outline-none",
                        "placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      )}
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || !name.trim() || !phone.trim()}
                    className={cn(
                      "mt-1 flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground",
                      "transition-all hover:brightness-110 disabled:opacity-50 glow-purple"
                    )}
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {submitting ? "Sending…" : "Request a demo call"}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    No spam · Satwik will personally reach out
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
