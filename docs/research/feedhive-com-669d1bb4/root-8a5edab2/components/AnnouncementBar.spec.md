# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar.tsx`
- **Interaction model:** Static

## DOM Structure
```
div.announcement-bar
  p
    span "Limited launch bonus:"
    a (blue link) "Double your AI credits for 3 months when you start today →"
```

## Computed Styles

### Container div
- display: block
- backgroundColor: rgb(244, 243, 242) = #f4f3f2
- borderBottom: 1px solid rgba(0,0,0,0.05)
- padding: 8px 16px (py-2 px-4)
- textAlign: center
- fontSize: 11px mobile / 14px sm+
- fontWeight: 600
- letterSpacing: -0.01em
- color: rgb(45, 47, 53) = #2d2f35

### Link text
- color: rgb(68, 87, 255) = #4457FF (primary blue)
- textDecoration: none (or underline on hover)

## Text Content (verbatim)
"Limited launch bonus: Double your AI credits for 3 months when you start today →"

## Responsive Behavior
- Mobile: 11px font
- sm+ (640px+): 14px font
- Full-width bar

## States & Behaviors
- Static — no animation, no hover effects on container
- Link hover: likely color darkens slightly
