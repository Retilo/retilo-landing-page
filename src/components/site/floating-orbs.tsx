import { cn } from "@/lib/utils"

interface Orb {
  size: number
  top: string
  left: string
  gradient: string
  duration: number
  delay: number
  blur?: string
}

/**
 * Soft glowing "bubbles" drifting in the background — the Retilo-purple
 * answer to the old template's 3D clay blobs. Pure CSS (GPU transforms),
 * aria-hidden, sits behind content.
 */
const orbs: Orb[] = [
  {
    size: 220,
    top: "12%",
    left: "6%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(262 88% 70% / 0.55), hsl(262 88% 50% / 0.12) 60%, transparent 75%)",
    duration: 13,
    delay: 0,
  },
  {
    size: 130,
    top: "55%",
    left: "12%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(295 85% 70% / 0.5), hsl(295 85% 55% / 0.1) 60%, transparent 75%)",
    duration: 17,
    delay: -4,
  },
  {
    size: 170,
    top: "18%",
    left: "82%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(235 90% 70% / 0.5), hsl(235 90% 55% / 0.1) 60%, transparent 75%)",
    duration: 15,
    delay: -8,
  },
  {
    size: 90,
    top: "62%",
    left: "87%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(262 88% 75% / 0.6), hsl(262 88% 55% / 0.12) 60%, transparent 75%)",
    duration: 11,
    delay: -2,
  },
  {
    size: 60,
    top: "38%",
    left: "73%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(215 90% 72% / 0.55), hsl(215 90% 55% / 0.1) 60%, transparent 75%)",
    duration: 9,
    delay: -6,
  },
  {
    size: 70,
    top: "30%",
    left: "20%",
    gradient: "radial-gradient(circle at 30% 30%, hsl(280 85% 72% / 0.5), hsl(280 85% 55% / 0.1) 60%, transparent 75%)",
    duration: 12,
    delay: -9,
  },
]

export function FloatingOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {orbs.map((orb, i) => (
        <span
          key={i}
          className="animate-orb-float absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.gradient,
            filter: orb.blur ?? "blur(2px)",
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
