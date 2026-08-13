# GradientCTA Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/GradientCTA.tsx`
- **Interaction model:** Static (gradient card with CTA + 2-panel mockup at bottom)

## DOM Structure
```
section.bg-white.px-4.pb-10.pt-7.sm:px-6.sm:pb-14.lg:px-8.lg:pt-10.lg:pb-[84px]
  div.mx-auto.max-w-[1248px]
    div.relative.overflow-hidden.rounded-[34px] (GRADIENT CARD)
      [background: linear-gradient(135deg, #4e7cff 0%, #9f4bff 24%, #d54a96 58%, #ed7d3f 100%)]
      [+ radial gradient overlays for light spots]
      div.pointer-events-none.absolute.inset-0 (overlay)
      div.px-[56px].pt-[46px].flex.items-start.justify-between (content row)
        div (left: text + button)
          p.label "GET STARTED."
          h2 "Try FeedHive for free and watch it transform your social media presence."
          div.flex.items-center.gap-4.mt-8
            a "Get started. It's FREE" (white button)
            div (Try for free. / Cancel anytime.)
          div.mt-8 (brand logos — white versions)
            img beehiiv, fauna, prismic, Senja (heart logo), Riverside, thirdweb
      div (right + bottom: 2-panel mockup screenshots)
        [AI chat interface mockup — left panel]
        [Text editor with AI suggestions — right panel]
```

## Computed Styles

### Outer section
- backgroundColor: #fff
- padding: 28px 16px 40px (mobile) / 40px 32px 84px (desktop)

### Gradient card
- borderRadius: 34px; overflow: hidden
- backgroundImage: linear-gradient(135deg, #4e7cff 0%, #9f4bff 24%, #d54a96 58%, #ed7d3f 100%)
- padding: 46px 56px 0 (content area)

### Radial gradient overlays (decorative light spots)
```css
background-image: 
  radial-gradient(circle at 12% 22%, rgba(255,255,255,0.55), transparent 17%),
  radial-gradient(circle at 82% 20%, rgba(255,255,255,0.14), transparent 22%),
  radial-gradient(circle at 78% 100%, rgba(86,74,255,0.5), transparent 24%),
  linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0));
```

### Section label "GET STARTED."
- fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em; textTransform: uppercase
- color: rgba(255,255,255,0.7)

### H2 heading (white on gradient)
- Plus Jakarta Sans, 40-48px, weight 700-800, color: #ffffff
- letterSpacing: -0.03em; lineHeight: 1.1; maxWidth: 540px

### White CTA button
- backgroundColor: #fff; color: #24262d
- borderRadius: 16px; padding: 0 28px; height: 52px
- fontSize: 16px; fontWeight: 600; display: inline-flex; alignItems: center

### Sub-text (Try for free)
- fontSize: 13px; color: rgba(255,255,255,0.7); lineHeight: 20px

### Brand logos (white versions)
- display: flex; gap: 24px; alignItems: center; flexWrap: wrap
- filter: brightness(0) invert(1) OR actual white logo variants
- Each logo: height ~20px, opacity 0.8-0.9

### 2-panel mockup at bottom
- Position at bottom of card, partially visible (cropped at card bottom)
- Left panel: AI chat interface (blue/purple tones)
- Right panel: Text editor with content suggestions (orange/red accent side)
- Both have rounded-t corners, overflow at card bottom

## Text Content (verbatim)
- Label: "GET STARTED."
- H2: "Try FeedHive for free and watch it transform your social media presence."
- Button: "Get started. It's FREE"
- Sub: "Try for free." / "Cancel anytime."
- Brand logos: beehiiv, fauna, prismic, Senja, Riverside, thirdweb

## Responsive Behavior
- Desktop: text left, mockup panels at bottom right
- Mobile: stacked, full width card, simplified layout
- Gradient card goes nearly edge-to-edge on mobile (small margin)
