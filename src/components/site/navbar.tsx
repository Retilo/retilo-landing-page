"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#platform", label: "Platform" },
  { href: "/#apps", label: "Apps" },
  { href: "/#vision", label: "Why Retilo" },
  { href: "/#faq", label: "FAQ" },
  { href: siteConfig.docsUrl, label: "Docs", external: true },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Retilo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
              priority
            />
            <span className="font-brand text-xl tracking-tight text-foreground">
              retilo
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`${siteConfig.appUrl}/login`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </a>
            <a
              href={`${siteConfig.appUrl}`}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple-sm"
            >
              Scan my business free
            </a>
          </div>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div
          className={cn(
            "glass mt-2 flex-col gap-1 rounded-2xl p-3 md:hidden",
            open ? "flex" : "hidden"
          )}
        >
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={siteConfig.appUrl}
            className="mt-1 rounded-xl bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
          >
            Scan my business free
          </a>
        </div>
      </div>
    </header>
  )
}
