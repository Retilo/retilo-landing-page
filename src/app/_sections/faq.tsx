import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/site/reveal"

const faqs = [
  {
    q: "What does Retilo actually do for my business?",
    a: "Retilo handles the work big chains hire whole departments for: it replies to your Google reviews, answers your phone with an AI receptionist, takes bookings 24/7, lists you in the Retilo discovery app, maps your competitors and footfall drivers, and forecasts demand for your exact location — weather, festivals, holidays and all. You run the business; Retilo runs the intelligence.",
  },
  {
    q: "Which businesses is Retilo built for?",
    a: "Clinics, salons, restaurants, retail stores and local service businesses. If customers call you, book you, or find you on Google Maps, Retilo is built for you. We're India-first — Hindi-speaking AI receptionist, Indian festival calendar, UPI and local POS integrations included.",
  },
  {
    q: "How much does it cost?",
    a: "We're in early access, and early-access businesses get Retilo free while we build with them. Start with the free AI business scan — no card, no signup — and we'll onboard you from there. Pricing will always stay SMB-honest: a fraction of one missed customer a day.",
  },
  {
    q: "Do I need any technical skills?",
    a: "None. Paste your Google Maps link and Retilo sets itself up — your profile, your listing, your first growth report. Connecting your Google Business Profile is one tap of consent. If you can use WhatsApp, you can use Retilo.",
  },
  {
    q: "How does the AI phone receptionist work?",
    a: "You get a dedicated number (or forward your existing one). The AI answers in Hindi or English, knows your menu or services, takes orders and bookings, and logs every call with a transcript and summary in your app. Calls you'd have missed become customers you keep.",
  },
  {
    q: "What happens to my data?",
    a: "Your data stays yours. We use it to power your dashboards and forecasts — never to sell to third parties. Google account access is read/reply-scoped to your Business Profile only, and you can disconnect any time. Full details in our Privacy Policy.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Fair questions, straight answers.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card border-border px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
