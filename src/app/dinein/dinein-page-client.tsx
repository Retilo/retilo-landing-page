"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
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

// ── Animated booking transcript (right side of hero) ─────────────────────────

const TRANSCRIPT = [
  { role: "bot",  text: "Hi! Ready to book at Farzi Cafe? 🍽 Pick a date and party size." },
  { role: "user", text: "Table for 4, Saturday 8 PM" },
  { role: "bot",  text: "Checking Swiggy Dineout… ✓ Found free slots at 7:30 PM, 8:00 PM and 8:30 PM." },
  { role: "user", text: "8:00 PM please" },
  { role: "bot",  text: "🎉 Booked! Swiggy Dineout #R74821\n🍽 Farzi Cafe · Sat, 4 guests · 8:00 PM" },
] as const

function BookingTranscript() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const tick = () => {
      i++
      setVisible(i)
      if (i < TRANSCRIPT.length) setTimeout(tick, i === 0 ? 600 : 1400)
    }
    setTimeout(tick, 300)
  }, [inView])

  return (
    <div ref={ref} className="flex flex-col gap-0 w-full">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[10px] text-zinc-500 font-mono ml-2 tracking-wide">book.retilo.io/farzi-cafe/dinein</span>
      </div>

      {/* Restaurant header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
          F
        </div>
        <div>
          <div className="text-[13px] font-semibold text-zinc-100">Farzi Cafe</div>
          <div className="text-[10px] text-zinc-500">AI-powered reservations</div>
        </div>
        <div className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wide">Live</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 px-4 py-4 min-h-[220px]">
        {TRANSCRIPT.slice(0, visible).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-violet-600 text-white rounded-br-sm font-medium"
                  : msg.text.startsWith("🎉")
                    ? "bg-gradient-to-br from-emerald-900/60 to-teal-900/60 border border-emerald-500/30 text-emerald-100 rounded-bl-sm"
                    : "bg-white/[0.07] text-zinc-200 rounded-bl-sm border border-white/[0.06]"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* typing indicator between messages */}
        {visible < TRANSCRIPT.length && visible > 0 && TRANSCRIPT[visible].role === "bot" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white/[0.07] border border-white/[0.06] px-3.5 py-3">
              {[0, 0.18, 0.36].map((d, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce"
                  style={{ animationDelay: `${d}s`, animationDuration: "1s" }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-3">
        <div className="flex-1 rounded-full bg-white/[0.05] border border-white/[0.08] px-3.5 py-2 text-[11px] text-zinc-600">
          Type a message…
        </div>
        <div className="h-7 w-7 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none"/>
          </svg>
        </div>
      </div>
    </div>
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

      {/* ── hero ── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-24">
        {/* Painterly mesh backdrop — two overlapping radial blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(262_88%_66%/0.18)_0%,transparent_65%)] blur-3xl" />
          <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,hsl(220_80%_60%/0.10)_0%,transparent_65%)] blur-3xl" />
          <div className="absolute top-60 -left-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,hsl(340_80%_60%/0.07)_0%,transparent_65%)] blur-3xl" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT: editorial copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 max-w-xl"
          >
            {/* pill badge with inline Swiggy logo */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <Sparkles className="h-3 w-3 text-primary" />
                Powered by
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brands/swiggy.webp" alt="Swiggy" className="h-3.5 w-auto" />
                Dineout
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Real bookings, live slots
              </span>
            </div>

            {/* headline */}
            <div className="space-y-2">
              <h1 className="text-[2.75rem] font-black leading-[1.05] tracking-tight sm:text-[3.5rem]">
                <span className="text-foreground">Your tables,</span>
                <br />
                <span className="relative inline-block">
                  <span className="gradient-text">booked by AI.</span>
                  {/* underline accent */}
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                    <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="hsl(262 88% 66% / 0.5)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-base text-muted-foreground sm:text-lg leading-relaxed max-w-lg">
              Stop losing walk-aways to missed calls. Give your restaurant a booking page in{" "}
              <em className="text-foreground not-italic font-semibold">your brand</em> — guests tap to book,
              Swiggy Dineout confirms the table in seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <BgAnimateButton
                gradient="nebula"
                animation="spin"
                rounded="full"
                size="lg"
                onClick={() => {
                  posthog.capture("dinein_hero_waitlist_clicked")
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="shadow-[0_0_32px_hsl(262_88%_66%/0.25)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:border-foreground/30 hover:bg-foreground/[0.03]"
              >
                Try live demo
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* social proof */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1">Loved by early-access restaurants in Hyderabad</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-400" />No app needed</span>
                <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-400" />Free early access</span>
                <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-400" />Live in 1 week</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: booking transcript card ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* glow behind card */}
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,hsl(262_88%_66%/0.15),transparent)] blur-2xl scale-110" />

            {/* card */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0e0f12]/90 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <BookingTranscript />
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-white/[0.1] bg-[#0e0f12]/95 backdrop-blur-xl px-3 py-2 shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brands/swiggy.webp" alt="Swiggy" className="h-5 w-auto" />
              <div>
                <div className="text-[10px] font-bold text-foreground">Real Swiggy Dineout</div>
                <div className="text-[9px] text-muted-foreground">Live slots · Confirmed instantly</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="absolute -top-4 -right-4 rounded-2xl border border-white/[0.1] bg-[#0e0f12]/95 backdrop-blur-xl px-3 py-2 shadow-xl"
            >
              <div className="text-[10px] font-bold text-emerald-400">🎉 Booking confirmed</div>
              <div className="text-[9px] text-muted-foreground">4 sec · zero calls</div>
            </motion.div>
          </motion.div>
        </div>
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
