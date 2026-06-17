import { Reveal } from "@/components/site/reveal"

const industries = [
  { emoji: "🏥", name: "Clinics & Hospitals" },
  { emoji: "💈", name: "Salons & Spas" },
  { emoji: "🍽️", name: "Restaurants & Cafes" },
  { emoji: "🚗", name: "Auto Dealers & Garages" },
  { emoji: "🔧", name: "Home Services" },
  { emoji: "🛍️", name: "Retail Stores" },
  { emoji: "🏋️", name: "Gyms & Fitness" },
  { emoji: "🎓", name: "Coaching & Tutoring" },
]

export function Industries() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Built for every local business
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            If customers call, message, or visit you —
            <br />
            <span className="gradient-text">Retilo is for you.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="glass-card flex items-center gap-3 p-4 transition-colors hover:border-primary/30"
              >
                <span className="text-2xl">{ind.emoji}</span>
                <span className="text-sm font-medium leading-tight">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
