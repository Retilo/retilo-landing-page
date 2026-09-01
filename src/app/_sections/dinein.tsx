"use client"

import { ArrowRight, CalendarCheck, Palette, Sparkles, Users } from "lucide-react"
import posthog from "posthog-js"

import { Reveal } from "@/components/site/reveal"

// Miniature of the real book.retilo.io/{slug}/dinein composer — taps, not typing.
function BookingMock() {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[28px] border border-border bg-background/80 p-4 shadow-2xl backdrop-blur">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-base">
          🍽️
        </div>
        <div>
          <div className="text-sm font-semibold">Andhra Spice House</div>
          <div className="text-[11px] text-muted-foreground">Jubilee Hills · Hyderabad</div>
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-border bg-foreground/[0.03] p-3">
        <div>
          <div className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            How many of you?
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={
                  n === 4
                    ? "rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                    : "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                }
              >
                {n}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Which day?
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Today
            </span>
            {["Tomorrow", "Sat 5"].map((d) => (
              <span key={d} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {d}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            What time?
          </div>
          <div className="flex gap-1.5">
            {["7:00 PM", "7:30 PM", "8:00 PM"].map((t, i) => (
              <span
                key={t}
                className={
                  i === 1
                    ? "rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                    : "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                }
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-primary py-2.5 text-center text-xs font-semibold text-primary-foreground">
          Find my table — 4 guests · Today · 7:30 PM
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
        Powered by <span className="font-semibold text-orange-500">Swiggy</span> Dineout
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

            <a
              href="/dinein"
              onClick={() => posthog.capture("dinein_section_cta_clicked")}
              className="group mt-9 inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple"
            >
              Get your booking page
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <BookingMock />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
