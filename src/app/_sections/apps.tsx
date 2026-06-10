import { Globe, Smartphone, Store } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Reveal } from "@/components/site/reveal"
import { StoreBadges } from "@/components/site/store-badges"

export function Apps() {
  return (
    <section id="apps" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            One platform, three surfaces
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Run it from your pocket.
            <br />
            <span className="text-muted-foreground">
              Get discovered in theirs.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Merchant app */}
          <Reveal>
            <div className="glass-card flex h-full flex-col p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Retilo Business</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                For owners — Android &amp; iOS
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Your whole business in one app: today&apos;s appointment queue,
                review replies, call transcripts, demand outlook for the week,
                and your store&apos;s public listing. Built for owners who run
                the floor, not a back office.
              </p>
              <StoreBadges variant="business" compact className="mt-6" />
            </div>
          </Reveal>

          {/* Consumer app */}
          <Reveal delay={0.08}>
            <div className="glass-card relative flex h-full flex-col overflow-hidden p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Retilo</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                For customers — Android &amp; iOS
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Discover stores near you, see what&apos;s bookable, and grab a
                slot in three taps — clinics, salons, restaurants and more.
                Every business on Retilo becomes instantly bookable to the
                whole neighbourhood.
              </p>
              <StoreBadges variant="consumer" compact className="mt-6" />
            </div>
          </Reveal>

          {/* Web dashboard */}
          <Reveal delay={0.16}>
            <div className="glass-card flex h-full flex-col p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Web Dashboard</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                For deep work — any browser
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                The full command centre: location intelligence maps, analytics,
                competitor tracking, integrations and your free AI growth
                report. Where the big-picture decisions get made.
              </p>
              <a
                href={siteConfig.appUrl}
                className="mt-6 inline-flex w-fit items-center rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:border-foreground/25 hover:bg-secondary"
              >
                Open the dashboard
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
