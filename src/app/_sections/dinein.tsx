"use client"

import { useState } from "react"
import { ArrowRight, CalendarCheck, Palette, Sparkles, Users } from "lucide-react"
import posthog from "posthog-js"

import { Reveal } from "@/components/site/reveal"

// Interactive demo widget — visitor enters their restaurant name and jumps to a live demo.
function DemoWidget() {
  const [name, setName] = useState("")

  function tryDemo() {
    const trimmed = name.trim()
    posthog.capture("landing_demo_cta_clicked", { restaurantName: trimmed || undefined })
    const url = trimmed
      ? `https://book.retilo.io/demo?name=${encodeURIComponent(trimmed)}`
      : "https://book.retilo.io/demo"
    window.open(url, "_blank")
  }

  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[28px] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
      {/* Mini phone preview */}
      <div className="mb-4 overflow-hidden rounded-2xl border border-border bg-foreground/[0.03]">
        <div className="border-b border-border bg-primary/10 py-1 text-center text-[9px] font-bold uppercase tracking-widest text-primary">
          LIVE DEMO
        </div>
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-sm">🍽️</div>
          <div>
            <div className="text-xs font-semibold">{name.trim() || "Your Restaurant"}</div>
            <div className="text-[10px] text-muted-foreground">AI-powered reservations</div>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-foreground/10 px-2.5 py-2 text-[11px] leading-relaxed">
            Hi! I can help you book a table at <strong>{name.trim() || "your restaurant"}</strong>. What date works?
          </div>
          <div className="ml-auto max-w-[75%] rounded-xl rounded-br-sm bg-primary px-2.5 py-2 text-[11px] text-primary-foreground">
            Table for 2, tomorrow at 7 PM
          </div>
          <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-foreground/10 px-2.5 py-2 text-[11px] leading-relaxed">
            Checking availability… got a slot at 7:30 PM. Your name?
          </div>
        </div>
      </div>

      {/* Input + CTA */}
      <div className="space-y-2.5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tryDemo()}
          placeholder="Enter your restaurant name…"
          maxLength={80}
          className="w-full rounded-xl border border-border bg-foreground/[0.05] px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
        />
        <button
          onClick={tryDemo}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Try it live — free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-center text-[10px] text-muted-foreground">
          No login · no credit card · 30 seconds setup
        </p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
        Real bookings via
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brands/swiggy.webp" alt="Swiggy" className="h-3.5 w-auto" />
        Dineout
      </div>
    </div>
  )
}

const points = [
  {
    icon: Users,
    title: "Zero typing for guests",
    description:
      "Party size, day, time, even the seating area — all tappable blocks. A table is booked in four taps, confirmed by Swiggy Dineout.",
  },
  {
    icon: Palette,
    title: "100% your brand",
    description:
      "Your logo, your colours, your photos of the seating. No third-party clutter — it looks like your restaurant built it.",
  },
  {
    icon: CalendarCheck,
    title: "Live on every surface",
    description:
      "Link it from your Google profile, Instagram bio, WhatsApp auto-replies and QR codes on tables. One page, every channel.",
  },
]

export function Dinein() {
  return (
    <section id="dinein" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-x-0 top-1/4 -z-10 h-[500px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(24_95%_53%/0.08),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" /> New · Table bookings
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Your tables,
              <br />
              <span className="gradient-text-pb">booked in four taps.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Retilo gives every restaurant a beautiful, brandable booking page
              backed by Swiggy Dineout. Guests tap — never type — and the
              reservation lands in your Swiggy dashboard instantly.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-4 py-2">
              <span className="text-xs text-muted-foreground">Official reservations via</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brands/swiggy.webp" alt="Swiggy" className="h-5 w-auto" />
            </div>

            <ul className="mt-8 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.03]">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://book.retilo.io/demo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture("dinein_demo_cta_clicked")}
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple"
              >
                Try it live — free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/dinein"
                onClick={() => posthog.capture("dinein_section_cta_clicked")}
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-7 py-3.5 text-base font-semibold transition-all hover:bg-foreground/5"
              >
                Learn more
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <DemoWidget />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
