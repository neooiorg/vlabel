# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HeroSection.tsx`
- **Interaction model:** Click-driven tab switching (12 tabs → different product screenshot)
- **Screenshot:** `docs/design-references/feedhive-com-669d1bb4/root-8a5edab2/hero.png`

## DOM Structure
```
section.relative.isolate.overflow-hidden
  div.pointer-events-none.absolute.inset-0  (background grid pattern overlay)
  div.relative.z-10
    section.relative.overflow-hidden.px-4.pb-2.pt-10.lg:px-8.lg:pb-10.lg:pt-14.xl:pt-16
      div.pointer-events-none.absolute.inset-y-0.right-0.z-20.hidden.w-[100px].bg-gradient  (right fade gradient)
      div.mx-auto.grid.max-w-[1188px].items-start.gap-10.lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)].lg:gap-2.xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]
        [LEFT COLUMN]  .relative.z-10.pt-3.lg:pt-8
        [RIGHT COLUMN] .relative.flex.min-h-[430px].items-start.justify-end.pt-2.lg:min-h-[680px].lg:pt-6
    section (feature tabs section — "Build a content machine for social")
```

## LEFT COLUMN Structure
```
div.relative.z-10.pt-3.lg:pt-8
  div.mb-6 (badge "Introducing FeedHive v2.0")
    span.cta-gradient-ring.cta-gradient-ring-pill.inline-flex.rounded-full
      span inner badge content
        span "Introducing FeedHive"
        span.rounded-full.bg-[#e8e8ff].px-2.py-0.5.text-[11px].text-[#4457ff] "v2.0"
  h1 (headline)
    "Social media using "
    span (inline icon — rotating integration logos: Zapier, etc.)
    br
    span.text-[#4457FF] "Automation & AI Agents."
    span (dashed underline decoration line in #4457FF)
  ul.mt-5.space-y-2 (bullet checklist)
    li (✓ Create with AI. ...)
    li (✓ Automate. ...)
    li (✓ Collaborate. ...)
  div.mt-8.flex.items-center.gap-5
    div.cta-gradient-ring.cta-gradient-ring-pill.inline-flex.rounded-[15px]
      a href="https://app.feedhive.com/signup" "Get started for free"
    div.space-y-0.5.text-[13px] (try for free text)
      p "Try for free."
      p "Cancel anytime."
```

## RIGHT COLUMN Structure
```
div.relative.flex.min-h-[430px].lg:min-h-[680px].items-start.justify-end.pt-2.lg:pt-6
  div.relative.w-[125%].overflow-hidden.rounded-l-[16px]  (product screenshot, overflows right)
    img (changes based on active tab)
```

## FEATURE TABS Section (below main hero grid)
```
section (with bottom padding, px-4 lg:px-8)
  div.mx-auto.max-w-[1188px]
    p.text-[11px].font-semibold.tracking-[0.08em].uppercase "BUILD A CONTENT MACHINE FOR SOCIAL."
    div.mt-4 (tabs container — horizontal scrollable on mobile)
      button (×12, one per tab)
      [active tab style: bg-[#eef0ff] text-[#4457ff] border border-[#4457ff]/20 rounded-full]
      [inactive tab style: text-[#767b84] hover:text-[#20232b]]
```

## Computed Styles (key elements)

### Outer section
- position: relative
- overflow: hidden
- backgroundColor: rgb(255,255,255)

### H1 headline
- fontSize: 55px; fontWeight: 600; fontFamily: Plus Jakarta Sans
- lineHeight: 56.1px; letterSpacing: -1.925px (-0.035em)
- color: rgb(35, 37, 43) = #23252b
- marginTop: 28px

### Blue text span "Automation & AI Agents."
- color: rgb(68, 87, 255) = #4457FF

### Underline below headline
- A dashed blue underline SVG or border-bottom with #4457FF dashed style
- Appears directly below "Automation & AI Agents."

### Bullet list items
- fontSize: 16px; color: rgb(32,35,43)
- ✓ checkmark in #4457FF, bold label then normal description
- gap between items: 8px

### CTA button "Get started for free"
- display: inline-flex; height: 50px; padding: 0 32px
- backgroundColor: #4457FF; color: #fff
- borderRadius: 15px; fontSize: 15px; fontWeight: 500; letterSpacing: -0.03em
- transition-colors duration-300; hover: backgroundColor: #4F5FD7
- Wrapped in .cta-gradient-ring (animated gradient border on hover)

### Try for free text
- fontSize: 13px; color: #767b84; lineHeight: 20px; letterSpacing: -0.015em

### Tab buttons (inactive)
- fontSize: 14px; color: #767b84; padding: 6px 14px; borderRadius: 9999px
- border: 1px solid transparent

### Tab buttons (active)
- backgroundColor: #eef0ff (approx); color: #4457FF
- border: 1px solid rgba(68,87,255,0.2); borderRadius: 9999px

### Product image container
- width: 125% (overflows right edge)
- borderRadius: 16px 0 0 16px (left sides only)
- overflow: hidden

## Tab → Image Mapping
| Tab | Image |
|-----|-------|
| Composer | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-composer.webp` |
| AI Assistant | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-ai-assistant.webp` |
| Automation | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-automation.webp` |
| Post Conditions | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-post-conditions.webp` |
| Smart Scheduling | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-smart-scheduling.webp` |
| Social Inbox | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-social-inbox.webp` |
| Recycle Suggestions | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-recycle-suggestions.webp` |
| Analytics | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/analytics-hero.png` |
| AI Design Library | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-ai-design-library.webp` |
| OpenClaw | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-telegram.webp` |
| Claude Code | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/claude-code-terminal.webp` |
| API / CLI | `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feedhive-api-cli-terminal.webp` |

Default active tab on load: "Composer" (index 0)

## Image Transition
- On tab click: fade transition (opacity 0→1) on the img element, duration ~300ms

## Responsive Behavior
- **Desktop (1024px+):** 2-column grid, left 620px, right fills remainder; product image overflows right edge
- **Mobile:** Single column, left col full width, right col image below (stacked); tabs scroll horizontally

## Text Content (verbatim)
- Badge: "Introducing FeedHive" | "v2.0"
- H1: "Social media using Automation & AI Agents."
- Bullet 1: "Create with AI. Generate content that fits your tone-of-voice & brand."
- Bullet 2: "Automate. Create advanced workflows and posting conditions."
- Bullet 3: "Collaborate. Work together with humans and AI agents in one workspace."
- CTA: "Get started for free"
- Sub-text: "Try for free." / "Cancel anytime."
- Section label: "BUILD A CONTENT MACHINE FOR SOCIAL."
