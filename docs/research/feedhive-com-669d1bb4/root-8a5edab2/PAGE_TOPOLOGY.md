# FeedHive Homepage - Page Topology

**Source URL:** https://www.feedhive.com/
**Site Key:** feedhive-com-669d1bb4
**Page Key:** root-8a5edab2
**Route:** src/app/page.tsx

## Page Layout
- Single-column scroll page, white background `#ffffff`
- No sticky/fixed header (header is static)
- Total page height: ~10,177px

## Sections (top to bottom)

| # | Component | Tag | Key Class | Interaction |
|---|-----------|-----|-----------|-------------|
| 0 | AnnouncementBar | DIV | `bg-[#f4f3f2] border-b border-black/5` | Static |
| 1 | Navigation | HEADER | `relative z-30 px-4 lg:px-8` | Static hover states on links |
| 2 | HeroSection | SECTION | `relative isolate overflow-hidden` | Click-driven tab switching (12 tabs) |
| 3 | TrustedByBrands | SECTION | `bg-white px-4 py-7 lg:py-8` | Static |
| 4 | HowItWorks | SECTION | `bg-white px-4 pb-16 pt-10` | Static with 3 numbered steps |
| 5 | VideoSection | SECTION | — | Static (embedded video) |
| 6 | SocialProof | SECTION | — | Static (charts + testimonial) |
| 7 | SupportedSocials | SECTION | `overflow-hidden bg-white px-0 py-16` | Static (SVG icon grid) |
| 8 | AgenticWorkflows | SECTION | — | Static (feature cards) |
| 9 | FeatureShowcase | SECTION | — | Static (3 feature panels with mockup images) |
| 10 | FeaturesGrid | SECTION | — | Static (large icon grid with highlighted cards) |
| 11 | GradientCTA | SECTION | `bg-white px-4 pb-10 pt-7` | Static (gradient card inside) |
| 12 | Footer | FOOTER | — | Static hover states on links |

## Z-Index Layers
- Navigation header: z-30
- Page content: default flow

## Key Dependencies
- HeroSection contains both the hero headline area AND the 12-tab feature switcher
- The tab switcher changes the right-side product screenshot image on click
- No scroll-triggered behavior found

## Fonts
- Body: Inter (from Next.js font)
- Headings: Plus Jakarta Sans (from Next.js font)

## Color Palette
- Primary: #4457FF (rgb(68, 87, 255))
- Primary hover: #4F5FD7 (rgb(79, 95, 215))
- Background: #ffffff
- Body text: #20232b (rgb(32, 35, 43))
- Secondary text: #4f5562 (rgb(79, 85, 98))
- Muted text: #767b84
- Light bg: #f4f3f2 (rgb(244, 243, 242))
- Border: #dfdfe4 (rgb(223, 223, 228))
- Dark surface: #17191f (rgb(23, 25, 31))
- Card border color: oklab(0 0 0 / 0.05)

## Custom CSS Classes
- `.cta-gradient-ring` — rotating conic-gradient border animation on hover
- `.cta-gradient-ring-pill` — pill variant of above
