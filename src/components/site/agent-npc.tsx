"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { ConversationProvider, useConversation } from "@elevenlabs/react"
import { AnimatePresence, motion } from "framer-motion"
import { PhoneOff } from "lucide-react"

import { siteConfig } from "@/config/site"

const AgentScene = dynamic(
  () => import("./agent-scene").then((mod) => mod.AgentScene),
  { ssr: false }
)

const STATUS_HINT: Record<"idle" | "connecting" | "error", string> = {
  idle: "Tap to talk 🎙️",
  connecting: "Connecting…",
  error: "Couldn't connect — tap to retry",
}

const SILENCE_TIMEOUT_MS = 90_000
const SILENCE_CHECK_INTERVAL_MS = 5_000

// Any of these counts as "user is present" — we start the session on the first
// one so the conversation feels self-invoked without violating browser autoplay rules.
const TRIGGER_EVENTS = ["click", "scroll", "mousemove", "touchstart", "keydown"] as const

function AgentNPCInner() {
  const [greeted, setGreeted] = useState(false)
  const [skipWalk, setSkipWalk] = useState(false)
  const [agentText, setAgentText] = useState("")
  const [userText, setUserText] = useState("")
  const lastActivityRef = useRef(Date.now())
  const userClearRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const agentClearRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const conversation = useConversation({
    onError: (message) => console.error("ElevenLabs conversation error:", message),
    onMessage: (payload) => {
      lastActivityRef.current = Date.now()
      if (payload.source === "user") {
        clearTimeout(userClearRef.current)
        setUserText(payload.message)
        userClearRef.current = setTimeout(() => setUserText(""), 4000)
      }
    },
    onAgentChatResponsePart: ({ text, type }) => {
      if (type === "start") {
        clearTimeout(agentClearRef.current)
        setAgentText("")
        setUserText("") // hide user caption when agent begins responding
      } else if (type === "delta") {
        setAgentText((prev) => prev + text)
        lastActivityRef.current = Date.now()
      } else if (type === "stop") {
        agentClearRef.current = setTimeout(() => setAgentText(""), 3500)
      }
    },
  })

  // Clear captions on disconnect
  useEffect(() => {
    if (conversation.status === "disconnected") {
      clearTimeout(userClearRef.current)
      clearTimeout(agentClearRef.current)
      setAgentText("")
      setUserText("")
    }
  }, [conversation.status])

  // Silence backstop
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

  const startConversation = () => {
    if (!hasAgentId || conversation.status !== "disconnected") return
    conversation.startSession({ agentId: siteConfig.elevenLabsAgentId })
  }

  // Keep ref fresh so the first-presence effect always calls the latest version
  const startRef = useRef(startConversation)
  startRef.current = startConversation

  // Start the session on the first sign of user presence
  useEffect(() => {
    const onFirstPresence = () => {
      startRef.current()
      TRIGGER_EVENTS.forEach((e) => document.removeEventListener(e, onFirstPresence))
    }
    TRIGGER_EVENTS.forEach((e) =>
      document.addEventListener(e, onFirstPresence, { passive: true })
    )
    return () => TRIGGER_EVENTS.forEach((e) => document.removeEventListener(e, onFirstPresence))
  }, [])

  const isConnected = conversation.status === "connected"

  const hintLabel =
    conversation.status === "connecting" ? STATUS_HINT.connecting
    : conversation.status === "error" ? STATUS_HINT.error
    : STATUS_HINT.idle

  // Agent caption wins when both are present
  const activeCaption = agentText || userText
  const captionSource: "agent" | "user" = agentText ? "agent" : "user"

  return (
    <div className="relative flex flex-col items-center">

      {/* Caption strip — above the model's head */}
      <div className="mb-1 flex min-h-[64px] w-[220px] items-end justify-center">
        <AnimatePresence mode="popLayout">
          {isConnected && activeCaption ? (
            <motion.div
              key={captionSource}
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="w-full rounded-2xl px-3.5 py-2.5 text-[11px] leading-snug shadow-md"
              style={{
                background:
                  captionSource === "agent"
                    ? "hsl(262 78% 55% / 0.92)"
                    : "rgba(255,255,255,0.88)",
                color: captionSource === "agent" ? "#fff" : "#1a1a1a",
                backdropFilter: "blur(8px)",
                border:
                  captionSource === "agent"
                    ? "1px solid hsl(262 78% 70% / 0.4)"
                    : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-wider opacity-60">
                {captionSource === "agent" ? "Retilo AI" : "You"}
              </span>
              {activeCaption}
            </motion.div>
          ) : greeted && !isConnected ? (
            <motion.div
              key="hint"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium text-foreground shadow-lg"
            >
              {hasAgentId ? hintLabel : "Got this in your store? 👀"}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* NPC model — enlarged to grab attention */}
      <button
        type="button"
        onClick={startConversation}
        aria-label="Talk to Retilo"
        className="relative h-52 w-36 shrink-0 cursor-pointer text-left sm:h-64 sm:w-44"
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
      </button>

      {/* End call button — appears when connected */}
      <AnimatePresence>
        {isConnected && (
          <motion.button
            type="button"
            onClick={() => conversation.endSession()}
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="mt-2 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.52 0.22 25)" }}
            aria-label="End call"
          >
            <PhoneOff className="h-3.5 w-3.5" />
            End call
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export function AgentNPC() {
  return (
    <ConversationProvider>
      <AgentNPCInner />
    </ConversationProvider>
  )
}
