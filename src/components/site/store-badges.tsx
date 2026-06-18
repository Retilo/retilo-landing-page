"use client"

import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react"
import posthog from "posthog-js"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface StoreBadgesProps {
  /** "consumer" → Retilo user app, "business" → Retilo Business app */
  variant?: "consumer" | "business"
  compact?: boolean
  className?: string
}

export function StoreBadges({
  variant = "consumer",
  compact = false,
  className,
}: StoreBadgesProps) {
  const playUrl =
    variant === "business"
      ? siteConfig.providerPlayStoreUrl
      : siteConfig.playStoreUrl
  const appUrl =
    variant === "business"
      ? siteConfig.providerAppStoreUrl
      : siteConfig.appStoreUrl

  const badge = (
    href: string,
    Icon: typeof IconBrandGooglePlay,
    topLine: string,
    bottomLine: string
  ) => {
    const live = Boolean(href)
    const inner = (
      <span
        className={cn(
          "inline-flex items-center gap-2.5 rounded-xl border border-border bg-card transition-all",
          compact ? "px-3 py-2" : "px-4 py-2.5",
          live ? "hover:border-foreground/25 hover:bg-secondary" : "opacity-60"
        )}
      >
        <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
            {live ? topLine : "Coming soon"}
          </span>
          <span
            className={cn("font-semibold", compact ? "text-xs" : "text-sm")}
          >
            {bottomLine}
          </span>
        </span>
      </span>
    )
    return live ? (
      <a
        key={bottomLine}
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          posthog.capture("store_badge_clicked", { store: bottomLine })
        }
      >
        {inner}
      </a>
    ) : (
      <span key={bottomLine} aria-disabled className="cursor-default">
        {inner}
      </span>
    )
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {badge(playUrl, IconBrandGooglePlay, "Get it on", "Google Play")}
      {badge(appUrl, IconBrandAppstore, "Download on the", "App Store")}
    </div>
  )
}
