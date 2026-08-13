# HowItWorks Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HowItWorks.tsx`
- **Interaction model:** Static (3 numbered step columns with auto-cycling images)

## DOM Structure
```
section.bg-white.px-4.pb-16.pt-10.sm:px-6.sm:pb-20.sm:pt-14.lg:px-8.lg:pb-[92px]
  div.mx-auto.max-w-[1188px]
    div.text-center.mb-10.lg:mb-14
      p.label "HOW IT WORKS"
      h2 "How FeedHive turns your business into content."
    div.grid.grid-cols-1.gap-8.lg:grid-cols-3 (3 columns)
      [Step 1] Learn your brand
      [Step 2] One-click content
      [Step 3] Stay active
```

## Each Step Card Structure
```
div (step card)
  div (UI mockup image container — rounded card, white bg, border, shadow)
    img (the step UI screenshot)
  div.mt-6 (step text)
    p.step-number "01." (gray number)
    h3 "Learn your brand" (bold, dark)
    p (description text)
```

## Computed Styles

### Section label "HOW IT WORKS"
- fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase
- color: rgb(68, 87, 255) = #4457FF

### H2 heading
- fontSize: 44-52px; fontWeight: 700-800; fontFamily: Plus Jakarta Sans
- color: rgb(32,35,43); letterSpacing: -0.03em; lineHeight: 1.1

### Step number (01. 02. 03.)
- fontSize: 14px; color: rgb(159,163,175) = #9fa3af; fontWeight: 600

### Step title h3
- fontSize: 20px; fontWeight: 700; fontFamily: Plus Jakarta Sans
- color: rgb(32,35,43); marginTop: 4px

### Step description
- fontSize: 15px; color: rgb(79,85,98); lineHeight: 22px; textAlign: center (on desktop)

### Image container card
- borderRadius: 16px; backgroundColor: #fff
- border: 1px solid rgba(0,0,0,0.06); boxShadow: subtle
- overflow: hidden
- Divider lines between columns (border-right on first two)

## Assets
- Step 1 image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-1.webp`
- Step 2 image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-2.webp`
- Step 3 image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-3.webp`

## Text Content (verbatim)
- Label: "HOW IT WORKS"
- H2: "How FeedHive turns your business into content."
- Step 1: "01. Learn your brand" — "FeedHive learns your voice, audience, and goals to generate your content."
- Step 2: "02. One-click content" — "Generate on-brand posts, ideas, and variations in just a few clicks."
- Step 3: "03. Stay active" — "Schedule and automate your content across every channel and platform."

## Responsive Behavior
- Desktop: 3-column grid with vertical dividers between steps
- Mobile: single column stack, no dividers
- Each step centered on mobile, left-aligned on desktop
