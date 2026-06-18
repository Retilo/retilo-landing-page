<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Retilo landing page. The existing `posthog-provider.tsx` was migrated from the legacy `PostHogProvider`/`posthog.init()` component pattern to the modern `instrumentation-client.ts` initialization approach (required for Next.js 15.3+). A reverse proxy was wired through Next.js rewrites so PostHog requests route via `/ingest` rather than directly to PostHog servers (improving ad-blocker resilience). Nine business events covering the full visitor journey — from navbar CTAs through pricing tier selections to FAQ exploration — were added across seven files.

| Event name | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks the primary 'Get started free' button in the hero section. | `src/app/_sections/hero.tsx` |
| `hero_see_how_it_works_clicked` | User clicks the 'See how it works' secondary CTA in the hero section. | `src/app/_sections/hero.tsx` |
| `store_badge_clicked` | User clicks a mobile app download badge (Google Play or App Store). | `src/components/site/store-badges.tsx` |
| `pricing_cta_clicked` | User clicks a pricing plan CTA button, indicating purchase or sales intent. | `src/app/_sections/pricing.tsx` |
| `bottom_cta_get_started_clicked` | User clicks 'Get started free' in the bottom CTA section. | `src/app/_sections/cta.tsx` |
| `bottom_cta_book_demo_clicked` | User clicks 'Book a demo' in the bottom CTA section, indicating high purchase intent. | `src/app/_sections/cta.tsx` |
| `navbar_cta_clicked` | User clicks the 'Scan my business free' CTA in the navigation bar. | `src/components/site/navbar.tsx` |
| `navbar_signin_clicked` | User clicks the 'Sign in' link in the navigation bar. | `src/components/site/navbar.tsx` |
| `faq_question_expanded` | User expands a FAQ accordion item to read the answer. | `src/app/_sections/faq.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/476230/dashboard/1731091)
- [CTA Performance (wizard)](https://us.posthog.com/project/476230/insights/1ag2rF2X) — Hero, navbar, and bottom CTA click trends over time
- [Landing page conversion funnel (wizard)](https://us.posthog.com/project/476230/insights/NLYMTKzk) — Pageview → Hero CTA → Pricing CTA conversion rates
- [Pricing tier popularity (wizard)](https://us.posthog.com/project/476230/insights/fDuJ0uv9) — Which pricing tier gets the most CTA clicks
- [FAQ engagement (wizard)](https://us.posthog.com/project/476230/insights/Om3i38Up) — How often visitors expand FAQ items
- [Demo booking requests (wizard)](https://us.posthog.com/project/476230/insights/9eXKd4ou) — Total 'Book a demo' clicks (high-intent signal)

## Verify before merging

- [ ] Run a full production build (`pnpm build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` (or any onboarding scripts) so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or equivalent bundler step) into CI so production stack traces de-minify in PostHog Error Tracking.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
