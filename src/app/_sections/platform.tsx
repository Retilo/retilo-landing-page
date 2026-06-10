import {
  CalendarCheck,
  CloudSun,
  MapPin,
  PhoneCall,
  Plug,
  Search,
  Star,
} from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: PhoneCall,
    title: "An AI receptionist that never misses a call",
    description:
      "Answers in Hindi or English, takes orders, books tables and appointments, and hands you the transcript — even at 11pm on a Sunday. Every missed call used to be a lost customer. Not anymore.",
    span: "md:col-span-2",
  },
  {
    icon: Star,
    title: "Reputation on autopilot",
    description:
      "Google reviews synced, sentiment analyzed, AI replies drafted in your voice. Watch your rating, response rate and health score climb without lifting a finger.",
    span: "",
  },
  {
    icon: CloudSun,
    title: "Know tomorrow before it happens",
    description:
      "Weather, festivals, public holidays, even the cricket schedule — fused into one demand forecast for your exact location. \"Eid + pleasant weather: stock up 30–40%.\" That specific.",
    span: "",
  },
  {
    icon: MapPin,
    title: "Your street, decoded",
    description:
      "Every competitor, every footfall driver — metro stations, malls, hospitals, offices — mapped and scored. Know exactly where you stand and where the opportunity is.",
    span: "md:col-span-2",
  },
  {
    icon: CalendarCheck,
    title: "Bookings that fill your day",
    description:
      "Consultations, haircuts, tables — customers book through the Retilo app, your AI receptionist, or walk-ins. One queue, your hours, zero double-bookings.",
    span: "",
  },
  {
    icon: Search,
    title: "Be found by humans and AI",
    description:
      "When people ask ChatGPT or Google for \"best salon near me\", will you show up? Retilo audits and fixes your visibility across search engines and AI assistants.",
    span: "",
  },
  {
    icon: Plug,
    title: "Plugs into what you already use",
    description:
      "PetPooja, Posist, Swiggy, Zomato, Razorpay, PhonePe, Practo — your existing systems feed the brain. No rip-and-replace.",
    span: "",
  },
]

export function Platform() {
  return (
    <section id="platform" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(262_88%_66%/0.08),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The platform
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Seven departments&apos; worth of firepower.
            <br />
            <span className="gradient-text-pb">Zero new headcount.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06} className={cn(f.span)}>
              <div className="glass-card group h-full p-6 transition-colors hover:border-primary/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary/25">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
