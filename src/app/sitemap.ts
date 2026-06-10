import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/help`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/refund`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ]
}
