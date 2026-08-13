# VideoSection Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/VideoSection.tsx`
- **Interaction model:** Static (embedded HTML5 video, autoplay muted loop)

## DOM Structure
```
section
  div.mx-auto.max-w-[1188px].px-4.lg:px-8
    div.text-center.mb-8
      p.label "SEE FOR YOURSELF"
      h2 "Creating content is this easy."
    div.rounded-[24px].overflow-hidden.border.border-black/5.shadow-lg
      video (autoplay muted loop playsInline controls)
```

## Computed Styles

### Section label
- fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase
- color: rgb(68, 87, 255) = #4457FF

### H2
- fontSize: 44-52px; fontWeight: 700-800; Plus Jakarta Sans
- color: rgb(32,35,43); letterSpacing: -0.03em

### Video container
- borderRadius: 24px; overflow: hidden
- border: 1px solid rgba(0,0,0,0.05)
- boxShadow: 0 20px 60px rgba(0,0,0,0.1)
- maxWidth: 100%
- aspectRatio: 16/9 or video native

## Notes
- Video duration: 1:04
- Use a `<video>` element with controls, muted, autoplay, playsInline
- The video src was an inline hosted video — use a placeholder that looks like the video container
- Since we can't download the actual video binary, render a styled video container with a play button overlay
- Alternative: use a poster image if available

## Text Content
- Label: "SEE FOR YOURSELF"
- H2: "Creating content is this easy."

## Responsive Behavior
- Full width on mobile
- Max width 1188px centered on desktop
