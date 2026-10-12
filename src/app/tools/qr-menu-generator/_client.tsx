"use client"

import { useEffect, useState } from "react"
import { IconDownload, IconQrcode } from "@tabler/icons-react"

function buildQrUrl(data: string, size = 280) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&color=221C35&bgcolor=ffffff&margin=10&qzone=2`
}

export function QrMenuClient() {
  const [menuUrl, setMenuUrl] = useState("")
  const [restaurantName, setRestaurantName] = useState("")
  const [qrSrc, setQrSrc] = useState("")
  const [generated, setGenerated] = useState(false)

  function generate() {
    if (!menuUrl.trim()) return
    const url = menuUrl.startsWith("http") ? menuUrl : `https://${menuUrl}`
    setQrSrc(buildQrUrl(url, 400))
    setGenerated(true)
  }

  async function download() {
    if (!qrSrc) return
    try {
      const res = await fetch(qrSrc)
      const blob = await res.blob()
      const objUrl = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = objUrl
      a.download = `${restaurantName || "menu"}-qr-code.png`
      a.click()
      URL.revokeObjectURL(objUrl)
    } catch {
      window.open(qrSrc, "_blank")
    }
  }

  // Reset generated state when URL changes
  useEffect(() => {
    setGenerated(false)
  }, [menuUrl])

  const isValid = menuUrl.trim().length > 3

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Restaurant Name <span className="text-muted-foreground">(optional, for filename)</span>
          </label>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="e.g. Spice Garden"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">
            Menu URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            value={menuUrl}
            onChange={(e) => setMenuUrl(e.target.value)}
            placeholder="e.g. retilo.io/yourmenu or zomato.com/restaurant"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            Works with any URL — Zomato, Swiggy, Google Photos, PDF link, or
            your own website.
          </p>
        </div>

        <button
          onClick={generate}
          disabled={!isValid}
          className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Generate QR Code
        </button>
      </div>

      {/* QR Preview */}
      {generated && qrSrc && (
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <div className="inline-block overflow-hidden rounded-2xl border-2 border-border bg-white p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrSrc}
              alt="QR code for your restaurant menu"
              width={200}
              height={200}
              className="h-[200px] w-[200px]"
            />
          </div>

          {restaurantName && (
            <p className="mt-3 text-sm font-semibold text-foreground">
              {restaurantName}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Scan to view menu
          </p>

          <button
            onClick={download}
            className="mx-auto mt-5 flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <IconDownload className="h-4 w-4" />
            Download PNG
          </button>

          <p className="mt-4 text-xs text-muted-foreground">
            Print at 300dpi for crisp table cards. Minimum 4×4 cm recommended.
          </p>
        </div>
      )}

      {!generated && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 py-12 text-center">
          <IconQrcode className="h-10 w-10 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">
            Your QR code will appear here
          </p>
        </div>
      )}
    </div>
  )
}
