import type { Metadata } from "next"
import Link from "next/link"
import { IconArrowRight, IconClock } from "@tabler/icons-react"

import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Restaurant Growth Tips for Indian Businesses",
  description:
    "Practical guides for Indian restaurant owners: Google reviews, local SEO, WhatsApp marketing, AI tools, and more. No fluff — just actionable advice.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Retilo Blog — Restaurant Growth Tips",
    description:
      "Practical guides for Indian restaurant owners: reviews, SEO, WhatsApp marketing, AI tools.",
  },
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <section className="relative pb-24 pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.10),transparent_70%)]" />
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          Restaurant Growth
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Grow your restaurant.
          <br />
          <span className="gradient-text">One read at a time.</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Practical guides for Indian restaurant and local business owners —
          Google reviews, WhatsApp marketing, AI tools, and more. No fluff.
        </p>

        {/* Featured post */}
        {sorted[0] && (
          <Link
            href={`/blog/${sorted[0].slug}`}
            className="group mt-12 flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:flex-row"
          >
            <div className="flex flex-1 flex-col justify-between p-7">
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${sorted[0].categoryColor}`}
                >
                  {sorted[0].category}
                </span>
                <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight text-foreground">
                  {sorted[0].title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {sorted[0].description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={sorted[0].date}>
                    {new Date(sorted[0].date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span className="flex items-center gap-1">
                    <IconClock className="h-3 w-3" />
                    {sorted[0].readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary">
                  Read
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of posts */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sorted.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h2 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <IconClock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary">
                  Read
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
