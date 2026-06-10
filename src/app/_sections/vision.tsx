import { Network } from "lucide-react"

import { Reveal } from "@/components/site/reveal"

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,#000_30%,transparent_100%)] opacity-50" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary glow-purple-sm">
            <Network className="h-6 w-6" />
          </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-5xl">
            The problem nobody is solving:
            <br />
            <span className="gradient-text">
              local commerce has no intelligence grid.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Twelve million Indian SMBs generate more signals than any
              enterprise — every review, every call, every booking, every rainy
              Tuesday. But that data dies on the counter. POS companies bill
              it, aggregators tax it, and nobody turns it into the one thing
              that levels the playing field:{" "}
              <span className="text-foreground">foresight</span>.
            </p>
            <p>
              Retilo is building the intelligence grid for local commerce.
              Every business that joins makes the signal sharper for its whole
              street — the same weather, the same festivals, the same footfall,
              shared and forecast together. The chai stall gets the same
              quality of demand sensing as the supermarket chain across the
              road.
            </p>
            <p className="text-foreground">
              We&apos;re not another tool to manage your business. We&apos;re
              the brain that levels it up — one neighbourhood at a time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
