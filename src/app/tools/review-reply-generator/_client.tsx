"use client"

import { useState } from "react"

import { useTrack } from "@/hooks/use-track"
import { IconCopy, IconCheck, IconStar } from "@tabler/icons-react"

type Tone = "professional" | "warm" | "apologetic"

const TONE_LABELS: Record<Tone, string> = {
  professional: "Professional",
  warm: "Warm & Friendly",
  apologetic: "Apologetic",
}

const POSITIVE_OPENERS = [
  "Thank you so much for the wonderful review!",
  "We're thrilled to hear you had a great experience!",
  "What a lovely review — thank you!",
  "Your kind words made our day!",
  "We're absolutely delighted to read this!",
]

const NEUTRAL_OPENERS = [
  "Thank you for taking the time to share your feedback.",
  "We appreciate you reviewing us.",
  "Thank you for your honest feedback.",
]

const NEGATIVE_OPENERS_PROFESSIONAL = [
  "Thank you for bringing this to our attention.",
  "We appreciate your feedback and sincerely apologize for your experience.",
  "We're sorry to hear your visit did not meet expectations.",
]

const NEGATIVE_OPENERS_WARM = [
  "We're so sorry this happened — this is not us at all.",
  "Thank you for telling us, even though we know this was frustrating.",
  "We genuinely apologize for letting you down.",
]

const NEGATIVE_OPENERS_APOLOGETIC = [
  "We sincerely apologize for your experience. There are no excuses.",
  "Please accept our deepest apologies — we completely failed to deliver.",
  "We are truly sorry. This should never have happened.",
]

const CLOSERS: Record<Tone, string[]> = {
  professional: [
    "We look forward to welcoming you back soon.",
    "We hope to have the opportunity to serve you again.",
    "Thank you again for your visit.",
  ],
  warm: [
    "We'd love to see you back soon — it would mean the world to us!",
    "Come back soon — we'll make sure it's even better!",
    "You're always welcome here. 😊",
  ],
  apologetic: [
    "We would love a chance to make it right. Please reach out to us directly.",
    "We hope you'll give us another chance to make up for this.",
    "We take this very seriously and are committed to doing better.",
  ],
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateReply(
  rating: number,
  review: string,
  restaurantName: string,
  tone: Tone
): string {
  const name = restaurantName || "our restaurant"
  const lines: string[] = []

  if (rating >= 4) {
    lines.push(pick(POSITIVE_OPENERS))

    if (rating === 5) {
      lines.push(
        tone === "warm"
          ? `Guests like you are the reason we love what we do. We put our heart into every dish and every service, and it means everything to know it shows.`
          : `It means a great deal to our team to receive such positive feedback. We strive to ensure every guest feels well looked after.`
      )
    } else {
      lines.push(
        `We're glad you enjoyed your visit to ${name}. We always aim for a 5-star experience, and your feedback helps us get there.`
      )
    }
    lines.push(pick(CLOSERS[tone]))
  } else if (rating === 3) {
    lines.push(pick(NEUTRAL_OPENERS))
    lines.push(
      `We're glad to hear some aspects of your visit were enjoyable, but we're sorry we didn't fully meet your expectations on every front.`
    )
    lines.push(
      `At ${name}, we continuously work to improve, and your review helps us identify where we can do better.`
    )
    lines.push(
      tone === "warm"
        ? `We'd love another chance to show you what we're truly capable of. Please come back soon!`
        : `We hope to serve you again and provide a better experience next time.`
    )
  } else {
    const openers =
      tone === "apologetic"
        ? NEGATIVE_OPENERS_APOLOGETIC
        : tone === "warm"
          ? NEGATIVE_OPENERS_WARM
          : NEGATIVE_OPENERS_PROFESSIONAL

    lines.push(pick(openers))
    lines.push(
      `The experience you described is not the standard we hold ourselves to at ${name}, and we take this very seriously.`
    )
    if (tone === "apologetic" || tone === "warm") {
      lines.push(
        `We would genuinely like to make this right. Please reach out to us directly so we can address this personally.`
      )
    } else {
      lines.push(
        `We are investigating what went wrong and taking corrective action with our team.`
      )
    }
    lines.push(pick(CLOSERS[tone]))
  }

  lines.push(`\n— Team ${restaurantName || "Management"}`)

  return lines.join("\n\n")
}

export function ReviewReplyClient() {
  const track = useTrack()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState("")
  const [restaurantName, setRestaurantName] = useState("")
  const [tone, setTone] = useState<Tone>("professional")
  const [reply, setReply] = useState("")
  const [copied, setCopied] = useState(false)

  function generate() {
    if (rating === 0) return
    setReply(generateReply(rating, review, restaurantName, tone))
    track("tool_used", { tool: "review-reply-generator", rating, tone })
  }

  async function copy() {
    await navigator.clipboard.writeText(reply)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        {/* Star rating */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Star Rating
          </label>
          <div className="mt-2 flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110"
              >
                <IconStar
                  className={`h-8 w-8 ${
                    star <= (hoverRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground/30"
                  }`}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="ml-2 text-sm text-muted-foreground">
                {rating === 5
                  ? "Excellent"
                  : rating === 4
                    ? "Good"
                    : rating === 3
                      ? "Average"
                      : rating === 2
                        ? "Poor"
                        : "Terrible"}
              </span>
            )}
          </div>
        </div>

        {/* Restaurant name */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Restaurant Name{" "}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="e.g. Spice Garden"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Review text */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Review Text{" "}
            <span className="text-muted-foreground">(optional — paste for context)</span>
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Paste the customer review here..."
            rows={4}
            className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Response Tone
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(TONE_LABELS) as Tone[]).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  tone === t
                    ? "bg-primary text-white"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                {TONE_LABELS[t]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generate}
          disabled={rating === 0}
          className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {rating === 0 ? "Select a star rating first" : "Generate Reply"}
        </button>
      </div>

      {/* Reply output */}
      {reply && (
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">
              Your response
            </p>
            <button
              onClick={copy}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? (
                <>
                  <IconCheck className="h-3.5 w-3.5 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <IconCopy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="whitespace-pre-wrap rounded-xl bg-muted/40 p-4 text-sm leading-relaxed text-foreground">
            {reply}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Review and personalise before posting. A personal touch always
            outperforms a generic reply.
          </p>
          <button
            onClick={generate}
            className="mt-3 text-xs font-medium text-primary hover:underline"
          >
            Regenerate →
          </button>
        </div>
      )}
    </div>
  )
}
