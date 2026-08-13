# FeatureShowcase Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeatureShowcase.tsx`
- **Interaction model:** Static (3 alternating feature panels: image left/right)

## DOM Structure
```
section
  div.mx-auto.max-w-[1188px].px-4.lg:px-8
    div.text-center.mb-12
      p.label "AI-POWERED SOCIAL MEDIA WORKFLOW"
      h2 "Everything your social media needs to keep moving."
    div (feature panels, alternating layout)
      Panel 1: image LEFT, text RIGHT
        "Publish everywhere from one place."
        Image: showcase-image-1.webp (cross-posting UI mockup)
      Panel 2: image RIGHT, text LEFT
        "Keep your team and content aligned."
        Image: showcase-image-2.webp (approval/review UI mockup)
      Panel 3: image LEFT, text RIGHT
        "Automate the schedule behind the scenes."
        Image: automation UI mockup
```

## Each Panel Structure
```
div.grid.grid-cols-1.gap-8.lg:grid-cols-2.lg:gap-16.items-center.py-12
  div (image side)
    div.rounded-[20px].overflow-hidden.border.border-black/5.bg-[#f7f7f9]
      img (product screenshot)
  div (text side)
    h3 "Publish everywhere from one place."
    p (description)
    a "Get started" (ghost button with arrow)
```

## Computed Styles

### Section label
- color: #4457FF; fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase

### H2
- Plus Jakarta Sans, 44-52px, weight 700-800; color: #20232b; letterSpacing: -0.03em

### Panel h3 titles
- Plus Jakarta Sans, 28-32px, weight 700; color: #20232b; letterSpacing: -0.02em; lineHeight: 1.15

### Panel descriptions
- Inter, 15-16px, color: #4f5562, lineHeight: 1.6

### "Get started" button (ghost)
- backgroundColor: transparent; border: 1px solid #dfdfe4; borderRadius: 11px
- padding: 8px 20px; fontSize: 14px; fontWeight: 500; color: #20232b
- hover: border-color darkens

### Image container
- borderRadius: 20px; overflow: hidden
- border: 1px solid rgba(0,0,0,0.05); backgroundColor: #f7f7f9

## Assets
- Panel 1 image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-1.webp`
- Panel 2 image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-2.webp`
- Panel 3 image: feature-image-4 or another automation screenshot

## Text Content (verbatim)
- Label: "AI-POWERED SOCIAL MEDIA WORKFLOW"
- H2: "Everything your social media needs to keep moving."
- Panel 1: "Publish everywhere from one place." — "Turn one post into channel-ready versions for Instagram, LinkedIn, X, YouTube, and more - without rebuilding it for every platform."
- Panel 2: "Keep your team and content aligned." — "Plan posts, review drafts, leave feedback, and approve content before it goes live."
- Panel 3: "Automate the schedule behind the scenes." — "Use posting plans, post conditions, and recycled content to keep your channels active without starting from scratch every day."

## Responsive Behavior
- Desktop: 2-col alternating grid (image/text swap per panel)
- Mobile: single column, image always above text
- Dividers between panels (horizontal border)
