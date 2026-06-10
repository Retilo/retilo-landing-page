"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

/**
 * The template's 3D clay bubble render (public/Hero-Clay.png) animated the
 * template's way: spring entrance + scroll-linked parallax (each cluster
 * moves at its own depth/speed and rotates slightly as you scroll), with a
 * slow idle float on top. Recolored to Retilo lavender via `clay-retilo`
 * (hue-rotate) — remove that class to fall back to the original peach.
 */
export function ClayBubbles({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // Different depths: right cluster is "closer" (moves more), left is further.
  const yRight = useTransform(progress, [0, 1], [0, 220])
  const yLeft = useTransform(progress, [0, 1], [0, 120])
  const rotateRight = useTransform(progress, [0, 1], [0, 14])
  const rotateLeft = useTransform(progress, [0, 1], [0, -10])
  const scaleRight = useTransform(progress, [0, 1], [1, 1.12])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Right cluster — near depth */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.15 }}
        style={
          reduce
            ? undefined
            : { y: yRight, rotate: rotateRight, scale: scaleRight }
        }
        className="absolute -right-40 top-8 sm:-right-24 lg:-right-10"
      >
        <Image
          src="/Hero-Clay.png"
          alt=""
          width={760}
          height={428}
          priority
          className="clay-retilo animate-orb-float w-[420px] mix-blend-multiply opacity-90 sm:w-[560px] lg:w-[640px]"
          style={{ animationDuration: "16s" }}
        />
      </motion.div>

      {/* Left cluster — far depth, mirrored */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.35 }}
        style={reduce ? undefined : { y: yLeft, rotate: rotateLeft }}
        className="absolute -left-44 bottom-0 sm:-left-28 lg:-left-12"
      >
        <Image
          src="/Hero-Clay.png"
          alt=""
          width={760}
          height={428}
          priority
          className="clay-retilo animate-orb-float w-[380px] -scale-x-100 mix-blend-multiply opacity-80 sm:w-[480px]"
          style={{ animationDuration: "20s", animationDelay: "-7s" }}
        />
      </motion.div>
    </div>
  )
}
