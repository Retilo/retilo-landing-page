import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { FloatingOrbs } from "@/components/site/floating-orbs"
import { Reveal } from "@/components/site/reveal"

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden p-10 text-center sm:p-16">
            <div className="absolute left-1/2 top-0 -z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(262_88%_66%/0.25),transparent_70%)]" />
            <FloatingOrbs className="z-0 opacity-70" />

            <h2 className="relative text-3xl font-bold tracking-tight sm:text-5xl">
              Stop missing customers.
              <br />
              <span className="gradient-text">Start with Retilo — free.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Paste your Google Maps link. In 60 seconds you&apos;ll see exactly
              how many leads you&apos;re losing and what fixing it looks like —
              free, no credit card, no signup needed.
            </p>
            <div className="relative mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.appUrl}
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple"
              >
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${siteConfig.inquiryEmail}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                Book a demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
