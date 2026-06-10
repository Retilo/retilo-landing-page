import { Reveal } from "@/components/site/reveal"

const gaps = [
  {
    they: "Demand-forecasting teams predicting every weekend, festival and rain shower",
    you: "A gut feeling about whether tomorrow will be busy",
  },
  {
    they: "Call centres and revenue managers so no booking ever slips",
    you: "Missed calls during rush hour — each one a customer lost",
  },
  {
    they: "Location-analytics departments studying every street before they open",
    you: "No idea who your real competitors are, or where your footfall comes from",
  },
]

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Enterprise retail runs on intelligence.
            <br />
            <span className="text-muted-foreground">
              Main Street runs on gut feeling.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every tool out there digitizes your billing or your menus. Nobody
            gives the corner clinic, the family restaurant, or the local salon
            what the giants actually compete with —{" "}
            <span className="text-foreground">decisions</span>. That&apos;s the
            problem Retilo exists to solve.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {gaps.map((g, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-card flex h-full flex-col gap-5 p-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Big chains have
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {g.they}
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    You&apos;ve had
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {g.you}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
