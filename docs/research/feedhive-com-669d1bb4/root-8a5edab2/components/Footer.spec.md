# Footer Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer.tsx`
- **Interaction model:** Static hover states on links

## DOM Structure
```
footer.bg-white.px-4.lg:px-8
  div.mx-auto.max-w-[1188px]
    div.border-t.border-black/5 (top divider)
    div.grid.grid-cols-1.lg:grid-cols-[auto_1fr_1fr_1fr_1fr].gap-8.py-12
      div (brand col)
        a (logo)
          img logo.webp
          span "FeedHive"
        p (tagline)
        div.flex.flex-wrap.gap-2.mt-4 (feature tags)
          span "AI-powered publishing"
          span "Approval workflows"
          span "Smart scheduling"
          span "Team collaboration"
      div (Product col)
        h4 "Product"
        ul: Scheduling, Automation, FeedHive AI, Social Inbox, Collaboration
      div (Resources col)
        h4 "Resources"
        ul: Help center, Integrations, API, Blog
      div (Company col)
        h4 "Company"
        ul: Pricing, Brand kit, Privacy, Terms
      div (Other products col)
        h4 "Other products"
        ul: LinkDrip, Aidbase, Image Creator
    div.border-t.border-black/5.py-5.flex.items-center.justify-between (bottom bar)
      div (social icons: Facebook, Threads, Instagram, LinkedIn, YouTube)
      div (feature pills: MULTI-CHANNEL, FREE TRIAL, WEEKLY CONTENT PLANNING, AI CREDITS INCLUDED)
    div.py-4.flex.items-center.justify-between (copyright row)
      p "© 2026 FeedHive. All rights reserved."
      div (Privacy | Terms | Cookie preferences)
```

## Computed Styles

### Footer background
- backgroundColor: #fff
- padding: 0 16px (mobile) / 0 32px (desktop)

### Logo + name row
- img: height 32px; width: auto
- "FeedHive" text: fontSize 18px; fontWeight: 700; Plus Jakarta Sans; color: #20232b

### Tagline
- fontSize: 14px; color: #4f5562; lineHeight: 22px; maxWidth: 280px; marginTop: 12px

### Feature tags (pill badges)
- borderRadius: 9999px; border: 1px solid #dfdfe4
- padding: 4px 12px; fontSize: 12px; color: #4f5562; fontWeight: 500
- display: inline-flex

### Nav column header
- fontSize: 14px; fontWeight: 600; color: #20232b; marginBottom: 16px; letterSpacing: -0.01em

### Nav links
- fontSize: 14px; color: #4f5562; lineHeight: 32px (generous spacing)
- hover: color: #20232b

### Social icons (circular outlined)
- width: 36px; height: 36px; borderRadius: 50%
- border: 1px solid #dfdfe4; display: flex; alignItems: center; justifyContent: center
- hover: border-color: #20232b

### Feature pills (bottom bar — uppercase)
- fontSize: 11px; fontWeight: 600; letterSpacing: 0.06em; textTransform: uppercase
- color: #4f5562; borderRadius: 9999px; border: 1px solid #dfdfe4; padding: 4px 12px

### Copyright text
- fontSize: 13px; color: #9fa3af

## Social Icons
- Facebook (fa icon)
- Threads (threads icon)
- Instagram
- LinkedIn
- YouTube

## Text Content (verbatim)
- Tagline: "Create content at scale. Social media using AI, automation, and a workspace your whole team can use."
- Feature tags: "AI-powered publishing", "Approval workflows", "Smart scheduling", "Team collaboration"
- Product links: Scheduling, Automation, FeedHive AI, Social Inbox, Collaboration
- Resources: Help center, Integrations, API, Blog
- Company: Pricing, Brand kit, Privacy, Terms
- Other products: LinkDrip, Aidbase, Image Creator
- Bottom pills: "MULTI-CHANNEL", "FREE TRIAL", "WEEKLY CONTENT PLANNING", "AI CREDITS INCLUDED"
- Copyright: "© 2026 FeedHive. All rights reserved."
- Bottom links: Privacy, Terms, Cookie preferences

## Responsive Behavior
- Desktop: 5-column grid (brand + 4 nav columns)
- Mobile: stacked single column
- Bottom bar: stacks on mobile
