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
  idle: "Tap to hear from Retilo 🔊",
  connecting: "Connecting…",
  live: "Listening…",
  error: "Couldn't connect — tap to retry",
}

// Client-side backstop: end the call if neither side has said anything for
// this long, regardless of whatever turn-timeout is (or isn't) configured
// on the ElevenLabs agent itself.
const SILENCE_TIMEOUT_MS = 90_000
const SILENCE_CHECK_INTERVAL_MS = 5_000

/**
 * Walking 3D agent in the hero: walks in, turns to face the visitor, then
 * shows a tappable prompt. Tapping starts a live ElevenLabs voice
 * conversation (requires mic permission — browsers block this without a
 * user gesture, hence the tap instead of auto-playing on load).
 */
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

  // Silence backstop — see SILENCE_TIMEOUT_MS above.
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

  const handleTap = async () => {
    // No agent ID configured yet — fall back to the old "link to app" CTA
    // instead of going silent.
    if (!hasAgentId) {
      window.location.href = siteConfig.appUrl
      return
    }
    if (conversation.status !== "disconnected") return
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      conversation.startSession({ agentId: siteConfig.elevenLabsAgentId })
    } catch (err) {
      console.error("Mic permission / session start failed:", err)
    }
  }

  // Mic/audio just needs *a* user gesture, not specifically a click on this
  // character — so the first click/tap anywhere on the page also starts the
  // conversation, making it feel closer to automatic while staying inside
  // browser autoplay rules. Stays a no-op once already connecting/connected.
  const handleTapRef = useRef(handleTap)
  handleTapRef.current = handleTap

  useEffect(() => {
    const onFirstInteraction = () => {
      handleTapRef.current()
      document.removeEventListener("click", onFirstInteraction)
    }
    document.addEventListener("click", onFirstInteraction)
    return () => document.removeEventListener("click", onFirstInteraction)
  }, [])

  return (
    <button
      type="button"
      onClick={handleTap}
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
