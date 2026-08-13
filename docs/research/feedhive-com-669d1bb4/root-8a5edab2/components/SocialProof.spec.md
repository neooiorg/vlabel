# SocialProof Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SocialProof.tsx`
- **Interaction model:** Static (testimonial + 2 UI chart mockups)

## DOM Structure
```
section
  div.mx-auto.max-w-[1188px].px-4.lg:px-8
    div.text-center.mb-10
      p.label "THE EFFECTS OF FEEDHIVE"
      h2 "What happens when social starts working."
    div (testimonial row)
      img (Francis Russell avatar, rounded-full)
      p.quote ""FeedHive turned social into a channel that consistently drives traffic for us.""
      p.attribution "Francis Russell"
    div.grid.grid-cols-1.gap-6.lg:grid-cols-2.mt-10
      div.card (Followers bar chart mockup)
      div.card (Visitors by Country line chart mockup)
    div.grid.grid-cols-1.gap-0.lg:grid-cols-2.mt-8 (benefits row)
      div (Get more reach)
      div (Drive more traffic)
```

## Computed Styles

### Section label
- fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase
- color: rgb(68, 87, 255) = #4457FF

### H2
- Plus Jakarta Sans, 44-52px, weight 700-800, color #20232b

### Testimonial quote
- fontSize: 15-16px; fontStyle: normal; color: rgb(32,35,43)
- fontWeight: 400; quotes displayed with actual "" characters

### Attribution
- fontSize: 14px; color: rgb(79,85,98); fontWeight: 500

### Avatar img
- width: 44px; height: 44px; borderRadius: 9999px (rounded-full)
- objectFit: cover

### Chart cards
- backgroundColor: #fff; border: 1px solid rgba(0,0,0,0.06)
- borderRadius: 16px; padding: 20-24px
- boxShadow: 0 2px 12px rgba(0,0,0,0.05)

### Followers chart mockup details
- "FOLLOWERS" label uppercase gray
- "Hours" / "Days" tab toggle (Days active in blue)
- "<March>" month navigation
- Blue rising bar chart (bars getting progressively taller left to right)
- X-axis: 1st, 5th, 10th, 14th, 18th, 23rd, 27th, 31st

### Visitors by Country chart mockup details
- "Visitors by Country over time" title
- Multi-line chart (3 lines: blue, purple, violet)
- Y-axis: 1K, 2K, 3K, 4K, 5K
- X-axis: Feb 20, Feb 27, Mar 03, Mar 10

### Benefits row (below charts)
- Divider between the two benefit items (border or line)
- Each has title + description, centered

## Assets
- Avatar: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/testimonial-user.webp`
- Showcase image 1: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-1.webp`
- Showcase image 2: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-2.webp`

## Text Content (verbatim)
- Label: "THE EFFECTS OF FEEDHIVE"
- H2: "What happens when social starts working."
- Quote: "FeedHive turned social into a channel that consistently drives traffic for us."
- Attribution: "Francis Russell"
- Benefit 1 title: "Get more reach"
- Benefit 1 desc: "Consistent, high-quality content gets you more reach, engagement, and followers."
- Benefit 2 title: "Drive more traffic"
- Benefit 2 desc: "Followers turn into traffic when you share content that resonates."

## Responsive Behavior
- Desktop: 2-col chart grid side by side
- Mobile: stacked single column
