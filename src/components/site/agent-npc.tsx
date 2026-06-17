"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { ConversationProvider, useConversation } from "@elevenlabs/react"
import { AnimatePresence, motion } from "framer-motion"

import { siteConfig } from "@/config/site"

const AgentScene = dynamic(
  () => import("./agent-scene").then((mod) => mod.AgentScene),
  { ssr: false }
)

const BUBBLE_TEXT: Record<"idle" | "connecting" | "live" | "error", string> = {
  idle: "Tap to talk to Retilo 🎙️",
  connecting: "Connecting…",
  live: "Listening…",
  error: "Couldn't connect — tap to retry",
}

const SILENCE_TIMEOUT_MS = 90_000
const SILENCE_CHECK_INTERVAL_MS = 5_000

// Events that count as "user is present" — we start the session on the first
// one instead of waiting for a deliberate click on the NPC. Scroll and
// mousemove are enough to prove a real person is there without requiring an
// explicit tap, making the experience feel self-invoked while still satisfying
// browser autoplay rules (which require a user gesture, not necessarily a click).
const TRIGGER_EVENTS = ["click", "scroll", "mousemove", "touchstart", "keydown"] as const

function AgentNPCInner() {
  const [greeted, setGreeted] = useState(false)
  const [skipWalk, setSkipWalk] = useState(false)
  const lastActivityRef = useRef(Date.now())
  const conversation = useConversation({
    onError: (message) => console.error("ElevenLabs conversation error:", message),
    onMessage: () => {
      lastActivityRef.current = Date.now()
    },
  })

  useEffect(() => {
    if (conversation.status !== "connected") return
    lastActivityRef.current = Date.now()
    const id = setInterval(() => {
      if (Date.now() - lastActivityRef.current > SILENCE_TIMEOUT_MS) {
        conversation.endSession()
      }
    }, SILENCE_CHECK_INTERVAL_MS)
    return () => clearInterval(id)
  }, [conversation.status, conversation])

  useEffect(() => {
    setSkipWalk(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  const hasAgentId = Boolean(siteConfig.elevenLabsAgentId)
  const bubbleState =
    conversation.status === "connecting"
      ? "connecting"
      : conversation.status === "connected"
        ? "live"
        : conversation.status === "error"
          ? "error"
          : "idle"

  const startConversation = () => {
    if (!hasAgentId || conversation.status !== "disconnected") return
    // Call startSession directly — the SDK requests mic permission internally.
    // Do NOT call getUserMedia first: that consumes the user-gesture context
    // and leaves the SDK unable to open its own stream.
    conversation.startSession({ agentId: siteConfig.elevenLabsAgentId })
  }

  // Start on the first sign of user presence (scroll / mousemove / touch /
  // keydown) so the conversation kicks off automatically without needing an
  // explicit click on the NPC.
  const startRef = useRef(startConversation)
  startRef.current = startConversation

  useEffect(() => {
    const onFirstPresence = () => {
      startRef.current()
      TRIGGER_EVENTS.forEach((e) => document.removeEventListener(e, onFirstPresence))
    }
    TRIGGER_EVENTS.forEach((e) => document.addEventListener(e, onFirstPresence, { once: false, passive: true }))
    return () => TRIGGER_EVENTS.forEach((e) => document.removeEventListener(e, onFirstPresence))
  }, [])

  return (
    <button
      type="button"
      onClick={startConversation}
      aria-label="Talk to Retilo"
      className="relative h-36 w-28 shrink-0 cursor-pointer text-left sm:h-44 sm:w-32"
    >
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        <AgentScene
          modelUrl="/models/agent.glb"
          skipWalk={skipWalk}
          loopGesture={conversation.status === "disconnected"}
          onGreet={() => setGreeted(true)}
        />
      </motion.div>
      <AnimatePresence>
        {greeted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="glass pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium text-foreground shadow-lg"
          >
            {hasAgentId ? BUBBLE_TEXT[bubbleState] : "Got this in your store? 👀"}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export function AgentNPC() {
  return (
    <ConversationProvider>
      <AgentNPCInner />
    </ConversationProvider>
  )
}
