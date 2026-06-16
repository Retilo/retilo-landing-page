/**
 * Single source of truth for everything the footer / legal pages /
 * OAuth-verification reviewers need. Mirrors the app-config model used by
 * the Retilo mobile apps (site_name, inquiry_email, helpline_number,
 * playstore_url, appstore_url, provider_*_url, social urls, policies…).
 *
 * Fill in real store / social URLs as they go live — everything on the
 * site reads from here.
 */
export const siteConfig = {
  siteName: "Retilo",
  siteDescription:
    "Retilo is the AI operating system for local businesses — reviews, an AI phone receptionist, bookings, local discovery and demand forecasting in one place.",
  url: "https://retilo.io",
  apiUrl: "https://api.retilo.com",
  appUrl: "https://app.retilo.io",

  // Canonical policy URLs (referenced by the mobile apps' config + OAuth verification)
  termsUrl: "https://retilo.io/terms",
  privacyUrl: "https://retilo.io/privacy",
  helpUrl: "https://retilo.io/help",
  refundUrl: "https://retilo.io/refund",

  // Contact (shown in footer + help page; used by OAuth reviewers)
  inquiryEmail: "satwik@retilo.io",
  helplineNumber: "+91 72888 07097",
  address: "Hyderabad, Telangana, India",

  // Consumer app (Retilo — book & discover local stores)
  playStoreUrl: "", // e.g. https://play.google.com/store/apps/details?id=com.retilo.app
  appStoreUrl: "", // e.g. https://apps.apple.com/app/id...

  // Merchant app (Retilo Business)
  providerPlayStoreUrl: "",
  providerAppStoreUrl: "",

  // Docs
  docsUrl: "https://docs.retilo.io",

  // Booking — same Calendly used across retilo-frontend (nav/hero/footer/CTA)
  calendlyUrl: "https://calendly.com/satwikloka321/retilo",

  // ElevenLabs Conversational AI — public agent ID for the hero's
  // voice-talkback. Public agents need no API key/server route.
  elevenLabsAgentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "",

  // Social
  twitterUrl: "https://x.com/Retilo_",
  instagramUrl: "https://www.instagram.com/retilo.io?igsh=a2l6eXZneDg1aml6",
  linkedinUrl: "https://www.linkedin.com/company/retiloio/",
  youtubeUrl: "",
  facebookUrl: "",

  siteCopyright: `© ${new Date().getFullYear()} Retilo. All rights reserved.`,
}

export type SiteConfig = typeof siteConfig
