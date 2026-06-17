import { Reveal } from "@/components/site/reveal"

const gaps = [
  {
    they: "Dedicated response teams answering every WhatsApp lead within minutes — around the clock",
    you: "Messages sitting on read while you're with another customer. Leads go cold.",
  },
  {
    they: "Automated software sending hundreds of review requests a week and replying to each one",
    you: "Forgetting to ask, asking awkwardly at the counter, watching your 3.8 rating collect dust.",
  },
  {
    they: "A 24/7 AI that qualifies leads, books slots, and collects UPI payments — even at midnight on Sunday",
    you: "Every enquiry after 8 PM goes unanswered. That's your busiest window gone.",
  },
]

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Big businesses never miss a customer.
            <br />
            <span className="text-muted-foreground">
              You&apos;ve been missing dozens.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Enterprise brands have entire teams for customer communication,
            reputation management, and lead response. Local businesses have been
            left to juggle WhatsApp, missed calls, and Google reviews manually.
            That gap is what Retilo closes.
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
