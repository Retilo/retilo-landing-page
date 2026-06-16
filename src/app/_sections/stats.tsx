import { Reveal } from "@/components/site/reveal"

const stats = [
  {
    value: "< 60s",
    label: "AI response time to a new WhatsApp lead",
  },
  {
    value: "3×",
    label: "More Google reviews with automated WhatsApp requests",
  },
  {
    value: "40%",
    label: "Of bookings happen outside business hours — AI captures them all",
  },
  {
    value: "5 → 1",
    label: "Tools replaced by one platform (WhatsApp, calls, reviews, bookings, payments)",
  },
]

export function Stats() {
  return (
    <section className="relative border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.07}>
              <div className="text-center">
                <p className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
