import { ArrowRight, Sparkles } from "lucide-react"

import { siteConfig } from "@/config/site"
import { ClayBubbles } from "@/components/site/clay-bubbles"
import { Reveal } from "@/components/site/reveal"
import { StoreBadges } from "@/components/site/store-badges"

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(262_78%_55%/0.12),transparent_65%)]" />
      <ClayBubbles />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Early access — built for clinics, salons, restaurants &amp; retail
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
            Big chains have data scientists.
            <br />
            <span className="gradient-text">You have Retilo.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The intelligence stack enterprise retail pays millions for — reviews
            on autopilot, an AI receptionist that never misses a call, bookings,
            local discovery, and demand forecasts for your exact street. One
            platform. Built for the businesses that run your neighbourhood.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.appUrl}
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple"
            >
              Scan my business — free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#apps"
              className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Get the apps
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free AI growth report in ~60 seconds · No credit card · No signup
            needed
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-12 flex justify-center">
            <StoreBadges />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
