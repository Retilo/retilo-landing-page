"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { AnimatePresence, motion } from "framer-motion"

const AgentScene = dynamic(
  () => import("./agent-scene").then((mod) => mod.AgentScene),
  { ssr: false }
)

const BUBBLE_CYCLE_MS = 4500

/**
 * A non-interactive companion character: walks in, turns, then cycles
 * through a few short product-fact lines forever (no voice, no click —
 * just continuous motion so the hero never reads as static).
 */
export function InsightAgent({
  modelUrl,
  lines,
  startDelayMs = 0,
  enterFrom = "left",
  bubbleOffsetClassName = "top-0",
}: {
  modelUrl: string
  lines: string[]
  startDelayMs?: number
  enterFrom?: "left" | "right"
  bubbleOffsetClassName?: string
}) {
  const [started, setStarted] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const [skipWalk, setSkipWalk] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    setSkipWalk(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const t = setTimeout(() => setStarted(true), startDelayMs)
    return () => clearTimeout(t)
  }, [startDelayMs])

  useEffect(() => {
    if (!greeted || lines.length < 2) return
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % lines.length)
    }, BUBBLE_CYCLE_MS)
    return () => clearInterval(id)
  }, [greeted, lines.length])

  return (
    <div className="relative h-28 w-20 shrink-0 sm:h-36 sm:w-24">
      {started && (
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <AgentScene
            modelUrl={modelUrl}
            skipWalk={skipWalk}
            loopGesture
            enterFrom={enterFrom}
            onGreet={() => setGreeted(true)}
          />
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        {greeted && (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className={`glass pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl px-3 py-1.5 text-[11px] font-medium text-foreground shadow-lg sm:text-xs ${bubbleOffsetClassName}`}
          >
            {lines[lineIndex]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
