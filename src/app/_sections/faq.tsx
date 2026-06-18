"use client"

import posthog from "posthog-js"

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
    a: "Retilo is your AI employee for customer communication. It responds to WhatsApp leads in seconds, sends automated review requests after every visit, answers calls 24/7 in Hindi or English, books appointments, sends UPI payment links, and runs your website chat — all from one dashboard. You run the business; Retilo handles the customer side.",
  },
  {
    q: "How does the WhatsApp inbox work?",
    a: "All your customer WhatsApp messages land in a shared Retilo inbox — you and your team can see, assign, and reply from the web or mobile app. The AI suggests replies based on your FAQs and past conversations. Works with your existing WhatsApp Business number via the official WhatsApp Business API.",
  },
  {
    q: "How do automated review requests work?",
    a: "After every appointment, order, or visit, Retilo sends the customer a WhatsApp message with a one-tap link to leave a Google review. The timing, the message, and the follow-up are all automated. For businesses already using Retilo, average review volume goes up 3× in the first month.",
  },
  {
    q: "Which businesses is Retilo built for?",
    a: "Clinics, salons, restaurants, auto dealers, gyms, home services, retail stores, and coaching centres. If customers call you, WhatsApp you, or find you on Google Maps, Retilo is built for you. India-first: Hindi AI receptionist, UPI payments, Indian festival calendar, and integrations with Swiggy, Zomato, Practo, and local POS systems.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start at ₹1,999/month. Early-access businesses get 3 months free while we build with them. All plans include a 14-day trial — no credit card needed. Annual billing saves 20%. Custom pricing is available for hospital chains and retail franchises.",
  },
  {
    q: "Do I need technical skills to set it up?",
    a: "None. Paste your Google Maps link and Retilo scans your business in 60 seconds. Connecting WhatsApp takes one QR code scan. Connecting Google Business Profile is one tap of consent. If you can use WhatsApp, you can use Retilo.",
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
          <Accordion
            type="single"
            collapsible
            className="mt-12 w-full space-y-3"
            onValueChange={(value) => {
              if (value) {
                const idx = parseInt(value.replace("item-", ""), 10)
                posthog.capture("faq_question_expanded", {
                  question: faqs[idx]?.q,
                })
              }
            }}
          >
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
