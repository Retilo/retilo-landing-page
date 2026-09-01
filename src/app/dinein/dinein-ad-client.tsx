"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Loader2,
  Palette,
  QrCode,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react"
import posthog from "posthog-js"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.retilo.io"

// ── Waitlist form ─────────────────────────────────────────────────────────────

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("")
  const [restaurant, setRestaurant] = useState("")
  const [phone, setPhone] = useState("")
  const [state, setState] = useState<"idle" | "busy" | "done">("idle")
  const [message, setMessage] = useState("")
  const [position, setPosition] = useState<number | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (state === "busy") return
    setState("busy")
    posthog.capture("dinein_waitlist_submitted", { compact })
    try {
      const res = await fetch(`${API_URL}/v1/public/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          restaurant_name: restaurant,
          phone,
          source: "instagram_dinein_ad",
          metadata: { page: "/dinein" },
        }),
      })
      const json = await res.json()
      if (res.ok) {
        setState("done")
        setMessage(json?.data?.message || "You're on the list!")
        setPosition(json?.data?.position ?? null)
      } else {
        setState("idle")
        setMessage(json?.message || "Something went wrong — try again.")
      }
    } catch {
      setState("idle")
      setMessage("Network hiccup — please try again.")
    }
  }

  if (state === "done") {
    return (
      <div className="glass-card flex flex-col items-center gap-3 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
          <Check className="h-7 w-7 text-emerald-400" />
        </div>
        <p className="text-lg font-semibold">{message}</p>
        {position !== null && (
          <p className="text-sm text-muted-foreground">
            You&apos;re <span className="font-semibold text-primary">#{position}</span> on
            the waitlist. We&apos;ll WhatsApp you when your slot opens.
          </p>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="glass-card flex flex-col gap-3 p-6 sm:p-8">
      {!compact && (
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Join the waitlist — free
        </p>
      )}
      <input
        required
        placeholder="Restaurant name"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
        className="rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
      />
      <input
        required
        type="tel"
        placeholder="WhatsApp number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
      />
      <button
        type="submit"
        disabled={state === "busy"}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60 glow-purple"
      >
        {state === "busy" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            Get my booking page
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      {message && <p className="text-center text-sm text-red-400">{message}</p>}
      <p className="text-center text-xs text-muted-foreground">
        Free while in early access · No card needed
      </p>
    </form>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: Users,
    title: "Guests book in 4 taps",
    text: "Party size, day, time, seating — all tappable. No app installs, no phone calls, no typing.",
  },
  {
    icon: Palette,
    title: "Looks like YOUR restaurant",
    text: "Your logo, your colours, photos of your seating. Zero third-party clutter on the page.",
  },
  {
    icon: Zap,
    title: "Confirmed by Swiggy Dineout",
    text: "Reservations are real Swiggy Dineout bookings — deals, slots and confirmations included.",
  },
  {
    icon: QrCode,
    title: "One link, everywhere",
    text: "Google profile, Instagram bio, WhatsApp auto-reply, table QR codes — the same link works on all of them.",
  },
]

const steps = [
  { n: "1", title: "Join the waitlist", text: "Takes 20 seconds. We onboard restaurants in small batches." },
  { n: "2", title: "We brand your page", text: "Send us your logo and photos — your page is live the same week." },
  { n: "3", title: "Tables fill themselves", text: "Share one link. Watch bookings land in your Swiggy dashboard." },
]

export function DineinAdClient() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.15),transparent_70%)]" />

      {/* hero */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Powered by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brands/swiggy.webp" alt="Swiggy" className="h-4 w-auto" />
            Dineout
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Your tables,
            <br />
            <span className="gradient-text">booked in four taps.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Stop losing walk-aways to missed calls and clunky apps. Retilo gives
            your restaurant a booking page in <em>your</em> brand where guests
            tap — never type — and Swiggy Dineout confirms the table.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 max-w-md"
        >
          <WaitlistForm />
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1">Loved by early-access restaurants in Hyderabad</span>
        </div>
      </section>

      {/* benefits */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* how it works */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
          Live in <span className="gradient-text">one week</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="glass-card p-6">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* trust strip */}
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-2">
        <div className="glass-card flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-center sm:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brands/swiggy.webp" alt="Swiggy" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            Every reservation is a real <span className="font-semibold text-foreground">Swiggy Dineout</span> booking —
            slots, deals and confirmations your guests already trust.
          </p>
        </div>
      </section>

      {/* bottom CTA */}
      <section className="mx-auto max-w-md px-6 pb-24 pt-8">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
          Early access is <span className="gradient-text">limited</span>.
        </h2>
        <WaitlistForm compact />
      </section>
    </main>
  )
}
