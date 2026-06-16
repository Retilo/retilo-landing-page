"use client"

import { AgentNPC } from "./agent-npc"
import { InsightAgent } from "./insight-agent"

// Short, factual lines pulled from claims already made elsewhere on the
// page (feature pills, hero copy) — not new/unverified marketing claims.
const WORKER_LINES = [
  "Replies to WhatsApp leads in seconds ⚡",
  "Never misses a lead after hours 🌙",
]
const CUSTOMER_LINES = [
  "Books appointments while you sleep 📅",
  "Collects Google reviews automatically ⭐",
]

/**
 * Groups the voice agent (suited, ElevenLabs-powered) with two silent
 * "insight" companions, centered below the CTAs/store badges — same
 * placement on every breakpoint, just more breathing room on wider screens.
 * Bubble heights are staggered (see bubbleOffsetClassName on each child) so
 * three speech bubbles sitting this close together never collide.
 */
export function HeroAgents() {
  return (
    <div className="relative mt-14 flex items-end justify-center gap-8 sm:gap-14 lg:gap-20">
      <InsightAgent
        modelUrl="/models/worker.glb"
        lines={WORKER_LINES}
        startDelayMs={300}
        enterFrom="left"
        bubbleOffsetClassName="top-3 sm:top-4"
      />
      <AgentNPC bubbleOffsetClassName="-top-2" />
      <InsightAgent
        modelUrl="/models/customer.glb"
        lines={CUSTOMER_LINES}
        startDelayMs={900}
        enterFrom="left"
        bubbleOffsetClassName="top-3 sm:top-4"
      />
    </div>
  )
}
