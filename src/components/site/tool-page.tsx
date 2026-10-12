import Link from "next/link"
import { IconArrowRight, IconChevronRight } from "@tabler/icons-react"

import { siteConfig } from "@/config/site"

interface ToolPageProps {
  title: string
  description: string
  badge?: string
  children: React.ReactNode
}

export function ToolPage({ title, description, badge, children }: ToolPageProps) {
  return (
    <section className="relative pb-24 pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.10),transparent_70%)]" />
      <div className="mx-auto max-w-2xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <IconChevronRight className="h-3 w-3" />
          <Link href="/tools" className="transition-colors hover:text-foreground">
            Free Tools
          </Link>
          <IconChevronRight className="h-3 w-3" />
          <span className="text-foreground">{title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          {badge && (
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>

        {/* Tool content */}
        {children}

        {/* Retilo CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-indigo-700 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Powered by Retilo
          </p>
          <h2 className="mt-2 text-xl font-bold">
            Want all of this built into your restaurant?
          </h2>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Retilo gives you AI review replies, call handling, booking links, GST
            reports, and more — from one dashboard.
          </p>
          <a
            href={siteConfig.appRegisterUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-opacity hover:opacity-90"
          >
            Try Retilo Free
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
