"use client"

import { usePostHog } from "posthog-js/react"
import { useCallback } from "react"

export function useTrack() {
  const ph = usePostHog()

  return useCallback(
    (event: string, props?: Record<string, unknown>) => {
      try {
        ph?.capture(event, props)
      } catch {
        // PostHog not initialised — fail silently
      }
    },
    [ph]
  )
}
