"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  ExternalLink,
  Loader2,
  Maximize2,
  QrCode,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react"
import posthog from "posthog-js"

import { BgAnimateButton } from "@/components/ui/bg-animate-button"
import { GradientHeading } from "@/components/ui/gradient-heading"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.retilo.io"
const BOOK_URL = process.env.NEXT_PUBLIC_BOOK_URL || "https://book.retilo.io"
const DEMO_SLUG = process.env.NEXT_PUBLIC_DEMO_SLUG || "demo"

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
    posthog.capture("dinein_waitlist_submitted", { compact, source: "dinein_page" })
    try {
      const res = await fetch(`${API_URL}/v1/public/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          restaurant_name: restaurant,
          phone,
          source: "dinein_page",
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card flex flex-col items-center gap-3 p-8 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
          <Check className="h-7 w-7 text-emerald-400" />
        </div>
        <p className="text-lg font-semibold">{message}</p>
        {position !== null && (
          <p className="text-sm text-muted-foreground">
            You&apos;re{" "}
            <span className="font-semibold text-primary">#{position}</span> on
            the waitlist. We&apos;ll WhatsApp you when your slot opens.
          </p>
        )}
      </motion.div>
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
      <BgAnimateButton
        type="submit"
        disabled={state === "busy"}
        gradient="nebula"
        animation="spin"
        rounded="xl"
        size="lg"
        className="mt-1 w-full"
      >
        {state === "busy" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            Get my booking page
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </BgAnimateButton>
      {message && <p className="text-center text-sm text-red-400">{message}</p>}
      <p className="text-center text-xs text-muted-foreground">
        Free while in early access · No card needed
      </p>
    </form>
  )
}

// ── Live demo iframe ──────────────────────────────────────────────────────────

function LiveDemo() {
  const [expanded, setExpanded] = useState(false)
  const src = `${BOOK_URL}/${DEMO_SLUG}/dinein`

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* phone frame */}
      <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border-[6px] border-border bg-background shadow-2xl">
        <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-center">
          <div className="h-1.5 w-16 rounded-full bg-border" />
        </div>
        <AnimatePresence initial={false}>
          <motion.iframe
            key="demo"
            src={src}
            title="Retilo dine-in booking demo"
            className="block w-full"
            style={{ height: expanded ? "780px" : "600px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            allow="clipboard-write"
          />
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          {expanded ? "Collapse" : "Expand"}
        </button>
        <Link
          href={src}
          target="_blank"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => posthog.capture("dinein_demo_opened_fullscreen")}
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open full screen
        </Link>
      </div>
    </div>
  )
}

// ── Features grid ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: Users,
    title: "Zero typing for guests",
    body: "Party size, day, time and seating zone — all tappable chips. A table booked in 4 taps, confirmed by Swiggy Dineout instantly.",
    gradient: "nebula" as const,
  },
  {
    icon: Sparkles,
    title: "100% your brand",
    body: "Your logo, colours and photos of every seating area. No Retilo chrome shown to guests — it looks like your restaurant built it.",
    gradient: "forest" as const,
  },
  {
    icon: QrCode,
    title: "One link, every surface",
    body: "Google Business Profile, Instagram bio, WhatsApp auto-reply, QR codes on tables. Same page, zero duplicates.",
    gradient: "sunset" as const,
  },
  {
    icon: Zap,
    title: "SMS reminder 2h before",
    body: "Guests get an automatic reminder before their reservation — reducing no-shows without any manual work.",
    gradient: "ocean" as const,
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────

const steps = [
  { n: "1", title: "Join the waitlist", body: "Takes 20 seconds. We onboard restaurants in small batches." },
  { n: "2", title: "We brand your page", body: "Send your logo and photos — your booking page is live the same week." },
  { n: "3", title: "Tables fill themselves", body: "Share one link. Bookings land in your Swiggy dashboard automatically." },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export function DineinPageClient() {
  return (
    <main className="relative overflow-hidden">
      {/* hero glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.14),transparent_70%)]" />

      {/* ── hero ── */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Powered by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brands/swiggy.webp" alt="Swiggy" className="h-4 w-auto" />
            Dineout
          </p>

          <GradientHeading asChild size="xl" weight="black" variant="light" className="mt-2">
            <h1>
              Your tables,
              <br />
              booked in four taps.
            </h1>
          </GradientHeading>

          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            Stop losing walk-aways to missed calls. Retilo gives your restaurant
            a booking page in <em>your brand</em> where guests tap — never type
            — and Swiggy Dineout confirms the table.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <BgAnimateButton
              gradient="nebula"
              animation="spin"
              rounded="full"
              size="lg"
              onClick={() => {
                posthog.capture("dinein_hero_waitlist_clicked")
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="flex items-center gap-2">
                Get your booking page
                <ArrowRight className="h-4 w-4" />
              </span>
            </BgAnimateButton>

            <Link
              href={`${BOOK_URL}/${DEMO_SLUG}/dinein`}
              target="_blank"
              onClick={() => posthog.capture("dinein_hero_demo_clicked")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
            >
              Try live demo
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1">Loved by early-access restaurants in Hyderabad</span>
          </div>
        </motion.div>
      </section>

      {/* ── live demo ── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Try it now
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            This is what your guests see.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tap through an actual booking — the AI checks real Swiggy Dineout slots.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <LiveDemo />
        </motion.div>
      </section>

      {/* ── features ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Everything your restaurant needs,{" "}
            <span className="gradient-text">nothing it doesn&apos;t.</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── how it works ── */}
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
              <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── trust strip ── */}
      <section className="mx-auto max-w-3xl px-6 py-4">
        <div className="glass-card flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-center sm:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brands/swiggy.webp" alt="Swiggy" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            Every reservation is a real{" "}
            <span className="font-semibold text-foreground">Swiggy Dineout</span>{" "}
            booking — slots, deals and confirmations your guests already trust.
          </p>
        </div>
      </section>

      {/* ── waitlist CTA ── */}
      <section id="waitlist" className="mx-auto max-w-md scroll-mt-24 px-6 pb-28 pt-10">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
          Early access is <span className="gradient-text">limited</span>.
        </h2>
        <WaitlistForm />
      </section>
    </main>
  )
}
