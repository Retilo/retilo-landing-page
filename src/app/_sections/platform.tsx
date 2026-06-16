import {
  CalendarCheck,
  Globe,
  IndianRupee,
  MessageCircle,
  PhoneCall,
  Plug,
  Star,
} from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: MessageCircle,
    title: "Unified WhatsApp & chat inbox",
    description:
      "Every customer message — WhatsApp, website chat, SMS — lands in one shared inbox. Assign to staff, reply with AI suggestions, and never let a conversation fall through the cracks.",
    span: "md:col-span-2",
  },
  {
    icon: PhoneCall,
    title: "AI receptionist that never misses a call",
    description:
      "Answers in Hindi or English, takes orders, books appointments, and sends you the transcript — even at 11 PM on a Sunday. Missed calls are now captured leads.",
    span: "",
  },
  {
    icon: Star,
    title: "Reviews on autopilot",
    description:
      "Sends a WhatsApp review request after every visit. AI replies in your voice across Google, JustDial, and IndiaMART. Watch your rating climb without lifting a finger.",
    span: "",
  },
  {
    icon: Globe,
    title: "Website chat → WhatsApp handoff",
    description:
      "A branded chat widget on your site captures the visitor's name and question, then continues the conversation on WhatsApp — where Indian customers actually respond.",
    span: "md:col-span-2",
  },
  {
    icon: IndianRupee,
    title: "Collect payments via WhatsApp",
    description:
      "Send a UPI payment link inside any chat. Customers pay in two taps. Works with PhonePe, GPay, Paytm, and every major UPI app — no POS, no redirect.",
    span: "",
  },
  {
    icon: CalendarCheck,
    title: "Bookings that fill your day",
    description:
      "Consultations, haircuts, tables — customers book through the Retilo app, the AI receptionist, or the website widget. One queue, your hours, zero double-bookings.",
    span: "",
  },
  {
    icon: Plug,
    title: "Plugs into what you already use",
    description:
      "PetPooja, Posist, Swiggy, Zomato, Razorpay, PhonePe, Practo — your existing systems feed the platform. No rip-and-replace, no migration headache.",
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
            One AI employee.
            <br />
            <span className="gradient-text-pb">Seven jobs done.</span>
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
