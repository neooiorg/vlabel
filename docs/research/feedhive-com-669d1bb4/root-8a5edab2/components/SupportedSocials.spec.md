# SupportedSocials Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SupportedSocials.tsx`
- **Interaction model:** Static (SVG icon grid, 2 rows)

## DOM Structure
```
section.overflow-hidden.bg-white.px-0.py-16.sm:px-6.sm:py-20.lg:px-8.lg:py-[82px]
  div.mx-auto.max-w-[1188px]
    div.text-center.mb-10.lg:mb-14
      p.label "SUPPORTED SOCIALS"
      h2 "Publish to all trending social media channels."
    div (icon grid — 2 rows of rounded square icons)
      Row 1: Facebook, Instagram, YouTube, X (Twitter), TikTok, LinkedIn, + more (faded at edges)
      Row 2: Zapier, Discord, Make (purple M icon), + more faded
```

## Icon Grid Layout
- Each icon: ~80px × 80px square card, borderRadius: 20px, backgroundColor: #f4f3f4 or similar light gray
- Icons are SVGs with brand colors
- 2 rows visible, slightly faded at left and right edges (overflow hidden + gradient masks)
- Row 2 offset slightly (shifted right for checkerboard visual)
- 12 total SVG icons confirmed

## Computed Styles

### Section label
- color: #4457FF; fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase

### H2
- Plus Jakarta Sans, ~44px, weight 700, color #20232b, letterSpacing: -0.03em; textAlign: center

### Icon container cards
- width: ~80px; height: ~80px; borderRadius: 20px
- backgroundColor: rgb(244,243,242) or rgba(0,0,0,0.04)
- display: flex; alignItems: center; justifyContent: center

### Icon SVGs
- width: 40px; height: 40px approximately
- Full brand colors (Facebook blue, Instagram gradient, YouTube red, etc.)

### Row wrapper
- display: flex; gap: 10-12px; overflow: hidden
- Fades at edges with gradient mask or CSS overflow

## Social Platforms (Row 1)
- Facebook (blue #1877F2)
- Instagram (gradient pink/orange)
- YouTube (red #FF0000)
- X/Twitter (black)
- TikTok (black + teal/pink)
- LinkedIn (blue #0A66C2)
- (more, faded at right)

## Social Platforms (Row 2)
- Zapier (orange #FF4F00)
- Discord (purple/indigo #5865F2)
- Make/Integromat (purple #6D4AFF or similar "M" logo)
- (more, faded at edges)

## Text Content
- Label: "SUPPORTED SOCIALS"
- H2: "Publish to all trending social media channels."

## Responsive Behavior
- px-0 on mobile (icons go edge to edge)
- Centered on desktop with maxWidth 1188px
