interface LegalPageProps {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

/**
 * Shared shell for policy/company pages (/privacy, /terms, /refund, /help,
 * /about). Renders a consistent header + readable prose column.
 */
export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <section className="relative pb-24 pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(262_88%_66%/0.12),transparent_70%)]" />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lastUpdated && (
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        )}
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </section>
  )
}
