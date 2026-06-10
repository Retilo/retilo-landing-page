import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(262_88%_66%/0.15),transparent_70%)]" />

      <div className="px-6 text-center">
        <p className="font-brand text-7xl gradient-text sm:text-8xl">404</p>
        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          This street doesn&apos;t exist on our map.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
          The page you&apos;re looking for moved or never opened shop. Let&apos;s
          get you back to the high street.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
