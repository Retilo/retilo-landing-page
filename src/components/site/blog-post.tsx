import Link from "next/link"
import { IconArrowLeft, IconArrowRight, IconChevronRight, IconClock } from "@tabler/icons-react"

import { siteConfig } from "@/config/site"

interface BlogPostProps {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  children: React.ReactNode
}

export function BlogPost({
  title,
  description,
  date,
  readTime,
  category,
  categoryColor,
  children,
}: BlogPostProps) {
  const formatted = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

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
          <Link href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <IconChevronRight className="h-3 w-3" />
          <span className="truncate text-foreground">{title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span
            className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColor}`}
          >
            {category}
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={date}>{formatted}</time>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="flex items-center gap-1.5">
              <IconClock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10 h-px bg-border" />

        {/* Content */}
        <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_em]:text-foreground/70 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_p]:text-[15px] [&_strong]:text-foreground [&_ul]:mt-3 [&_ul]:space-y-2">
          {children}
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-indigo-700 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Powered by Retilo
          </p>
          <h2 className="mt-2 text-xl font-bold">
            Put this into practice — automatically.
          </h2>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Retilo handles reviews, AI call answering, WhatsApp marketing, and
            bookings from one dashboard built for Indian restaurants.
          </p>
          <a
            href={siteConfig.appRegisterUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-opacity hover:opacity-90"
          >
            Get started free
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Back link */}
        <Link
          href="/blog"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <IconArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </div>
    </section>
  )
}
