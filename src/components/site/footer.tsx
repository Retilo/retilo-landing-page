import Image from "next/image"
import Link from "next/link"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { StoreBadges } from "@/components/site/store-badges"

const productLinks = [
  { href: "/#platform", label: "Platform" },
  { href: "/#apps", label: "Retilo for Business" },
  { href: "/#apps", label: "Retilo Consumer App" },
  { href: siteConfig.appUrl, label: "Web Dashboard", external: true },
  { href: siteConfig.docsUrl, label: "Documentation", external: true },
]

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/help", label: "Help & Support" },
  { href: "/#vision", label: "Our vision" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund & Cancellation Policy" },
]

const socials = [
  { href: siteConfig.twitterUrl, label: "X (Twitter)", Icon: IconBrandX },
  { href: siteConfig.instagramUrl, label: "Instagram", Icon: IconBrandInstagram },
  { href: siteConfig.linkedinUrl, label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: siteConfig.youtubeUrl, label: "YouTube", Icon: IconBrandYoutube },
  { href: siteConfig.facebookUrl, label: "Facebook", Icon: IconBrandFacebook },
].filter((s) => Boolean(s.href))

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Retilo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg"
              />
              <span className="font-brand text-xl text-foreground">retilo</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.siteDescription}
            </p>
            <div className="mt-6">
              <StoreBadges compact />
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.inquiryEmail}`}
                  className="flex items-start gap-2 transition-colors hover:text-foreground"
                >
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{siteConfig.inquiryEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.helplineNumber.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 transition-colors hover:text-foreground"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{siteConfig.helplineNumber}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">{siteConfig.siteCopyright}</p>
          {socials.length > 0 && (
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
