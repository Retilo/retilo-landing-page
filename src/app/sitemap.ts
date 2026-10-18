import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { blogPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/dinein`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Free tools — high-priority SEO pages
    { url: `${siteConfig.url}/tools`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/tip-calculator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/food-cost-calculator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/gst-calculator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/qr-menu-generator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/restaurant-name-generator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/tools/review-reply-generator`, lastModified, changeFrequency: "weekly", priority: 0.9 },

    // Blog
    { url: `${siteConfig.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Support / legal
    { url: `${siteConfig.url}/help`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/refund`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ]
}
